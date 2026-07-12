import React from "react";

const schedule = [
  {
    id: 1,
    time: "7 AM",
    title: "UX Research",
    subtitle: "A/B Testing",
    color: "#FF6B57",
    top: 0,
  },
  {
    id: 2,
    time: "10 AM",
    title: "UI Design Beginner",
    subtitle: "Wireframe",
    color: "#46C59E",
    top: 95,
  },
  {
    id: 3,
    time: "3 PM",
    title: "Fullstack Developer",
    subtitle: "Form Request",
    color: "#F5B63D",
    top: 220,
  },
];

const hours = [
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
];

export default function TodayTimeline() {
  return (
    <div className="today-schedule">

      <div className="today-header">
        <h5>Today Schedule</h5>
      </div>

      <div className="timeline-wrapper">

        <div className="timeline-hours">
          {hours.map((hour) => (
            <div key={hour} className="hour">
              {hour}
            </div>
          ))}
        </div>

        <div className="timeline-grid">

          {hours.map((_, i) => (
            <div key={i} className="timeline-line"></div>
          ))}

          {schedule.map((item) => (
            <div
              key={item.id}
              className="event-card"
              style={{
                top: item.top,
                borderLeft: `6px solid ${item.color}`,
              }}
            >
              <div className="event-header">

                <div>
                  <h6>{item.title}</h6>
                  <span>{item.subtitle}</span>
                </div>

                <i className="bi bi-three-dots"></i>

              </div>

              <div className="event-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}