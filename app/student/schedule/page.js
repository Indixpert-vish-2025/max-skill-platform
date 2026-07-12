import React from "react";

import OngoingClassCard from "../../../components/ui/student/schedule/OngoingClassCard";
import CalendarCard from "../../../components/ui/CalendarCard";
import ScheduleUpcomingCard from "../../../components/ui/student/schedule/ScheduleUpcomingCard";
import TodayTimeline from "../../../components/ui/student/schedule/TodayTimeline";
import MonthlyProgressCard from "../../../components/ui/student/schedule/MonthlyProgressCard";

import scheduleData from "../../../data/student-schedule.json";

export default function StudentSchedulePage() {
  const {
    ongoingClasses,
    calendar,
    progress,
    schedule,
    todayTimeline,
  } = scheduleData;

  return (
    <div className="student-schedule">

      {/* LEFT */}
      <div className="student-schedule__left">

        <section className="schedule-section">
          <h5>Ongoing Class</h5>

          <div className="student-course-stats-row">
            {ongoingClasses.map((item) => (
              <OngoingClassCard
  key={item.id}
  item={item}
/>
            ))}
          </div>
        </section>

        <TodayTimeline items={todayTimeline} />

      </div>

      {/* RIGHT */}
     <div className="student-schedule__right">

  <div className="schedule-top-row">

    <div className="student-calendar-wrap">
      <CalendarCard
        month={calendar.month}
        year={calendar.year}
        activeDay={calendar.activeDay}
        markedDay={calendar.markedDay}
      />
    </div>

    <MonthlyProgressCard
      value={progress.value}
      title={progress.title}
      description={progress.description}
    />

  </div>

  <ScheduleUpcomingCard
  title={schedule.title}
  date={schedule.date}
  items={schedule.items}
/>
</div>

    </div>
  );
}