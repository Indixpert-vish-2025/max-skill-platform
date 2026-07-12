import React from 'react';

export default function HomeworkCard({ title = 'Home Work', items = [] }) {
  return (
    <div className="student-card student-homework-card">
      <div className="student-card__header">
        <h5>{title}</h5>
        <button type="button" className="student-dots-btn" aria-label="More options">
          <i className="bi bi-three-dots" />
        </button>
      </div>

      <div className="student-homework-list">
        {items.map((item) => {
          const percent = Math.round((item.progress / item.total) * 100);
          return (
            <div key={item.title} className="student-homework-item">
              <div className="student-homework-item__top">
                <span>{item.title}</span>
                <span>
                  {item.progress}/{item.total}
                </span>
              </div>
              <div className="student-homework-bar">
                <div
                  className={`student-homework-bar__fill student-homework-bar__fill--${item.variant}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
