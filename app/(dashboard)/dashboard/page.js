import instructorData from "../../../data/instructor-dashboard.json";

import StatCard from "../../../components/ui/student/instructors/StatCard";
import WorkingActivity from "../../../components/ui/student/instructors/WorkingActivity";
import CalendarCard from "../../../components/ui/CalendarCard";
import UpcomingEventsList from "../../../components/ui/student/instructors/schedule/UpcomingEventsList";

export default function InstructorDashboardPage() {
  const {
    stats,
    activity,
    schedule,
  } = instructorData;

  return (
    <div className="instructor-dashboard">

      <div className="instructor-dashboard__left">

        <div className="dashboard-stats">

         {stats.map((item) => (
  <StatCard
    key={item.id}
    title={item.title}
    value={item.value}
    delta={item.delta}
    variant={item.variant}
    chart={item.chart}
  />
))}

        </div>

        <WorkingActivity
data={activity}
/>

      </div>

      <div className="instructor-dashboard__right">

        <div className="student-calendar-wrap">
          <CalendarCard
            month="January"
            year={2022}
            activeDay={5}
            markedDay={5}
          />
        </div>

        <UpcomingEventsList
          title={schedule.title}
          date={schedule.date}
          items={schedule.items}
        />

      </div>

    </div>
  );
}     