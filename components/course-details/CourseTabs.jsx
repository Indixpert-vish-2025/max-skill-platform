"use client";

import { useState } from "react";
import ReviewList from "./ReviewList";

export default function CourseTabs({ course }) {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="course-tabs mt-4">

      <div className="tab-buttons">

        <button
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>

        <button
          className={activeTab === "reviews" ? "active" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>

      </div>

      <div className="tab-content mt-4">

        {activeTab === "about" && (
          <p>{course.description}</p>
        )}

        {activeTab === "reviews" && (
          <ReviewList reviews={course.reviews} />
        )}

      </div>

    </div>
  );
}