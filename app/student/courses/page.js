"use client";

import { useState } from "react";

import courses from "../../../data/courses.json";

import PopularCategoryList from "../../../components/courses/PopularCategoryList";
import CourseGrid from "../../../components/courses/CourseGrid";
import CoursePagination from "../../../components/courses/Pagination";

export default function StudentCoursesPage() {
  const COURSES_PER_PAGE = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredCourses = activeCategory
    ? courses.filter((course) => course.category === activeCategory)
    : courses;

  const totalPages = Math.ceil(
    filteredCourses.length / COURSES_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * COURSES_PER_PAGE;

  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + COURSES_PER_PAGE
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="student-courses-page">
      <PopularCategoryList
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <CourseGrid courses={currentCourses} />

      <CoursePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}