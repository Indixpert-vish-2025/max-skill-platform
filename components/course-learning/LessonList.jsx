"use client";

import { Card } from "react-bootstrap";

const lessons = [

  "Introduction",

  "Getting Started",

  "Tools",

  "Install Tools",

  "Plugins"

];

export default function LessonList() {

  return (

    <Card className="lesson-card border-0 shadow-sm mt-4">

      <Card.Body>

        <div className="lesson-header">

          <h5>Video Courses</h5>

          <span>(1/10)</span>

        </div>

        {

          lessons.map((item,index)=>(

            <div
              key={index}
              className={`lesson-item ${index===0?"active":""}`}
            >

              <div>

                <i className="bi bi-play-circle-fill me-2"></i>

                {item}

              </div>

              <span>1:00</span>

            </div>

          ))

        }

      </Card.Body>

    </Card>

  );

}