"use client";

import { Card } from "react-bootstrap";

export default function PopularClass({ data }) {
  const items = data.items || data;
  const centerPercent = data.centerPercent ?? items[0]?.value ?? 0;

  return (
    <Card className="popular-class-card border-0 shadow-sm">
      <Card.Body>
        <div className="popular-header">
          <h5>Popular Class</h5>
          <button type="button" className="more-btn" aria-label="More options">
            <i className="bi bi-three-dots-vertical" />
          </button>
        </div>

        <div className="popular-chart">
          <div className="donut-chart">
            <div className="donut-center">
              <span>{centerPercent}%</span>
            </div>
          </div>
        </div>

        <div className="popular-list">
          {items.map((item) => (
            <div className="popular-item" key={item.label}>
              <div className="popular-left">
                <span
                  className="color-dot"
                  style={{ background: item.color }}
                />
                <span>
                  {item.label} ({item.value}%)
                </span>
              </div>
              <strong>{item.count}</strong>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
