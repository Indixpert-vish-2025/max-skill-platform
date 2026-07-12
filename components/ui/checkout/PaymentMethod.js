"use client";

import { Form } from "react-bootstrap";

export default function PaymentMethod() {
  return (
    <div className="payment-card">

      <h4>Payment Method</h4>

      <label className="payment-option">

        <Form.Check
          type="radio"
          name="payment"
          defaultChecked
        />

        <div className="payment-content">

          <div className="payment-icon">
            <i className="bi bi-cash-stack"></i>
          </div>

          <div>

            <h6>Cash on Delivery</h6>

            <p>
              Pay when your course enrollment is confirmed.
            </p>

          </div>

        </div>

      </label>

    </div>
  );
}