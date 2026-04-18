import React from "react";

function StatusCards({ alerts }) {
  const count = level =>
    alerts.filter(a => a.severity?.toLowerCase() === level.toLowerCase()).length;

  const stats = [
    { label: "Total Alerts", value: alerts.length, color: "#3b82f6" },
    { label: "Critical", value: count("critical"), color: "#ef4444" },
    { label: "High", value: count("high"), color: "#f97316" },
    { label: "Medium", value: count("medium"), color: "#f59e0b" }
  ];

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}>
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            minWidth: "150px",
            padding: "15px",
            border: `2px solid ${stat.color}`,
            borderRadius: "8px",
            textAlign: "center"
          }}
        >
          <div style={{ fontSize: "12px", color: "#666" }}>{stat.label}</div>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: stat.color }}>
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatusCards;