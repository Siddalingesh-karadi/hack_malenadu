/**
 * Main App Component
 * Root component for the threat detection dashboard
 */

import React, { useEffect, useState } from 'react';
import StatusCards from './components/StatusCards';
import AlertTable from './components/AlertTable';
import SeverityChart from './components/SeverityChart';
import api from './api';

const App = () => {
    const [isHealthy, setIsHealthy] = useState(false);

    useEffect(() => {
        checkHealth();
        const interval = setInterval(checkHealth, 30000); // Check every 30 seconds
        return () => clearInterval(interval);
    }, []);

    const checkHealth = async () => {
        try {
            const health = await api.getHealth();
            setIsHealthy(health.status === 'healthy' || health.status === 'AI Threat Detection Engine Running Successfully');
        } catch (error) {
            console.error('Health check failed:', error);
            setIsHealthy(false);
        }
    };

    return (
        <div style={{
            background: '#0f172a',
            color: '#e2e8f0',
            minHeight: '100vh',
            padding: '20px'
        }}>
            {/* Header */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '30px',
                borderBottom: '2px solid #334155',
                paddingBottom: '20px'
            }}>
                <div>
                    <h1 style={{ fontSize: '32px', fontWeight: 'bold', margin: '0' }}>
                        🔐 AI Threat Detection
                    </h1>
                    <p style={{ color: '#94a3b8', margin: '5px 0 0 0' }}>
                        Intelligent Real-time Security Monitoring
                    </p>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <div style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: isHealthy ? '#10b981' : '#ef4444',
                        animation: isHealthy ? 'pulse 2s infinite' : 'none'
                    }}></div>
                    <span style={{ color: '#94a3b8' }}>
                        {isHealthy ? 'System Healthy' : 'System Error'}
                    </span>
                </div>
            </header>

            {/* Main Content */}
            <main>
                {/* Status Cards */}
                <section style={{ marginBottom: '30px' }}>
                    <h2 style={{ marginBottom: '15px', color: '#cbd5e1' }}>System Overview</h2>
                    <StatusCards />
                </section>

                {/* Charts and Data */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    {/* Severity Chart */}
                    <section>
                        <SeverityChart />
                    </section>

                    {/* Quick Stats */}
                    <section style={{
                        background: '#1e293b',
                        borderRadius: '8px',
                        padding: '20px',
                        marginTop: '20px'
                    }}>
                        <h3 style={{ color: '#e2e8f0', marginBottom: '15px' }}>
                            Quick Actions
                        </h3>
                        <button style={actionButtonStyle} onClick={() => window.location.reload()}>
                            🔄 Refresh Dashboard
                        </button>
                        <button style={actionButtonStyle}>
                            📊 Export Report
                        </button>
                        <button style={actionButtonStyle}>
                            ⚙️ Settings
                        </button>
                        <button style={actionButtonStyle}>
                            📞 Support
                        </button>
                    </section>
                </div>

                {/* Alert Table */}
                <section style={{ marginTop: '30px' }}>
                    <h2 style={{ marginBottom: '15px', color: '#cbd5e1' }}>Recent Alerts</h2>
                    <AlertTable />
                </section>
            </main>

            {/* Footer */}
            <footer style={{
                marginTop: '40px',
                paddingTop: '20px',
                borderTop: '2px solid #334155',
                textAlign: 'center',
                color: '#64748b',
                fontSize: '12px'
            }}>
                <p>AI Threat Detection System v1.0 | Real-time Security Monitoring</p>
            </footer>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
            `}</style>
        </div>
    );
};

const actionButtonStyle = {
    display: 'block',
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background 0.2s',
    ':hover': { background: '#2563eb' }
};

export default App;
