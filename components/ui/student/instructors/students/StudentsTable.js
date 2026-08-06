"use client";

import { useState } from "react";
import { Form } from "react-bootstrap";
import StatCard from "../StatCard";
import StudentTableRow from "./StudentTableRow";

export default function StudentsTable({ stats, students, filters }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = students.filter((student) => {
    const matchesFilter =
      activeFilter === "All" || student.status === activeFilter;
    const matchesSearch =
      !search.trim() ||
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.course.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="instructor-students-page">
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

      <div className="instructor-students-panel">
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

          <Form className="instructor-students-search">
            <i className="bi bi-search" />
            <Form.Control
              type="text"
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </div>

        <div className="instructor-students-table-wrap">
          <table className="instructor-students-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Progress</th>
                <th>Status</th>
                <th>Enrolled</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <StudentTableRow key={student.id} student={student} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
