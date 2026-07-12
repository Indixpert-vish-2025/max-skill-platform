import React from 'react';

function buildLinePath(values, width, height, padding = 16) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const step = (width - padding * 2) / (values.length - 1);

  return values
    .map((value, index) => {
      const x = padding + index * step;
      const y = height - padding - ((value - min) / range) * (height - padding * 2);
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');
}

export default function LearningActivityCard({
  title = 'Learning Activity',
  days = [],
  lastWeek = [],
  thisWeek = [],
  tooltip = {},
}) {
  const width = 620;
  const height = 240;
  const lastWeekPath = buildLinePath(lastWeek, width, height);
  const thisWeekPath = buildLinePath(thisWeek, width, height);
  const tooltipIndex = days.indexOf(tooltip.day);

  return (
    <div className="student-card student-learning-activity">
      <div className="student-card__header">
        <h5>{title}</h5>
        <div className="student-card__actions">
          <div className="student-legend">
            <span><i className="dot dot-yellow" />Last Week</span>
            <span><i className="dot dot-green" />This Week</span>
          </div>
          <button type="button" className="student-dots-btn" aria-label="More options">
            <i className="bi bi-three-dots" />
          </button>
        </div>
      </div>

      <div className="student-learning-activity__chart">
        <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Learning activity line chart">
          {[0, 1, 2, 3, 4].map((line) => (
            <line
              key={line}
              x1="16"
              y1={16 + line * 50}
              x2={width - 16}
              y2={16 + line * 50}
              className="student-chart-grid-line"
            />
          ))}
          <path d={lastWeekPath} className="student-line student-line--yellow" fill="none" />
          <path d={thisWeekPath} className="student-line student-line--green" fill="none" />
          {tooltipIndex >= 0 && (
            <g transform={`translate(${16 + tooltipIndex * ((width - 32) / (days.length - 1))} ${height / 2 - 20})`}>
              <rect x="-36" y="-18" width="72" height="36" rx="8" className="student-chart-tooltip" />
              <text x="0" y="-2" textAnchor="middle" className="student-chart-tooltip-value">
                {tooltip.value}
              </text>
              <text x="0" y="12" textAnchor="middle" className="student-chart-tooltip-delta">
                {tooltip.delta}
              </text>
            </g>
          )}
        </svg>
        <div className="student-chart-x-axis">
          {days.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
