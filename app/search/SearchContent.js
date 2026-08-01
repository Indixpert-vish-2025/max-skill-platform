"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import courses from "../../data/courses.json";

export default function SearchContent() {
  const searchParams = useSearchParams();

  const query = (searchParams.get("query") || "")
    .trim()
    .toLowerCase();

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query) ||
      course.category.toLowerCase().includes(query)
  );

  return (
    <div className="container py-4">

      <h2 className="mb-4">
        Search Result
      </h2>

      {query && (
        <p className="text-muted mb-4">
          Searching for :
          <strong> {query}</strong>
        </p>
      )}

      {filteredCourses.length === 0 ? (
        <div className="text-center py-5">
          <i
            className="bi bi-search"
            style={{
              fontSize: "70px",
              color: "#4cbc9a",
            }}
          ></i>

          <h4 className="mt-3">
            No Course Found
          </h4>

          <p className="text-muted">
            We couldn't find any course matching your search.
          </p>
        </div>
      ) : (
        <div className="row g-4">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="col-lg-4 col-md-6"
            >
              <div className="card h-100 shadow-sm border-0">

                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">

                  <span className="badge bg-success mb-2">
                    {course.category}
                  </span>

                  <h5>{course.title}</h5>

                  <p className="text-muted mb-2">
                    {course.instructor}
                  </p>

                  <p className="fw-bold text-success">
                    {course.price}
                  </p>

                  <Link
                    href={`/student/courses/${course.id}`}
                    className="btn btn-primary w-100"
                  >
                    View Course
                  </Link>

                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}