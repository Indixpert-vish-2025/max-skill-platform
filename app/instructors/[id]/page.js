import instructors from "../../../data/instructors.json";

import Image from "next/image";
import { Badge, Button, Card } from "react-bootstrap";

export default async function InstructorPage({
  params,
}) {
  const { id } = await params;

  const instructor = instructors.find(
    (item) => item.id === Number(id)
  );

  if (!instructor) {
    return <h2>Instructor Not Found</h2>;
  }

  return (
    <div className="container py-4">

      <Card className="shadow border-0 rounded-4 p-4">

        <div className="row align-items-center">

          <div className="col-lg-3 text-center">

            <Image
              src={instructor.image}
              alt={instructor.name}
              width={220}
              height={220}
              className="rounded-4"
            />

          </div>

          <div className="col-lg-9">

            <h2>{instructor.name}</h2>

            <h5 className="text-muted">
              {instructor.designation}
            </h5>

            <div className="my-3">

              <Badge bg="warning" className="me-2">
                ⭐ {instructor.rating}
              </Badge>

              <Badge bg="success">
                {instructor.reviews} Reviews
              </Badge>

            </div>

            <p>{instructor.bio}</p>

            <div className="row mt-4">

              <div className="col-md-3">
                <h4>{instructor.students}</h4>
                <small>Students</small>
              </div>

              <div className="col-md-3">
                <h4>{instructor.courses}</h4>
                <small>Courses</small>
              </div>

              <div className="col-md-3">
                <h4>{instructor.experience}</h4>
                <small>Experience</small>
              </div>

              <div className="col-md-3">
                <h4>{instructor.certificate}</h4>
                <small>Certificates</small>
              </div>

            </div>

            <div className="mt-4 d-flex gap-3">

             <Button className="primary-btn">
  Join Class
</Button>

<Button className="primary-outline-btn">
  Follow
</Button>

            </div>

          </div>

        </div>

      </Card>

      <Card className="mt-4 border-0 shadow-sm p-4">

        <h3>Skills</h3>

        <div className="mt-3">

          {instructor.skills.map((skill) => (
            <Badge
              key={skill}
              bg="secondary"
              className="me-2 mb-2"
            >
              {skill}
            </Badge>
          ))}

        </div>

      </Card>

      <Card className="mt-4 border-0 shadow-sm p-4">

        <h3>Weekly Schedule</h3>

        {instructor.schedule.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-between border-bottom py-2"
          >
            <strong>{item.day}</strong>

            <span>{item.time}</span>

          </div>
        ))}

      </Card>

      <Card className="mt-4 border-0 shadow-sm p-4">

        <h3>Courses</h3>

        {instructor.coursesList.map((course, index) => (
          <div
            key={index}
            className="d-flex justify-content-between border-bottom py-2"
          >
            <strong>{course.title}</strong>

            <span>{course.students} Students</span>

          </div>
        ))}

      </Card>

    </div>
  );
}