"use client";

import { Dropdown } from "react-bootstrap";

export default function StudentTableRow({ student }) {
  const statusClass = student.status.toLowerCase();

  return (
    <tr>
      <td>
        <div className="instructor-student-cell">
          <img src={student.avatar} alt={student.name} className="instructor-student-avatar" />
          <div>
            <strong>{student.name}</strong>
            <small>{student.email}</small>
          </div>
        </div>
      </td>
      <td>{student.course}</td>
      <td>
        <div className="instructor-progress-bar">
          <div className="instructor-progress-track">
            <div
              className="instructor-progress-fill"
              style={{ width: `${student.progress}%` }}
            />
          </div>
          <span>{student.progress}%</span>
        </div>
      </td>
      <td>
        <span className={`instructor-status-badge ${statusClass}`}>
          {student.status}
        </span>
      </td>
      <td>{student.enrolled}</td>
      <td>
        <Dropdown align="end">
          <Dropdown.Toggle variant="light" className="instructor-action-btn border-0">
            <i className="bi bi-three-dots" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>View Profile</Dropdown.Item>
            <Dropdown.Item>Send Message</Dropdown.Item>
            <Dropdown.Item>View Progress</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
}
