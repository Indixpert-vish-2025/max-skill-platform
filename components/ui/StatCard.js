import React from 'react';

const miniChartData = {
  students: [45, 62, 38, 70, 55, 80, 65],
  courses: [30, 48, 55, 40, 72, 60, 68],
  earnings: [35, 50, 42, 58, 48, 62, 54],
};

export default function StatCard({ title, value, delta, variant = 'students' }) {
  const chartBars = miniChartData[variant] || miniChartData.students;

  return (
    <div className={`stat-card stat-${variant}`}>
      <p className="stat-label mb-0">{title}</p>
      <div className="stat-value">{value}</div>
      {delta && <p className="stat-delta">{delta}</p>}

      <div className="stat-chart" aria-hidden="true">
        {chartBars.map((height, index) => (
          <span
            key={`${variant}-bar-${index}`}
            className={`mini-bar ${index === chartBars.length - 2 ? 'highlight' : ''}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      {(variant === 'courses' || variant === 'students') && (
        <div className="stat-meta">
          <span>Performance</span>
          <span>Impression</span>
        </div>
      )}
    </div>
  );
}
