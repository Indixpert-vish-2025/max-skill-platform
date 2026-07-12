import React from 'react';
import StatCard from '../../components/ui/StatCard';
import CalendarCard from '../../components/ui/CalendarCard';
import UpcomingEventsCard from '../../components/ui/UpcomingEventsCard';
import ActivityCard from '../../components/ui/ActivityCard';
import dashboardData from '../../data/dashboard.json';

export default function DashboardIndex() {
  const { stats, upcomingEvents } = dashboardData;

  return (
    <div className="dashboard-grid">
      <div className="dashboard-grid-main">
        <div className="stats-row">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              delta={stat.delta}
              variant={stat.variant}
            />
          ))}
        </div>

        <ActivityCard title="Working Activity" activeMonth="Jul" />
      </div>

      <aside className="events-panel">
        <CalendarCard month="January" year={2022} activeDay={5} markedDay={7} />
        <hr className="calendar-divider" />
        <UpcomingEventsCard events={upcomingEvents} title="Upcoming Events" />
      </aside>
    </div>
  );
}
