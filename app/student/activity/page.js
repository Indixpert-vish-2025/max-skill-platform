"use client";

import activityData from "../../../data/activity.json";

import ActivityTabs from "../../../components/ui/student/activity/ActivityTabs";
import ActivityFilter from "../../../components/ui/student/activity/ActivityFilter";
import ActivityTimeline from "../../../components/ui/student/activity/ActivityTimeline";

export default function StudentActivityPage() {

  const { today, yesterday } = activityData;

  return (

    <div className="student-activity">

      <div className="activity-top">

        <ActivityTabs />

        <ActivityFilter />

      </div>

      <ActivityTimeline
        title="Today"
        items={today}
      />

      <ActivityTimeline
        title="Yesterday"
        items={yesterday}
      />

    </div>

  );

}