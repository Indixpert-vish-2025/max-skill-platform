import React from 'react';

export default function ScoreActivityCard({
  title = 'Score Activity',
  months = [],
  lastMonth = [],
  thisMonth = [],
  tooltip = {},
}) {
  const max = Math.max(...lastMonth, ...thisMonth, 1);
  const tooltipIndex = months.indexOf(tooltip.month);

  return (
    <div className="student-card student-score-activity">
      <div className="student-card__header">
        <h5>{title}</h5>
        <div className="student-card__actions">
          <div className="student-legend">
            <span><i className="dot dot-yellow" />Last Month</span>
            <span><i className="dot dot-green" />This Month</span>
          </div>
          <div className="student-year-select">
            <span>This Year</span>
            <i className="bi bi-chevron-down" />
          </div>
          <button type="button" className="student-dots-btn" aria-label="More options">
            <i className="bi bi-three-dots" />
          </button>
        </div>
      </div>

      <div className="student-score-activity__chart">
        <div className="student-score-bars">
          {months.map((month, index) => (
            <div key={month} className="student-score-bar-group">
              <div className="student-score-bar-pair">
                <div
                  className="student-score-bar student-score-bar--yellow"
                  style={{ height: `${(lastMonth[index] / max) * 100}%` }}
                />
                <div
                  className="student-score-bar student-score-bar--green"
                  style={{ height: `${(thisMonth[index] / max) * 100}%` }}
                />
              </div>
              <span className={`student-score-bar-label ${month === tooltip.month ? 'active' : ''}`}>
                {month}
              </span>
              {index === tooltipIndex && (
                <div className="student-score-tooltip">
                  <span>{tooltip.month}</span>
                  <strong>{tooltip.value}</strong>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
