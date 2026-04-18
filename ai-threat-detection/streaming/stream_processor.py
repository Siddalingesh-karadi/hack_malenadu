"""
Stream Processor Module
Simulates threat detection processing
"""

import random
from datetime import datetime


class StreamProcessor:
    """Processes streaming data and generates threat alerts"""

    def __init__(self):
        """Initialize the stream processor"""
        self.ip_pool = [
            "192.168.1.100", "10.0.0.50", "172.16.0.5", "203.0.113.42", "198.51.100.89"
        ]
        self.events = [
            "SQL Injection Attempt", "Port Scan", "DDoS Attack", "Malware Detection",
            "Unauthorized Access", "Brute Force", "Suspicious Login", "Data Exfiltration"
        ]
        self.severities = ["low", "medium", "high", "critical"]

    def process(self):
        """Process and return a threat alert"""
        return {
            "log": {
                "ip": random.choice(self.ip_pool),
                "event": random.choice(self.events),
                "timestamp": datetime.now().timestamp()
            },
            "severity": random.choice(self.severities),
            "score": round(random.uniform(0.1, 1.0), 2),
            "explanation": "Detected suspicious activity pattern matching known threat indicators",
            "response": random.choice(["blocked", "flagged", "investigated", "pending"])
        }
