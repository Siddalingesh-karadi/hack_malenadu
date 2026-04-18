import React from "react";

function AlertTable({ alerts }) {
  return (
    <div style={{ marginTop: "20px", overflowX: "auto" }}>
      <h2>Recent Alerts</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
        <thead style={{ background: "#f5f5f5" }}>
          <tr>
            <th style={tableHeaderStyle}>IP</th>
            <th style={tableHeaderStyle}>Event</th>
            <th style={tableHeaderStyle}>Severity</th>
            <th style={tableHeaderStyle}>Score</th>
            <th style={tableHeaderStyle}>Explanation</th>
            <th style={tableHeaderStyle}>Response</th>
            <th style={tableHeaderStyle}>Time</th>
          </tr>
        </thead>
        <tbody>
          {alerts.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ padding: "20px", textAlign: "center", color: "#999" }}>
                No alerts detected
              </td>
            </tr>
          ) : (
            alerts.map((a, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={tableCellStyle}>{a.ip || "N/A"}</td>
                <td style={tableCellStyle}>{a.event || "N/A"}</td>
                <td style={{
                  ...tableCellStyle,
                  fontWeight: "bold",
                  color: getSeverityColor(a.severity)
                }}>
                  {(a.severity || "N/A").toUpperCase()}
                </td>
                <td style={{
                  ...tableCellStyle,
                  color: a.score > 0.7 ? "red" : a.score > 0.4 ? "orange" : "green"
                }}>
                  {typeof a.score === "number" ? a.score.toFixed(2) : "N/A"}
                </td>
                <td style={tableCellStyle}>{a.explanation || "N/A"}</td>
                <td style={tableCellStyle}>{a.response || "pending"}</td>
                <td style={tableCellStyle}>
                  {a.timestamp ? new Date(a.timestamp).toLocaleString() : "N/A"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

const tableHeaderStyle = {
  padding: "12px",
  textAlign: "left",
  fontWeight: "bold",
  borderBottom: "2px solid #ccc"
};

const tableCellStyle = {
  padding: "12px",
  borderBottom: "1px solid #eee"
};

const getSeverityColor = (severity) => {
  const level = (severity || "").toLowerCase();
  const colors = { critical: "red", high: "orange", medium: "goldenrod", low: "green" };
  return colors[level] || "gray";
};

export default AlertTable;