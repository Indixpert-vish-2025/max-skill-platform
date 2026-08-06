"use client";

import { useState } from "react";
import { Card } from "react-bootstrap";

const AXIS_TICKS = [0, 55, 110, 165, 220, 275];

export default function SellingActivity({ data }) {
  const [activeTab, setActiveTab] = useState("selling");
  const maxScale = data.maxScale || 275;

  return (
    <Card className="selling-card border-0 shadow-sm">
      <Card.Body>
        <div className="selling-header">
          <h5>Selling Activity</h5>

          <div className="selling-header__right">
            <div className="selling-legend">
              <span>
                <i className="legend-dot legend-dot--green" />
                This Week
              </span>
              <span>
                <i className="legend-dot legend-dot--yellow" />
                Last Week
              </span>
            </div>

            <div className="selling-tabs">
              <button
                type="button"
                className={`selling-tab ${activeTab === "insight" ? "active" : ""}`}
                onClick={() => setActiveTab("insight")}
              >
                Insight
              </button>
              <button
                type="button"
                className={`selling-tab ${activeTab === "selling" ? "active" : ""}`}
                onClick={() => setActiveTab("selling")}
              >
                Selling
              </button>
            </div>
          </div>
        </div>

        <div className="selling-chart">
          {data.weeks
            .slice()
            .reverse()
            .map((week, index) => {
              const weekIndex = data.weeks.length - 1 - index;
              const thisWeekValue = data.thisWeek[weekIndex];
              const lastWeekValue = data.lastWeek[weekIndex];

              return (
                <div className="selling-row" key={week}>
                  <span className="week">{week}</span>

                  <div className="selling-bars">
                    <div
                      className="selling-bar selling-bar--green"
                      style={{
                        width: `${(thisWeekValue / maxScale) * 100}%`,
                      }}
                    />
                    <div
                      className="selling-bar selling-bar--yellow"
                      style={{
                        width: `${(lastWeekValue / maxScale) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>

        <div className="selling-axis">
          {AXIS_TICKS.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}
