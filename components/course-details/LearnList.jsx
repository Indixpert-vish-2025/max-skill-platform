"use client";

export default function LearnList({ learnPoints = [] }) {
  return (
    <div className="learn-list">
      {learnPoints.map((item, index) => (
        <div key={index} className="learn-item">
          <i className="bi bi-check-circle-fill"></i>

          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}