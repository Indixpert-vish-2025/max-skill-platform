"use client";

import { useState } from "react";

import courses from "../../../data/courses.json";

import PopularCategoryList from "../../../components/courses/PopularCategoryList";
import CourseGrid from "../../../components/courses/CourseGrid";
import CoursePagination from "../../../components/courses/Pagination";

export default function StudentCoursesPage() {
  const COURSES_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    courses.length / COURSES_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * COURSES_PER_PAGE;

  const currentCourses = courses.slice(
    startIndex,
    startIndex + COURSES_PER_PAGE
  );

  return (
    <div className="student-courses-page">
      <PopularCategoryList />

      <CourseGrid courses={currentCourses} />

      <CoursePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}