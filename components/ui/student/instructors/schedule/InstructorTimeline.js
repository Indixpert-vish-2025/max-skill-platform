"use client";

export default function InstructorTimeline({ items = [] }) {
  const hours = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 8;
    const period = hour >= 12 ? "PM" : "AM";
    const display = hour > 12 ? hour - 12 : hour;
    return `${display} ${period}`;
  });

  return (
    <div className="instructor-timeline-card">
      <div className="instructor-timeline-header">
        <h5>Today&apos;s Schedule</h5>
      </div>

      <div className="instructor-timeline-wrapper">
        <div className="instructor-timeline-hours">
          {hours.map((hour) => (
            <div key={hour} className="instructor-hour">
              {hour}
            </div>
          ))}
        </div>

        <div className="instructor-timeline-grid">
          {hours.map((_, index) => (
            <div key={index} className="instructor-timeline-line" />
          ))}

          {items.map((item) => (
            <div
              key={item.id}
              className={`instructor-event-card accent-${item.accent}`}
              style={{ top: `${(item.startHour - 8) * 54}px` }}
            >
              <div className="instructor-event-header">
                <h6>{item.title}</h6>
                <span>{item.time}</span>
              </div>
              <p>{item.subtitle}</p>
              <div className="instructor-event-dots">
                <span />
                <span />
                <span />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
