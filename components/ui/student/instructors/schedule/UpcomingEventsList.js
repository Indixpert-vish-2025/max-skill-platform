"use client";

import { Card } from "react-bootstrap";

export default function UpcomingEventsList({ title, date, items = [] }) {
  return (
    <Card className="instructor-schedule-events border-0 shadow-sm">
      <Card.Body>
        <div className="instructor-schedule-events__header">
          <div>
            <h5>{title}</h5>
            <p>{date}</p>
          </div>
          <button type="button" className="instructor-schedule-add" aria-label="Add event">
            <i className="bi bi-plus-lg" />
          </button>
        </div>

        <div className="instructor-schedule-events__list">
          {items.map((item) => (
            <div key={`${item.title}-${item.time}`} className="instructor-schedule-event">
              <div className="instructor-schedule-event__time">{item.time}</div>
              <div className="instructor-schedule-event__content">
                <span className="instructor-schedule-event__category">{item.category}</span>
                <strong>{item.title}</strong>
              </div>
            </div>
          ))}
        </div>

        <button type="button" className="instructor-schedule-more">
          More Schedule
        </button>
      </Card.Body>
    </Card>
  );
}
