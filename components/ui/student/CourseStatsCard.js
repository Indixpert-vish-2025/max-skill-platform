import React from 'react';

const watermarkIcons = {
  completed: 'bi-check-lg',
  'in-progress': 'bi-lightbulb',
  upcoming: 'bi-bookmark',
};

export default function CourseStatsCard({ label, value, variant = 'completed', icon }) {
  return (
    <div className={`student-course-stat student-course-stat--${variant}`}>
      <div className="student-course-stat__icon">
        <i className={`bi ${icon}`} aria-hidden="true" />
      </div>
      <div className="student-course-stat__content">
        <span className="student-course-stat__value">{value}</span>
        <span className="student-course-stat__label">{label}</span>
      </div>
      <i className={`bi ${watermarkIcons[variant]} student-course-stat__watermark`} aria-hidden="true" />
    </div>
  );
}
