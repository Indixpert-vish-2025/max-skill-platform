"use client";

export default function ReviewCard({ review }) {
  return (

    <div className="review-card">

      <div className="review-avatar">

        <i className="bi bi-person-fill"></i>

      </div>

      <div className="review-content">

        <div className="review-header">

          <h6>{review.name}</h6>

          <span>{review.time}</span>

        </div>

        <div className="review-rating">

          {[...Array(review.rating)].map((_, index) => (

            <i
              key={index}
              className="bi bi-star-fill text-warning"
            ></i>

          ))}

        </div>

        <p>{review.comment}</p>

      </div>

    </div>

  );
}