"use client";

import CircularProgress from "./CircularProgress";

export default function CurrentCourses({ courses }) {
  return (
    <div className="current-courses">

      <h4>Current Courses</h4>

      <div className="course-progress-list">

        {courses.map((course) => (

          <div
            className="course-progress-card"
            key={course.id}
          >

            <CircularProgress
              value={course.progress}
              color={course.color}
            />

            <div className="course-info">

              <h5>{course.title}</h5>

              <p>

                {course.completed} / {course.total} Lessons

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}