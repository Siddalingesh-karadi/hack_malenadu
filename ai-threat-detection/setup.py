"""
Setup script for AI Threat Detection project
"""

import os
import sys
from pathlib import Path

def check_python_version():
    """Verify Python version is 3.8 or higher"""
    if sys.version_info < (3, 8):
        print("❌ Python 3.8 or higher is required")
        sys.exit(1)
    print(f"✓ Python version: {sys.version_info.major}.{sys.version_info.minor}")


def install_dependencies():
    """Install required packages"""
    print("\n📦 Installing dependencies...")
    os.system("pip install -r requirements.txt")
    print("✓ Dependencies installed")


def create_directories():
    """Create necessary directories"""
    print("\n📁 Creating directories...")
    directories = [
        "logs",
        "models",
        "data/generated",
        "database"
    ]
    
    for directory in directories:
        path = Path(directory)
        path.mkdir(parents=True, exist_ok=True)
        print(f"✓ Created {directory}")


def check_environment():
    """Check if .env file exists"""
    print("\n⚙️  Checking environment...")
    if not Path(".env").exists():
        print("⚠️  .env file not found. Creating default...")
        create_default_env()
    else:
        print("✓ .env file exists")


def create_default_env():
    """Create default .env file"""
    default_env = """# Environment Configuration
DEBUG=True
LOG_LEVEL=INFO

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/threat_detection
MONGO_URL=mongodb://localhost:27017/

# API
API_PORT=5000
API_HOST=127.0.0.1

# Kafka
KAFKA_BROKER=localhost:9092
KAFKA_TOPIC=security_logs

# ML Model
MODEL_PATH=./models/threat_detector.pkl
CONFIDENCE_THRESHOLD=0.75
"""
    with open(".env", "w") as f:
        f.write(default_env)
    print("✓ Default .env created")


def main():
    """Run setup"""
    print("=" * 50)
    print("🔐 AI Threat Detection - Setup")
    print("=" * 50)
    
    check_python_version()
    create_directories()
    check_environment()
    install_dependencies()
    
    print("\n" + "=" * 50)
    print("✅ Setup complete!")
    print("=" * 50)
    print("\n🚀 Next steps:")
    print("1. Update .env with your configuration")
    print("2. Ensure MongoDB is running")
    print("3. Run: python -m backend.main")
    print("\n" + "=" * 50)


if __name__ == "__main__":
    main()
