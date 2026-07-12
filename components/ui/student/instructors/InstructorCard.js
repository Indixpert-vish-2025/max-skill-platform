"use client";

import Image from "next/image";
import { Button } from "react-bootstrap";
import InstructorStats from "./InstructorStats";

export default function InstructorCard({ instructor }) {

  return (

    <div className="instructor-card">

      <button className="more-btn">

        <i className="bi bi-three-dots"></i>

      </button>

      <div className="instructor-image">

        <Image
          src={instructor.image}
          alt={instructor.name}
          width={82}
          height={82}
        />

      </div>

      <h4>

        {instructor.name}

      </h4>

      <div className="rating-row">

        <span>

          {instructor.rating}

        </span>

        <i className="bi bi-star-fill"></i>

        <small>

          Review ({instructor.reviews})

        </small>

      </div>

      <div className="skill-tags">

        {instructor.skills.map((skill) => (

          <span
            key={skill}
            className="skill-tag"
          >

            {skill}

          </span>

        ))}

      </div>

      <InstructorStats

        achievement={instructor.achievement}

        certificate={instructor.certificate}

      />

      <Button

        className="view-class-btn"

      >

        View Class

      </Button>

    </div>

  );

}