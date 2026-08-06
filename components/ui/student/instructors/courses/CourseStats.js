"use client";

import CourseStatCard from "./CourseStatCard";

export default function CourseStats({ stats }) {
  return (
    <div className="course-stats">
      {stats.map((item) => (
        <CourseStatCard key={item.id} stat={item} />
      ))}
    </div>
  );
}