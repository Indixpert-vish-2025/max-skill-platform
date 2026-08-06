"use client";

export default function EarningsChart() {
  return (
    <svg
      viewBox="0 0 180 70"
      className="earnings-chart"
    >

      <path
        d="M5 55
           L40 42
           L70 50
           L100 20
           L140 35
           L175 12"
      />

      <circle cx="5" cy="55" r="3" />
      <circle cx="40" cy="42" r="3" />
      <circle cx="70" cy="50" r="3" />
      <circle cx="100" cy="20" r="3" />
      <circle cx="140" cy="35" r="3" />
      <circle cx="175" cy="12" r="3" />

    </svg>
  );
}