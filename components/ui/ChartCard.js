import React from 'react';

export default function ChartCard({ title, label, description }) {
  return (
    <div className="chart-card card p-4 h-100">
      <div className="chart-header mb-4">
        <h5 className="mb-0">{title}</h5>
        {description && <p className="text-muted mb-0">{description}</p>}
      </div>
      <div className="chart-placeholder">
        <div className="placeholder-line"></div>
        <div className="placeholder-line"></div>
        <div className="placeholder-text">{label}</div>
      </div>
    </div>
  );
}
