"use client";

import Image from "next/image";

export default function CoursePlayer({ course }) {

  return (

    <div className="course-player">

      <h2>{course.title}</h2>

      <div className="player-meta">

        <span>
          {course.rating}.0
          <i className="bi bi-star-fill ms-1 text-warning"></i>
        </span>

        <span>Review (1k)</span>

        <span>{course.students} Students</span>

      </div>

      <div className="video-box">

        <iframe
          src={`https://www.youtube.com/embed/${course.youtubeId}`}
          title={course.title}
          allowFullScreen
        ></iframe>

      </div>

    </div>

  );

}