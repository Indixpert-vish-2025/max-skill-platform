import React from "react";

export default function ScheduleUpcomingCard({
  title,
  items = [],
}) {
  return (
    <div className="schedule-upcoming">

      <div className="schedule-upcoming__header">
        <h5>{title}</h5>

        <button type="button" className="view-all-btn">
          View All
        </button>
      </div>

      <div className="schedule-upcoming__list">

        {items.map((item) => (

          <div
            key={item.title}
            className={`schedule-upcoming__item ${item.accent}`}
          >

            <div className="left-border"></div>

            <div className="schedule-upcoming__content">

              <h6>{item.title}</h6>

              <span className="teacher">
                <i className="bi bi-person-circle"></i>
                {item.instructor}
              </span>

            </div>

            <div className="schedule-upcoming__meta">

              <span>
                <i className="bi bi-calendar3"></i>
                {item.date}
              </span>

              <span>
                <i className="bi bi-clock"></i>
                {item.time}
              </span>

            </div>

            <button className="arrow-btn">
              <i className="bi bi-chevron-right"></i>
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}