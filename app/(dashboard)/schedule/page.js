import scheduleData from "../../../data/instructor-schedule.json";
import CalendarCard from "../../../components/ui/CalendarCard";
import OngoingClassStat from "../../../components/ui/student/instructors/schedule/OngoingClassStat";
import InstructorTimeline from "../../../components/ui/student/instructors/schedule/InstructorTimeline";
import MonthlyProgressStat from "../../../components/ui/student/instructors/schedule/MonthlyProgressStat";
import UpcomingEventsList from "../../../components/ui/student/instructors/schedule/UpcomingEventsList";

export default function InstructorSchedulePage() {
  const {
    ongoingClasses,
    calendar,
    progress,
    schedule,
    todayTimeline,
  } = scheduleData;

  return (
    <div className="instructor-schedule">
      <div className="instructor-schedule__left">
        <section className="instructor-schedule-section">
          <h5>Ongoing Class</h5>
          <div className="instructor-ongoing-row">
            {ongoingClasses.map((item) => (
              <OngoingClassStat key={item.id} item={item} />
            ))}
          </div>
        </section>

        <InstructorTimeline items={todayTimeline} />
      </div>

      <div className="instructor-schedule__right">
        <div className="instructor-schedule-top-row">
          <div className="student-calendar-wrap">
            <CalendarCard
              month={calendar.month}
              year={calendar.year}
              activeDay={calendar.activeDay}
              markedDay={calendar.markedDay}
            />
          </div>

          <MonthlyProgressStat
            value={progress.value}
            title={progress.title}
            description={progress.description}
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
