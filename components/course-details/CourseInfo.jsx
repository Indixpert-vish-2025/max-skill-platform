"use client";

import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function CourseInfo({ course }) {

  const router = useRouter();

  return (
    <div className="course-info">

      <Button
        variant="link"
        className="back-btn p-0 mb-4 text-decoration-none"
        onClick={() => router.back()}
      >
        <i className="bi bi-arrow-left me-2"></i>
        Back
      </Button>

      <h2 className="course-details-title">
        {course.title}
      </h2>

      <p className="course-description">
        {course.description}
      </p>

      <div className="course-meta">

        <span className="rating">
          {course.rating}.0
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
        </span>

        <span>Review (1k)</span>

        <span>{course.students} Students</span>

      </div>

      <div className="instructor">

        <div className="avatar"></div>

        <span>{course.instructor}</span>

      </div>

    </div>
  );
}