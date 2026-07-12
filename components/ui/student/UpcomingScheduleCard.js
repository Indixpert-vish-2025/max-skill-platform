import React from 'react';
import { Button } from 'react-bootstrap';

export default function UpcomingScheduleCard({ title, date, items = [] }) {
  return (
    <div className="student-card student-schedule-card">
      <div className="student-schedule-card__header">
        <div>
          <h5>{title}</h5>
          <p>{date}</p>
        </div>
        <button type="button" className="student-schedule-add" aria-label="Add schedule">
          <i className="bi bi-plus-lg" />
        </button>
      </div>

      <div className="student-schedule-list">
        {items.map((item) => (
          <div key={`${item.title}-${item.date}`} className={`student-schedule-item accent-${item.accent}`}>
            <div className="student-schedule-item__title">{item.title}</div>
            <div className="student-schedule-item__meta">{item.date}</div>
            <div className="student-schedule-item__meta">{item.time}</div>
            <div className="student-schedule-item__instructor">
              <span className="student-schedule-avatar" aria-hidden="true">
                <i className="bi bi-person-fill" />
              </span>
              {item.instructor}
            </div>
          </div>
        ))}
      </div>

      <Button variant="outline-secondary" className="student-schedule-more">
        More Schedule
      </Button>
    </div>    
  );
}
