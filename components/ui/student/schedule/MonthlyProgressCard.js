import React from "react";

export default function MonthlyProgressCard({
  value = 15,
  title = "+15%",
  description,
}) {
  return (
    <div className="monthly-progress-card">

      <p className="progress-title">
        {description}
      </p>

      <div
        className="progress-circle"
        style={{
          background: `conic-gradient(
            #F4B740 0deg 60deg,
            #EEF2F6 60deg 360deg
          )`,
        }}
      >
        <div className="progress-inner">

          <div className="progress-icon">
            <i className="bi bi-plus-circle-fill"></i>
          </div>

          <h3>{title}</h3>

        </div>
      </div>

      <div className="progress-legends">

        <span>
          <i className="dot green"></i>
          Design
        </span>

        <span>
          <i className="dot pink"></i>
          Soft Skill
        </span>

        <span>
          <i className="dot yellow"></i>
          Developer
        </span>

        <span>
          <i className="dot red"></i>
          Science
        </span>

      </div>

    </div>
  );
}