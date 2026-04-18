from fastapi import APIRouter
from streaming.stream_processor import StreamProcessor
from backend.config import alerts_collection
from datetime import datetime


router = APIRouter()

try:
    processor = StreamProcessor()
except Exception as e:
    print(f"Warning: StreamProcessor initialization failed: {e}")
    processor = None


@router.get("/")
def home():
    return {
        "status": "AI Threat Detection Engine Running Successfully"
    }


@router.get("/detect")
def detect():
    try:
        if processor is None:
            return {"error": "Processor not available"}
        
        result = processor.process()

        alert_document = {
            "ip": result["log"]["ip"],
            "event": result["log"]["event"],
            "severity": result["severity"],
            "score": result["score"],
            "explanation": result["explanation"],
            "response": result["response"],
            "timestamp": datetime.fromtimestamp(
                result["log"]["timestamp"]
            )
        }

        alerts_collection.insert_one(alert_document)
        return result
    except Exception as e:
        print(f"Error in detect: {e}")
        return {"error": str(e)}


@router.get("/alerts")
def get_alerts():
    try:
        alerts = list(
            alerts_collection.find(
                {},
                {"_id": 0}
            ).sort("timestamp", -1).limit(100)
        )
        return alerts
    except Exception as e:
        print(f"Error fetching alerts: {e}")
        return {"error": str(e)}