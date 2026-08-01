"use client";

import { Card } from "react-bootstrap";

const lessons = [
  {
    title: "Introduction",
    duration: "1:00",
    youtubeId: "zJSY8tbf_ys",
  },
  {
    title: "Getting Started",
    duration: "3:20",
    youtubeId: "Ke90Tje7VS0",
  },
  {
    title: "Tools",
    duration: "5:10",
    youtubeId: "UB1O30fR-EE",
  },
  {
    title: "Install Tools",
    duration: "4:45",
    youtubeId: "Q33KBiDriJY",
  },
  {
    title: "Plugins",
    duration: "2:15",
    youtubeId: "nIoXOplUvAw",
  },
];

export default function LessonList({
  videoId,
  setVideoId,
}) {
  return (
    <Card className="lesson-card border-0 shadow-sm mt-4">
      <Card.Body>
        <div className="lesson-header">
          <h5>Video Courses</h5>
          <span>(1/10)</span>
        </div>

        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={`lesson-item ${
              videoId === lesson.youtubeId ? "active" : ""
            }`}
            onClick={() => setVideoId(lesson.youtubeId)}
            style={{ cursor: "pointer" }}
          >
            <div>
              <i className="bi bi-play-circle-fill me-2"></i>
              {lesson.title}
            </div>

            <span>{lesson.duration}</span>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}