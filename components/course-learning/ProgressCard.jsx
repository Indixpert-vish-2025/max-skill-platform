"use client";

import { Card, ProgressBar } from "react-bootstrap";

export default function ProgressCard({ course }) {

  return (

    <Card className="progress-card border-0 shadow-sm">

      <Card.Body>

        <div className="d-flex justify-content-between mb-3">

          <h5>Progress</h5>

          <span>10/10</span>

        </div>

        <ProgressBar
          now={100}
          variant="success"
        />

        <small className="d-block mt-3">

          {course.title}

        </small>

      </Card.Body>

    </Card>

  );

}