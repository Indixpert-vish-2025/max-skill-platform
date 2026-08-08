"use client";

import { Card } from "react-bootstrap";

function DonutSegment({ cx, cy, radius, strokeWidth, value, color, rotation }) {
  const circumference = 2 * Math.PI * radius;
  const dash = (value / 100) * circumference;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={radius}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={`${dash} ${circumference}`}
      transform={`rotate(${rotation} ${cx} ${cy})`}
    />
  );
}

function SegmentLabel({ cx, cy, radius, startPercent, value, label }) {
  const midAngle = ((startPercent + value / 2) / 100) * 360 - 90;
  const rad = (midAngle * Math.PI) / 180;
  const x = cx + radius * Math.cos(rad);
  const y = cy + radius * Math.sin(rad);

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="middle"
      className="donut-segment-label"
    >
      {label}
    </text>
  );
}

export default function PopularClass({ data }) {
  const items = data.items || data;

  const size = 190;
  const strokeWidth = 32;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  let rotation = -90;
  const segments = items.map((item) => {
    const segment = { ...item, rotation };
    rotation += (item.value / 100) * 360;
    return segment;
  });

  let labelStart = 0;

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
          <div className="donut-chart-wrap">
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              className="donut-chart-svg"
              aria-hidden="true"
            >
              {segments.map((item) => (
                <DonutSegment
                  key={item.label}
                  cx={center}
                  cy={center}
                  radius={radius}
                  strokeWidth={strokeWidth}
                  value={item.value}
                  color={item.color}
                  rotation={item.rotation}
                />
              ))}

              {items.map((item) => {
                const label = (
                  <SegmentLabel
                    key={`label-${item.label}`}
                    cx={center}
                    cy={center}
                    radius={radius}
                    startPercent={labelStart}
                    value={item.value}
                    label={`${item.value}%`}
                  />
                );
                labelStart += item.value;
                return label;
              })}
            </svg>

            <div className="donut-center" />
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
