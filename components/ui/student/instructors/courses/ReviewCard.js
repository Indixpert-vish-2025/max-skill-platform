"use client";

import { Card } from "react-bootstrap";

export default function ReviewCard({ review }) {
  return (
    <Card className="review-card border-0">

      <Card.Body>

        <div className="review-avatar">
          <i className="bi bi-person-fill" aria-hidden="true" />
        </div>

        <h6>{review.name}</h6>

        <div className="review-stars">

          {[1,2,3,4,5].map((star)=>(

            <i
              key={star}
              className="bi bi-star-fill"
            ></i>

          ))}

        </div>

        <p>{review.comment}</p>

      </Card.Body>

    </Card>
  );
}