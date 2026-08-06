"use client";

import { Card } from "react-bootstrap";

export default function MonthlyProgressStat({ value, title, description }) {
  return (
    <Card className="instructor-progress-card border-0 shadow-sm">
      <Card.Body>
        <div className="instructor-progress-ring">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" className="ring-bg" />
            <circle
              cx="50"
              cy="50"
              r="42"
              className="ring-fill"
              style={{
                strokeDasharray: `${value * 2.64} 264`,
              }}
            />
          </svg>
          <span className="instructor-progress-value">{title}</span>
        </div>
        <p className="instructor-progress-desc">{description}</p>
      </Card.Body>
    </Card>
  );
}
