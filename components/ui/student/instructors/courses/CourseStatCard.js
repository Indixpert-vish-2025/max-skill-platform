"use client";

import { Card } from "react-bootstrap";

export default function CourseStatCard({ stat }) {
  return (
    <Card className={`course-stat-card ${stat.color}`}>

      <Card.Body>

        <div className="course-stat-left">

          <div className="course-icon">

            <i className={stat.icon}></i>

          </div>

          <div className="course-info">

            <h3>{stat.value}</h3>

            <p>{stat.title}</p>

          </div>

        </div>

        <div className="course-chart"></div>

      </Card.Body>

    </Card>
  );
}