"use client";

import MiniBarChart from "./MiniBarChart";
import MiniLineChart from "./MiniLineChart";
import EarningsChart from "./EarningsChart";

export default function StatCard({
  title,
  value,
  delta,
  variant,
  chart,
}) {
  return (
    <div className={`ins-stat-card ${variant}`}>

      <div className="ins-card-header">

        <p>{title}</p>

        <h2>{value}</h2>

        <span>{delta}</span>

      </div>

      <div className="ins-card-chart">

        {variant === "students" && (
          <MiniBarChart chart={chart} />
        )}

        {variant === "courses" && (
          <MiniLineChart chart={chart} />
        )}

        {variant === "earnings" && (
          <EarningsChart chart={chart} />
        )}

      </div>

    </div>
  );
}