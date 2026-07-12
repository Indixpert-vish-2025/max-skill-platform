import React from 'react';

export default function ActivityChart({ title = "Working Activity" }) {
  // Placeholder data for activity chart - 7 days of data
  const data = [65, 58, 72, 68, 75, 61, 69];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const maxValue = Math.max(...data);
  const chartHeight = 200;

  return (
    <div className="activity-chart card p-4">
      <div className="chart-header mb-4">
        <h5 className="mb-0">{title}</h5>
      </div>
      <div className="chart-container">
        <div className="chart-bars d-flex align-items-flex-end justify-content-space-around gap-3">
          {data.map((value, idx) => {
            const barHeight = (value / maxValue) * chartHeight;
            return (
              <div key={idx} className="bar-wrapper">
                <div className="chart-bar" style={{ height: `${barHeight}px` }}></div>
                <div className="chart-label mt-2">{value}</div>
              </div>
            );
          })}
        </div>
        <div className="chart-x-axis d-flex justify-content-space-around gap-3 mt-3">
          {days.map((day) => (
            <div key={day} className="chart-x-label">
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
