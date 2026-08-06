"use client";

export default function LiveClassCard({ item }) {
  const isLive = item.status === "live";

  return (
    <div className={`instructor-live-card ${isLive ? "is-live" : ""}`}>
      <div className="instructor-live-card__image">
        <img src={item.image} alt={item.title} />
        {isLive && <span className="instructor-live-badge">LIVE</span>}
      </div>

      <div className="instructor-live-card__body">
        <span className="instructor-live-card__topic">{item.topic}</span>
        <h6>{item.title}</h6>

        <div className="instructor-live-card__meta">
          <span>
            <i className="bi bi-clock" />
            {item.date ? `${item.date} · ${item.time}` : item.time}
          </span>
          <span>
            <i className="bi bi-people" />
            {item.students} Students
          </span>
        </div>

        <button type="button" className={`instructor-live-btn ${isLive ? "live" : ""}`}>
          {isLive ? (
            <>
              <i className="bi bi-camera-video" />
              Join Class
            </>
          ) : (
            <>
              <i className="bi bi-calendar-event" />
              View Details
            </>
          )}
        </button>
      </div>
    </div>
  );
}
