"use client";

import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

export default function ScoreActivityCard({
  title = "Score Activity",
  months = [],
  lastMonth = [],
  thisMonth = [],
  tooltip = {},
  weekly = {},
}) {
  const [view, setView] = useState("monthly");

  const isWeekly = view === "weekly";
  const labels = isWeekly ? weekly.days || [] : months;
  const lastData = isWeekly ? weekly.lastWeek || [] : lastMonth;
  const thisData = isWeekly ? weekly.thisWeek || [] : thisMonth;

  const getInitialIndex = (currentView) => {
    if (currentView === "weekly") {
      return Math.max((weekly.days || []).indexOf(weekly.tooltip?.day), 0);
    }

    return Math.max(months.indexOf(tooltip.month), 0);
  };

  const max = Math.max(...lastData, ...thisData, 1);

  const [selectedIndex, setSelectedIndex] = useState(() => getInitialIndex("monthly"));

  const handleViewChange = (nextView) => {
    setView(nextView);
    setSelectedIndex(getInitialIndex(nextView));
  };

  return (
    <div className="student-card student-score-activity">
      <div className="student-card__header">
        <h5>{title}</h5>

        <div className="student-card__actions">
          <div className="student-legend">
            <span>
              <i className="dot dot-yellow" />
              {isWeekly ? "Last Week" : "Last Month"}
            </span>

            <span>
              <i className="dot dot-green" />
              {isWeekly ? "This Week" : "This Month"}
            </span>
          </div>

          <Dropdown align="end">
            <Dropdown.Toggle
              as="button"
              type="button"
              className="student-year-select"
            >
              <span>{isWeekly ? "Weekly" : "Monthly"}</span>
              <i className="bi bi-chevron-down" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                active={view === "weekly"}
                onClick={() => handleViewChange("weekly")}
              >
                Weekly
              </Dropdown.Item>
              <Dropdown.Item
                active={view === "monthly"}
                onClick={() => handleViewChange("monthly")}
              >
                Monthly
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <button
            type="button"
            className="student-dots-btn"
            aria-label="More options"
          >
            <i className="bi bi-three-dots" />
          </button>
        </div>
      </div>

      <div className="student-score-activity__chart">
        <div className="student-score-bars">
          {labels.map((label, index) => (
            <div
              key={label}
              className="student-score-bar-group"
              onClick={() => setSelectedIndex(index)}
              style={{
                cursor: "pointer",
                position: "relative",
              }}
            >
              {selectedIndex === index && (
                <div className="student-score-tooltip">
                  <span>{label}</span>
                  <strong>{thisData[index]}</strong>
                </div>
              )}

              <div className="student-score-bar-pair">
                <div
                  className="student-score-bar student-score-bar--yellow"
                  style={{
                    height: `${(lastData[index] / max) * 100}%`,
                  }}
                />

                <div
                  className="student-score-bar student-score-bar--green"
                  style={{
                    height: `${(thisData[index] / max) * 100}%`,
                  }}
                />
              </div>

              <span
                className={`student-score-bar-label ${
                  selectedIndex === index ? "active" : ""
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
