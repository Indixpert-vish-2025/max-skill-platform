import React from 'react';
import { Button } from 'react-bootstrap';

export default function ProgressCard({ value = 75, title = 'My Progress', description }) {
  return (
    <div className="student-card student-progress-card">
      <div
        className="student-progress-ring"
        style={{ '--progress': value }}
        aria-label={`${value}% progress`}
      >
        <span>{value}%</span>
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
      <Button variant="outline-success" className="student-progress-card__btn">
        More Details
      </Button>
    </div>
  );
}
