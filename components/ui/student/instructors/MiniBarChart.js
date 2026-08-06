"use client";

export default function MiniBarChart({ chart = [] }) {
  const max = Math.max(...chart, 1);

  return (
    <div className="mini-bar-chart">
      {chart.map((item, index) => (
        <span
          key={index}
          className={index === chart.length - 2 ? "active" : ""}
          style={{
            height: `${(item / max) * 100}%`,
          }}
        />
      ))}
    </div>
  );
}