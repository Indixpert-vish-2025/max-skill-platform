"use client";

export default function MiniLineChart() {
  return (
    <svg
      viewBox="0 0 180 70"
      className="mini-line-chart"
    >
      <path
        d="M5 60
           C25 50 35 35 50 40
           S80 60 95 35
           S135 10 175 30"
      />
    </svg>
  );
}