from fastapi import FastAPI
from backend.routes import router
import uvicorn


app = FastAPI(
    title="AI Cyber Threat Detection Engine",
    description="Real-time Threat Detection + Correlation + Explainable Alerts",
    version="1.0"
)

# Register router
app.include_router(router)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)


