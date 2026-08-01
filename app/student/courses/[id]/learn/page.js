"use client";

import { use, useState } from "react";
import courses from "../../../../../data/courses.json";
import { Container, Row, Col } from "react-bootstrap";

import CoursePlayer from "../../../../../components/course-learning/CoursePlayer";
import ProgressCard from "../../../../../components/course-learning/ProgressCard";
import LessonList from "../../../../../components/course-learning/LessonList";
import CourseTabs from "../../../../../components/course-learning/CourseTabs";

export default function LearnPage({ params }) {
  const { id } = use(params);

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  const [videoId, setVideoId] = useState(course.youtubeId);

  return (
    <Container fluid className="learning-page">
      <Row className="g-4">
        <Col lg={8}>
          <CoursePlayer
            course={course}
            videoId={videoId}
          />

          <CourseTabs course={course} />
        </Col>

        <Col lg={4}>
          <ProgressCard course={course} />

          <LessonList
            videoId={videoId}
            setVideoId={setVideoId}
          />
        </Col>
      </Row>
    </Container>
  );
}