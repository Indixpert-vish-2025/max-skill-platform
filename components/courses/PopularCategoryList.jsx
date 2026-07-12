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

export default function PopularCategoryList() {
  const [active, setActive] = useState("Graphic Design");

  return (
    <div className="popular-category-section mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="section-title">Popular This Week</h4>

        <button className="btn btn-link text-decoration-none view-all-btn">
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
            onClick={() => setActive(item.title)}
          />
        ))}
      </div>
    </div>
  );
}