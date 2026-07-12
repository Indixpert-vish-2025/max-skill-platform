"use client";

import { Form } from "react-bootstrap";

export default function BillingForm() {
  return (
    <div className="billing-card">

      <h4>Billing Details</h4>

      <div className="checkout-grid">

        <Form.Group>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Select>

            <option>India</option>

          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="State"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="City"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zip Code"
          />
        </Form.Group>

      </div>

      <Form.Group className="mt-4">

        <Form.Label>Address</Form.Label>

        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Enter complete address"
        />

      </Form.Group>

    </div>
  );
}