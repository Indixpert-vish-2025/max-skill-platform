"use client";

import instructors from "../../../data/instructors.json";

import InstructorCard from "../../../components/ui/student/instructors/InstructorCard";
import Pagination from "../../../components/ui/student/instructors/Pagination";

export default function StudentInstructorsPage() {
  return (
    <div className="student-instructors">

      

      <div className="instructors-grid">

        {instructors.map((item) => (

          <InstructorCard
            key={item.id}
            instructor={item}
          />

        ))}

      </div>

      <div className="pagination-wrapper">

  <span className="pagination-text">
    Showing 1-6 from 100 data
  </span>

  <Pagination />

</div>
    </div>
  );
}