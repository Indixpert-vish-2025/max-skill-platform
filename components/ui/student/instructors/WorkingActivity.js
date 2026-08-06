"use client";

export default function WorkingActivity({ data }) {
  const maxVal = Math.max(...data.lastMonth, ...data.thisMonth, 1);

  return (
    <div className="working-card">
      <div className="working-header">
        <h3>Working Activity</h3>

        <div className="working-filter">
          <span className="legend yellow">
            <i />
            Last Month
          </span>

          <span className="legend green">
            <i />
            This Month
          </span>

          <span className="year-dropdown">
            This Year
            <i className="bi bi-chevron-down" />
          </span>

          <button type="button" className="working-more-btn" aria-label="More options">
            <i className="bi bi-three-dots-vertical" />
          </button>
        </div>
      </div>

      <div className="working-chart">
        {data.months.map((month, index) => (
          <div key={month} className="month-column">
            <div className="bars">
              <span
                className="yellow-bar"
                style={{
                  height: `${(data.lastMonth[index] / maxVal) * 100}%`,
                }}
              />
              <span
                className="green-bar"
                style={{
                  height: `${(data.thisMonth[index] / maxVal) * 100}%`,
                }}
              />
            </div>
            <p>{month}</p>
          </div>
        ))}
      </div>
    </div>
  );
}