import courses from "../../../data/courses.json";

import PopularCategoryList from "../../../components/courses/PopularCategoryList";
import CourseGrid from "../../../components/courses/CourseGrid";
import CoursePagination from "../../../components/courses/Pagination";

export default function StudentCoursesPage() {
  return (
    <div className="student-courses-page">

      <PopularCategoryList />

      <CourseGrid courses={courses} />

      <CoursePagination />

    </div>
  );
}