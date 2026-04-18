import React from "react";

function SeverityChart({ alerts }) {
  const severityCount = {
    low: alerts.filter(a => a.severity?.toLowerCase() === "low").length,
    medium: alerts.filter(a => a.severity?.toLowerCase() === "medium").length,
    high: alerts.filter(a => a.severity?.toLowerCase() === "high").length,
    critical: alerts.filter(a => a.severity?.toLowerCase() === "critical").length
  };

  const total = Object.values(severityCount).reduce((a, b) => a + b, 0) || 1;

  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
      <h2>Threat Severity Distribution</h2>
      {Object.entries(severityCount).map(([level, count]) => (
        <div key={level} style={{ marginBottom: "10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{level.toUpperCase()}</span>
            <span>{count} ({((count / total) * 100).toFixed(1)}%)</span>
          </div>
          <div style={{
            width: "100%",
            height: "20px",
            background: "#eee",
            borderRadius: "4px",
            overflow: "hidden"
          }}>
            <div style={{
              width: `${(count / total) * 100}%`,
              height: "100%",
              background: level === "critical" ? "red" : level === "high" ? "orange" : level === "medium" ? "yellow" : "green"
            }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SeverityChart;