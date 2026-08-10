"use client";

import { useState } from "react";
import PopularCategory from "./PopularCategory";

const categories = [
  {
    title: "Graphic Design",
    image: "/assets/category-design.svg",
    subtitle: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Programming",
    image: "/assets/category-programming.svg",
    subtitle: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Soft Skill",
    image: "/assets/category-softskill.svg",
    subtitle: "Lorem ipsum dolor sit amet",
  },
  {
    title: "Science",
    image: "/assets/category-science.svg",
    subtitle: "Lorem ipsum dolor sit amet",
  },
];

export default function PopularCategoryList({
  activeCategory: controlledActive,
  onCategoryChange,
}) {
  const [internalActive, setInternalActive] = useState(null);
  const isControlled = controlledActive !== undefined;
  const active = isControlled ? controlledActive : internalActive;

  const handleCategorySelect = (title) => {
    const nextCategory = active === title ? null : title;

    if (isControlled) {
      onCategoryChange?.(nextCategory);
    } else {
      setInternalActive(nextCategory);
    }
  };

  const handleViewAll = () => {
    if (isControlled) {
      onCategoryChange?.(null);
    } else {
      setInternalActive(null);
    }
  };

  return (
    <div className="popular-category-section mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="section-title">Popular This Week</h4>

        <button
          type="button"
          className="btn btn-link text-decoration-none view-all-btn"
          onClick={handleViewAll}
        >
          View All
          <i className="bi bi-chevron-right ms-1"></i>
        </button>
      </div>

      <div className="popular-category-list">
        {categories.map((item) => (
          <PopularCategory
            key={item.title}
            title={item.title}
            image={item.image}
            subtitle={item.subtitle}
            active={active === item.title}
            onClick={() => handleCategorySelect(item.title)}
          />
        ))}
      </div>
    </div>
  );
}