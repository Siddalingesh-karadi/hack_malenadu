"""
Configuration Module
Centralized configuration for the backend API
"""

import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Base configuration"""
    DEBUG = os.getenv('DEBUG', 'False') == 'True'
    LOG_LEVEL = os.getenv('LOG_LEVEL', 'INFO')
    API_PORT = int(os.getenv('API_PORT', 5000))
    API_HOST = os.getenv('API_HOST', '127.0.0.1')
    
    # Database
    DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql://user:password@localhost:5432/threat_detection')
    
    # Kafka
    KAFKA_BROKER = os.getenv('KAFKA_BROKER', 'localhost:9092')
    KAFKA_TOPIC = os.getenv('KAFKA_TOPIC', 'security_logs')
    
    # ML Model
    MODEL_PATH = os.getenv('MODEL_PATH', './models/threat_detector.pkl')
    CONFIDENCE_THRESHOLD = float(os.getenv('CONFIDENCE_THRESHOLD', 0.75))


class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True
    LOG_LEVEL = 'DEBUG'


class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False
    LOG_LEVEL = 'WARNING'


class TestingConfig(Config):
    """Testing configuration"""
    TESTING = True
    DEBUG = True
    DATABASE_URL = 'sqlite:///:memory:'
