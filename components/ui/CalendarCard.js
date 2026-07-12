import React from 'react';

export default function CalendarCard({ month = 'January', year = 2022, activeDay = 5, markedDay = 7 }) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startOffset = 5;
  const calendarDays = [...Array(startOffset).fill(null), ...days];
  const dayLabels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="calendar-card">
      <div className="calendar-header">
        <h5>
          {month}, {year}
        </h5>
        <div className="d-flex gap-2">
          <button type="button" className="calendar-nav-btn" aria-label="Previous month">
            <i className="bi bi-chevron-left" />
          </button>
          <button type="button" className="calendar-nav-btn" aria-label="Next month">
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      </div>

      <div className="calendar-day-labels">
        {dayLabels.map((day, index) => (
          <div key={`${day}-${index}`} className={`calendar-day-label ${index >= 5 ? 'weekend' : ''}`}>
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {calendarDays.map((day, idx) => (
          <div
            key={idx}
            className={[
              'calendar-day',
              !day ? 'empty' : '',
              day === activeDay ? 'active' : '',
              day === markedDay ? 'marked' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
