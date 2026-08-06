"use client";

import LiveClassCard from "./LiveClassCard";

export default function LiveClassPanel({ stats, liveNow, upcoming }) {
  return (
    <div className="instructor-live-class-page">
      <div className="instructor-resource-stats">
        {stats.map((stat) => (
          <div key={stat.id} className={`instructor-resource-stat ${stat.color}`}>
            <div className="instructor-resource-stat__icon">
              <i className={`bi ${stat.icon}`} />
            </div>
            <div>
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="instructor-live-section">
        <div className="instructor-live-section__header">
          <h5>
            <span className="live-dot" />
            Live Now
          </h5>
          <button type="button" className="instructor-upload-btn">
            <i className="bi bi-plus-lg" />
            Schedule Class
          </button>
        </div>

        <div className="instructor-live-grid">
          {liveNow.map((item) => (
            <LiveClassCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="instructor-live-section">
        <div className="instructor-live-section__header">
          <h5>Upcoming Classes</h5>
        </div>

        <div className="instructor-live-grid">
          {upcoming.map((item) => (
            <LiveClassCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
