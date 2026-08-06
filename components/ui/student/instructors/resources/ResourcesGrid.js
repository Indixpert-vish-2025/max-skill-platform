"use client";

import { useState } from "react";
import { Form } from "react-bootstrap";
import ResourceCard from "./ResourceCard";

export default function ResourcesGrid({ stats, resources, categories }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "All" || resource.type === activeCategory;
    const matchesSearch =
      !search.trim() ||
      resource.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="instructor-resources-page">
      <div className="instructor-resource-stats">
        {stats.map((stat) => (
          <div key={stat.id} className={`instructor-resource-stat ${stat.color}`}>
            <div className="instructor-resource-stat__icon">
              <i className={`bi ${stat.icon}`} />
            </div>
            <div>
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="instructor-resources-panel">
        <div className="instructor-resources-toolbar">
          <div className="instructor-filter-tabs">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`instructor-filter-tab ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="instructor-resources-actions">
            <Form className="instructor-students-search">
              <i className="bi bi-search" />
              <Form.Control
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
            <button type="button" className="instructor-upload-btn">
              <i className="bi bi-cloud-upload" />
              Upload
            </button>
          </div>
        </div>

        <div className="instructor-resources-grid">
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
