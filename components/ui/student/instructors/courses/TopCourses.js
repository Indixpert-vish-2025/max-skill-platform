"use client";

import { Card } from "react-bootstrap";

export default function TopCourses({ courses = [] }) {
  return (
    <Card className="top-course-card border-0 shadow-sm">
      <Card.Body>
        <h5>Top Courses</h5>

        {courses.map((course) => (
          <div className="top-course-item" key={course.id}>
            <div className="top-course-item__info">
              <span
                className={`top-course-item__icon top-course-item__icon--${course.iconColor}`}
                aria-hidden="true"
              >
                <i className={course.icon} />
              </span>
              <div>
                <strong>{course.title}</strong>
                <small>{course.value}</small>
              </div>
            </div>

            {course.chartType === "horizontal" ? (
              <div className="top-course-horizontal-bars">
                <span className="bar-yellow" />
                <span className="bar-green" />
                <span className="bar-red" />
              </div>
            ) : (
              <div className="mini-bars">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}
