import instructorCourses from "../../../data/instructor-courses.json";

import CourseStats from "../../../components/ui/student/instructors/courses/CourseStats";
import SellingActivity from "../../../components/ui/student/instructors/courses/SellingActivity";
import PopularClass from "../../../components/ui/student/instructors/courses/PopularClass";
import UserReviews from "../../../components/ui/student/instructors/courses/UserReviews";
import TopCourses from "../../../components/ui/student/instructors/courses/TopCourses";

import "@/styles/instructor-courses.scss";

export default function InstructorCoursesPage() {
  return (
    <div className="instructor-courses-page">

      <div className="courses-top">

        <CourseStats stats={instructorCourses.stats} />

        <PopularClass data={instructorCourses.popularClass} />

      </div>

      <div className="courses-bottom">

        <div className="courses-left">

          <SellingActivity
            data={instructorCourses.sellingActivity}
          />

          <UserReviews
            reviews={instructorCourses.userReviews}
          />

        </div>

        <TopCourses
          courses={instructorCourses.topCourses}
        />

      </div>

    </div>
  );
}