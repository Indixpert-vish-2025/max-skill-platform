"use client";

import { Dropdown } from "react-bootstrap";

export default function ResourceCard({ resource }) {
  return (
    <div className="instructor-resource-card">
      <div
        className="instructor-resource-card__icon"
        style={{ backgroundColor: `${resource.color}20`, color: resource.color }}
      >
        <i className={`bi ${resource.icon}`} />
      </div>

      <div className="instructor-resource-card__body">
        <h6>{resource.name}</h6>
        <div className="instructor-resource-card__meta">
          <span>{resource.size}</span>
          <span>{resource.date}</span>
        </div>
      </div>

      <Dropdown align="end">
        <Dropdown.Toggle variant="light" className="instructor-action-btn border-0">
          <i className="bi bi-three-dots" />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>
            <i className="bi bi-download me-2" />
            Download
          </Dropdown.Item>
          <Dropdown.Item>
            <i className="bi bi-share me-2" />
            Share
          </Dropdown.Item>
          <Dropdown.Item className="text-danger">
            <i className="bi bi-trash me-2" />
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
