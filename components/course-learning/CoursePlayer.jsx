"use client";

export default function CoursePlayer({
  course,
  videoId,
}) {
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
          src={`https://www.youtube.com/embed/${videoId}`}
          title={course.title}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}