"use client";

import ReviewCard from "./ReviewCard";

export default function ReviewList({ reviews = [] }) {

  return (

    <div className="review-list">

      {reviews.map((review, index) => (

        <ReviewCard
          key={index}
          review={review}
        />

      ))}

    </div>

  );

}