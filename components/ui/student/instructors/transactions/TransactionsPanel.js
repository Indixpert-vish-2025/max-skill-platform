"use client";

import { useState } from "react";
import StatCard from "../StatCard";
import TransactionRow from "./TransactionRow";

export default function TransactionsPanel({ stats, transactions, filters, chart }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = transactions.filter((tx) => {
    if (activeFilter === "All") return true;
    return tx.status === activeFilter;
  });

  const maxValue = Math.max(...chart.values);

  return (
    <div className="instructor-transactions-page">
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

      <div className="instructor-transactions-content">
        <div className="instructor-earnings-chart-card">
          <div className="instructor-earnings-chart-header">
            <h5>Earnings Overview</h5>
            <span className="year-dropdown">
              This Year
              <i className="bi bi-chevron-down" />
            </span>
          </div>

          <div className="instructor-earnings-bars">
            {chart.months.map((month, index) => (
              <div key={month} className="instructor-earnings-bar-col">
                <div
                  className="instructor-earnings-bar"
                  style={{ height: `${(chart.values[index] / maxValue) * 200}px` }}
                />
                <span>{month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="instructor-transactions-panel">
          <div className="instructor-students-toolbar">
            <div className="instructor-filter-tabs">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`instructor-filter-tab ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="instructor-students-table-wrap">
            <table className="instructor-students-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Student</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((tx) => (
                  <TransactionRow key={tx.id} transaction={tx} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
