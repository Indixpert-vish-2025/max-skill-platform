import React from "react";

export default function OngoingClassCard({ item }) {
  const progressColor =
    item.variant === "success" ? "#4FC3A1" : "#F4B740";

  return (
    <div className="ongoing-card">

      <div className="ongoing-card__left">
        <div
          className="ongoing-card__circle"
          style={{ borderColor: progressColor }}
        >
          {item.value}
        </div>
      </div>

      <div className="ongoing-card__center">
        <h6>{item.label}</h6>

        <div className="ongoing-card__progress">
          <div
            className="ongoing-card__progress-fill"
            style={{
              width: item.value,
              background: progressColor,
            }}
          ></div>
        </div>
      </div>

      <div className="ongoing-card__right">
        <i className="bi bi-chevron-right"></i>
      </div>

    </div>
  );
}