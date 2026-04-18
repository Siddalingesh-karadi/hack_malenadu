# 🔐 AI Threat Detection System

Real-time cybersecurity threat detection, correlation, and explainable AI-powered alerts.

## 📋 Prerequisites

- Python 3.8+
- MongoDB (local or remote)
- Kafka (optional, for streaming)
- pip (Python package manager)

## 🚀 Quick Start

### Option 1: Automated Setup (Python)

```powershell
python setup.py
```

This will:
- Verify Python version
- Create necessary directories
- Install dependencies
- Create default `.env` file

### Option 2: PowerShell Script

```powershell
.\run.ps1
```

### Option 3: Manual Setup

1. **Install dependencies:**
   ```powershell
   pip install -r requirements.txt
   ```

2. **Create `.env` file** (copy from `.env` template)

3. **Start MongoDB:**
   ```powershell
   mongod
   ```

4. **Run the backend:**
   ```powershell
   python -m backend.main
   ```

## 📁 Project Structure

```
ai-threat-detection/
├── backend/           # FastAPI backend
│   ├── main.py
│   ├── routes.py
│   ├── config.py
│   └── __init__.py
├── detection_engine/  # ML-based threat detection
│   ├── detector.py
│   └── correlator.py
├── data/              # Log generation & processing
│   └── log_generator.py
├── explainability/    # SHAP explanations
│   └── explainer.py
├── playbooks/         # Response playbooks
│   └── playbook_engine.py
├── streaming/         # Real-time streaming
├── database/          # Database schemas
├── frontend/          # UI components
├── requirements.txt
├── .env
├── setup.py
└── run.ps1
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home status |
| GET | `/docs` | Swagger UI documentation |
| GET | `/detect` | Run threat detection |
| GET | `/alerts` | Retrieve stored alerts |

## ⚙️ Configuration

Edit `.env` file to configure:

```env
DEBUG=True
MONGO_URL=mongodb://localhost:27017/
API_PORT=8000
CONFIDENCE_THRESHOLD=0.75
```

## 🧪 Testing

```powershell
# Check health
curl http://localhost:8000/

# Detect threats
curl http://localhost:8000/detect

# Get alerts
curl http://localhost:8000/alerts
```

## 📝 Development

To add new features:

1. Add new endpoints in `backend/routes.py`
2. Implement logic in detection_engine/
3. Update requirements.txt if adding packages
4. Test with the API

## 🛠️ Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running: `mongod`
- Check MONGO_URL in .env

**Port Already in Use:**
- Change API_PORT in .env
- Or kill process: `Get-Process | Where-Object {$_.Port -eq 8000}`

**Missing Dependencies:**
- Run: `pip install -r requirements.txt`

## 📚 Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [MongoDB Python Driver](https://pymongo.readthedocs.io/)
- [SHAP Documentation](https://shap.readthedocs.io/)

## 📄 License

MIT License

## 👤 Author

AI Threat Detection Team

---

**Status:** Running on http://localhost:8000
