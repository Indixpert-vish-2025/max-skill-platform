"use client";

import Image from "next/image";
import Card from "react-bootstrap/Card";
import Link from "next/link";
export default function CourseCard({ course }) {
  return (
    <Card className="course-card border-0 shadow-sm h-100">
      <div className="course-image">
        <Image
          src={course.image}
          alt={course.title}
          width={320}
          height={180}
          className="img-fluid"
        />
      </div>

      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="course-title mb-0">{course.title}</h5>
          <span className="course-price">{course.price}</span>
        </div>

        <p className="course-instructor mb-2">
          {course.instructor}
          <span className="ms-2 text-warning">
            <i className="bi bi-star-fill"></i> {course.rating}
          </span>
        </p>

        <div className="d-flex justify-content-between align-items-center">
          <span className="course-lessons">
            <i className="bi bi-book me-1"></i>
            {course.lessons}+ Content
          </span>

          <Link
  href={`/student/courses/${course.id}`}
  className="btn btn-link p-0 course-details"
>
  View Details
</Link>
        </div>
      </Card.Body>
    </Card>
  );
}