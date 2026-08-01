import React from "react";

export default function StatCard({
  title,
  value,
  delta,
  variant = "students",
  chart = [],
}) {
  const chartBars = chart;

  return (
    <div className={`stat-card stat-${variant}`}>
      <p className="stat-label mb-0">{title}</p>

      <div className="stat-value">{value}</div>

      {delta && <p className="stat-delta">{delta}</p>}

      <div className="stat-chart" aria-hidden="true">
        {chartBars.map((height, index) => (
          <span
            key={`${variant}-bar-${index}`}
            className={`mini-bar ${
              index === chartBars.length - 2 ? "highlight" : ""
            }`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      {(variant === "courses" || variant === "students") && (
        <div className="stat-meta">
          <span>Performance</span>
          <span>Impression</span>
        </div>
      )}
    </div>
  );
}