import React from 'react';

const defaultBars = [332, 290, 275, 298, 215, 209, 265, 275, 298, 215, 209, 265];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const yAxis = [100, 75, 50, 25, 0];

export default function ActivityCard({ title = 'Working Activity', bars = defaultBars, activeMonth = 'Jul' }) {
  const maxBar = Math.max(...bars);

  return (
    <div className="activity-card">
      <div className="activity-header">
        <h5 className="activity-title">{title}</h5>
        <div className="activity-legend">
          <span className="legend-item">
            <span className="legend-dot income" />
            Income
          </span>
          <span className="legend-item">
            <span className="legend-dot expense" />
            Expense
          </span>
        </div>
      </div>

      <div className="activity-chart-wrap">
        <div className="activity-y-axis">
          {yAxis.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>

        <div className="activity-chart-body">
          <div className="activity-grid-lines" aria-hidden="true">
            {yAxis.map((value) => (
              <span key={`line-${value}`} />
            ))}
          </div>

          <div className="activity-bars">
            {bars.map((value, idx) => {
              const month = months[idx];
              const height = Math.round((value / maxBar) * 100);
              return (
                <div key={month} className="activity-bar-col">
                  <div className="activity-bar" style={{ height: `${height}%` }} />
                  <span className={`activity-bar-label ${month === activeMonth ? 'active' : ''}`}>{month}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
