"use client";

import Image from "next/image";

export default function ProfileStats({ profile }) {
  return (
    <div className="profile-stats">

      <div className="stats-card">

        <div className="stats-icon green">
          <Image
            src="/assets/icons/course-completed.svg"
            alt="Courses Completed"
            width={30}
            height={30}
          />
        </div>

        <div>
          <h3>{profile.completedCourses}</h3>
          <span>Courses Completed</span>
        </div>

      </div>

      <div className="stats-card">

        <div className="stats-icon yellow">
          <Image
            src="/assets/icons/course-progress.svg"
            alt="Courses In Progress"
            width={30}
            height={30}
          />
        </div>

        <div>
          <h3>{profile.inProgressCourses}</h3>
          <span>Courses In Progress</span>
        </div>

      </div>

    </div>
  );
}