/**
 * API Service
 * Handles all backend API calls
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

class ApiService {
    /**
     * Get health status
     */
    async getHealth() {
        try {
            const response = await fetch(`${API_BASE_URL}/`);
            return await response.json();
        } catch (error) {
            console.error('Health check failed:', error);
            throw error;
        }
    }

    /**
     * Run threat detection
     */
    async detectThreats() {
        try {
            const response = await fetch(`${API_BASE_URL}/detect`);
            return await response.json();
        } catch (error) {
            console.error('Threat detection failed:', error);
            throw error;
        }
    }

    /**
     * Get all alerts
     */
    async getAlerts() {
        try {
            const response = await fetch(`${API_BASE_URL}/alerts`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch alerts:', error);
            throw error;
        }
    }

    /**
     * Get alert details
     */
    async getAlertDetails(alertId) {
        try {
            const response = await fetch(`${API_BASE_URL}/alerts/${alertId}`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch alert details:', error);
            throw error;
        }
    }

    /**
     * Get threat statistics
     */
    async getStatistics() {
        try {
            const response = await fetch(`${API_BASE_URL}/stats`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch statistics:', error);
            throw error;
        }
    }

    /**
     * Get severity distribution
     */
    async getSeverityDistribution() {
        try {
            const response = await fetch(`${API_BASE_URL}/severity-distribution`);
            return await response.json();
        } catch (error) {
            console.error('Failed to fetch severity distribution:', error);
            throw error;
        }
    }
}

export default new ApiService();
