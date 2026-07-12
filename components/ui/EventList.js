import React from 'react';

export default function EventList({ events = [], title = "Upcoming Events" }) {
  return (
    <div className="event-list card p-4 h-100">
      <div className="event-header mb-4">
        <h5 className="mb-0">{title}</h5>
      </div>
      <div className="events-container">
        {events.map((event, idx) => (
          <div key={idx} className="event-item">
            <div className="event-date">
              <span className="event-date-text">{event.date}</span>
              <span className="event-time-text">{event.time}</span>
            </div>
            <div className="event-content">
              {event.title && (
                <>
                  <p className="event-title mb-1">{event.title}</p>
                  <p className="event-subtitle mb-0">{event.subtitle}</p>
                </>
              )}
            </div>
            {event.title && <span className="event-action">→</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
