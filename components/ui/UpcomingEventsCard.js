import React from 'react';

function groupEventsByDate(events) {
  return events.reduce((groups, event) => {
    const key = event.date;
    if (!groups[key]) groups[key] = [];
    groups[key].push(event);
    return groups;
  }, {});
}

export default function UpcomingEventsCard({ events = [], title = 'Upcoming Events' }) {
  const grouped = groupEventsByDate(events);

  return (
    <div className="upcoming-events-card">
      <h5 className="events-title">{title}</h5>

      {Object.entries(grouped).map(([date, dateEvents]) => (
        <div key={date} className="event-group">
          <div className="event-group-date">{date}</div>
          {dateEvents.map((event, idx) => (
            <div key={`${date}-${idx}`} className="event-item">
              <div className={`event-time ${idx === 0 ? 'primary' : ''}`}>{event.time}</div>
              <div className="event-content">
                {event.title && <p className="event-title">{event.title}</p>}
                {event.subtitle && <p className="event-subtitle">{event.subtitle}</p>}
              </div>
              {event.title && (
                <span className="event-action" aria-hidden="true">
                  <i className="bi bi-arrow-right" />
                </span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
