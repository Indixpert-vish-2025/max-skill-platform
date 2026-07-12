"use client";

import { Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCard";

export default function CourseGrid({ courses }) {
  return (
    <div className="course-grid-section">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="section-title">All Courses</h4>

        <button className="btn btn-link text-decoration-none">
          View all
          <i className="bi bi-chevron-right ms-1"></i>
        </button>
      </div>

      <Row className="g-4">
        {courses.map((course) => (
          <Col
            key={course.id}
            lg={4}
            md={6}
            sm={12}
          >
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </div>
  );
}