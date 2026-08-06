"use client";

import ReviewCard from "./ReviewCard";

export default function UserReviews({ reviews }) {
  return (
    <div className="user-review-section">
      <h5>User Reviews</h5>

      <div className="user-review-grid">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
