"use client";

import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function OrderSuccessPage() {

  const router = useRouter();

  return (

    <div className="order-success">

      <div className="success-card">

        <i className="bi bi-check-circle-fill success-icon"></i>

        <h2>Order Placed Successfully!</h2>

        <p>
          Thank you for purchasing the course.
          Your enrollment has been confirmed.
        </p>

        <div className="d-flex gap-3 justify-content-center mt-4">

          <Button
            className="continue-btn"
            onClick={() =>
              router.push("/student/dashboard")
            }
          >
            Continue Learning
          </Button>

          <Button
            variant="outline-success"
            onClick={() =>
              router.push("/student/courses")
            }
          >
            Browse Courses
          </Button>

        </div>

      </div>

    </div>

  );

}