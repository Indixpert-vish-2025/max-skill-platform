
// import React from "react";
// import DiscountBanner from "../../../components/ui/student/DiscountBanner";
// import CourseStatsCard from "../../../components/ui/student/CourseStatsCard";
// import LearningActivityCard from "../../../components/ui/student/LearningActivityCard";
// import ProgressCard from "../../../components/ui/student/ProgressCard";
// import ScoreActivityCard from "../../../components/ui/student/ScoreActivityCard";
// import HomeworkCard from "../../../components/ui/student/HomeworkCard";
// import UpcomingScheduleCard from "../../../components/ui/student/UpcomingScheduleCard";
// import CalendarCard from "../../../components/ui/CalendarCard";
// import studentData from "../../../data/student-dashboard.json";

// export default function StudentDashboardPage() {
//   const {
//     discountBanner,
//     courseStats,
//     learningActivity,
//     progress,
//     scoreActivity,
//     homework,
//     schedule,
//   } = studentData;

//   return (
//     <div className="student-dashboard">

//   <div className="dashboard-banner">
//     <DiscountBanner
//       title={discountBanner.title}
//       description={discountBanner.description}
//     />
//   </div>

//   <div className="dashboard-calendar">
//     <div className="student-calendar-wrap">
//       <CalendarCard
//         month="January"
//         year={2022}
//         activeDay={17}
//         markedDay={11}
//       />
//     </div>
//   </div>

//   <div className="dashboard-cards">
//     <div className="student-course-stats-row">
//       {courseStats.map((stat) => (
//         <CourseStatsCard
//           key={stat.id}
//           label={stat.label}
//           value={stat.value}
//           variant={stat.variant}
//           icon={stat.icon}
//         />
//       ))}
//     </div>
//   </div>

//   <div className="dashboard-homework">
//     <HomeworkCard items={homework} />
//   </div>

//   <div className="dashboard-learning">
//     <LearningActivityCard
//       days={learningActivity.days}
//       lastWeek={learningActivity.lastWeek}
//       thisWeek={learningActivity.thisWeek}
//       tooltip={learningActivity.tooltip}
//     />
//   </div>

//   <div className="dashboard-progress">
//     <ProgressCard
//       value={progress.value}
//       title={progress.title}
//       description={progress.description}
//     />
//   </div>

//   <div className="dashboard-score">
//     <ScoreActivityCard
//       months={scoreActivity.months}
//       lastMonth={scoreActivity.lastMonth}
//       thisMonth={scoreActivity.thisMonth}
//       tooltip={scoreActivity.tooltip}
//     />
//   </div>

//   <div className="dashboard-upcoming">
//     <UpcomingScheduleCard
//       title={schedule.title}
//       date={schedule.date}
//       items={schedule.items}
//     />
//   </div>

// </div>
//   );
// }




import React from "react";
import DiscountBanner from "../../../components/ui/student/DiscountBanner";
import CourseStatsCard from "../../../components/ui/student/CourseStatsCard";
import LearningActivityCard from "../../../components/ui/student/LearningActivityCard";
import ProgressCard from "../../../components/ui/student/ProgressCard";
import ScoreActivityCard from "../../../components/ui/student/ScoreActivityCard";
import HomeworkCard from "../../../components/ui/student/HomeworkCard";
import UpcomingScheduleCard from "../../../components/ui/student/UpcomingScheduleCard";
import CalendarCard from "../../../components/ui/CalendarCard";
import studentData from "../../../data/student-dashboard.json";

export default function StudentDashboardPage() {
  const {
    discountBanner,
    courseStats,
    learningActivity,
    progress,
    scoreActivity,
    homework,
    schedule,
  } = studentData;

  return (
    <div className="student-dashboard">

      <div className="student-dashboard__left">

        <DiscountBanner
          title={discountBanner.title}
          description={discountBanner.description}
        />

        <div className="student-course-stats-row">
          {courseStats.map((stat) => (
            <CourseStatsCard
              key={stat.id}
              label={stat.label}
              value={stat.value}
              variant={stat.variant}
              icon={stat.icon}
            />
          ))}
        </div>

        <div className="student-learning-row">
          <LearningActivityCard
            days={learningActivity.days}
            lastWeek={learningActivity.lastWeek}
            thisWeek={learningActivity.thisWeek}
            tooltip={learningActivity.tooltip}
          />

          <ProgressCard
            value={progress.value}
            title={progress.title}
            description={progress.description}
          />
        </div>

        <ScoreActivityCard
          months={scoreActivity.months}
          lastMonth={scoreActivity.lastMonth}
          thisMonth={scoreActivity.thisMonth}
          tooltip={scoreActivity.tooltip}
        />

      </div>

      <div className="student-dashboard__right">

        <div className="student-calendar-wrap">
          <CalendarCard
            month="January"
            year={2022}
            activeDay={17}
            markedDay={11}
          />
        </div>

        <HomeworkCard items={homework} />

        <UpcomingScheduleCard
          title={schedule.title}
          date={schedule.date}
          items={schedule.items}
        />

      </div>

    </div>
  );
}