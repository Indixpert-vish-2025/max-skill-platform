"use client";

import profile from "../../../data/profile.json";
import "@/styles/student-profile.scss";
import ProfileCard from "../../../components/ui/student/profile/ProfileCard";
import ProfileStats from "../../../components/ui/student/profile/ProfileStats";
import CurrentCourses from "../../../components/ui/student/profile/CurrentCourses";
import ProgressChart from "../../../components/ui/student/profile/ProgressChart";

export default function StudentProfilePage() {

  return (

    <div className="student-profile">

      <div className="profile-left">

        <ProfileCard profile={profile} />

      </div>

      <div className="profile-right">

        <ProfileStats profile={profile} />

        <CurrentCourses
          courses={profile.currentCourses}
        />

        <ProgressChart />

      </div>

    </div>

  );

}