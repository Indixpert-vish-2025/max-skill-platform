import courses from "../../../../data/courses.json";

import { Container, Row, Col } from "react-bootstrap";

import CourseInfo from "../../../../components/course-details/CourseInfo";
import CoursePreview from "../../../../components/course-details/CoursePreview";
import CourseTabs from "../../../../components/course-details/CourseTabs";

export default async function CourseDetailsPage({ params }) {
  const { id } = await params;

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    return (
      <Container className="py-5">
        <h2>Course Not Found</h2>
      </Container>
    );
  }

  return (
    <Container fluid className="course-details-page">

      <Row className="g-4">

        {/* LEFT SIDE */}

        <Col lg={7}>

          <CourseInfo course={course} />

          <CourseTabs course={course} />

        </Col>

        {/* RIGHT SIDE */}

        <Col lg={5}>

          <CoursePreview course={course} />

        </Col>

      </Row>

    </Container>
  );
}