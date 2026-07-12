"use client";

import { Dropdown } from "react-bootstrap";

export default function ActivityFilter() {
  return (

    <div className="activity-filter">

      <Dropdown>

        <Dropdown.Toggle
          variant="light"
        >

          All Type

        </Dropdown.Toggle>

        <Dropdown.Menu>

          <Dropdown.Item>

            All

          </Dropdown.Item>

          <Dropdown.Item>

            Courses

          </Dropdown.Item>

          <Dropdown.Item>

            Group Chat

          </Dropdown.Item>

        </Dropdown.Menu>

      </Dropdown>

      <button className="filter-more">

        <i className="bi bi-three-dots"></i>

      </button>

    </div>

  );
}