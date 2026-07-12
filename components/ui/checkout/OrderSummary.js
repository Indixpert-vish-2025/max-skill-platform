"use client";

import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function OrderSummary() {

  const router = useRouter();

  const cartItems = useSelector((state) => state.cart.items);

  const { discount } = useSelector(
    (state) => state.coupon
  );

  const subtotal = cartItems.reduce((sum, item) => {

    const price = Number(
      String(item.price).replace(/[^0-9.]/g, "")
    );

    return sum + price * item.quantity;

  }, 0);

  const discountAmount =
    (subtotal * discount) / 100;

  const afterDiscount =
    subtotal - discountAmount;

  const gst =
    (afterDiscount * 18) / 100;

  const grandTotal =
    afterDiscount + gst;

  const handlePlaceOrder = () => {

    if (cartItems.length === 0) return;

    router.push("/student/order-success");

  };

  return (

    <div className="order-card">

      <h4>Order Summary</h4>

      {cartItems.map((item) => (

        <div
          key={item.id}
          className="summary-item"
        >

          <span>

            {item.title}

            <small> × {item.quantity}</small>

          </span>

          <strong>{item.price}</strong>

        </div>

      ))}

      <hr />

      <div className="summary-row">

        <span>Subtotal</span>

        <strong>₹{subtotal.toFixed(2)}</strong>

      </div>

      <div className="summary-row">

        <span>Discount ({discount}%)</span>

        <strong className="text-success">

          - ₹{discountAmount.toFixed(2)}

        </strong>

      </div>

      <div className="summary-row">

        <span>GST (18%)</span>

        <strong>₹{gst.toFixed(2)}</strong>

      </div>

      <hr />

      <div className="summary-total">

        <span>Total</span>

        <h4>₹{grandTotal.toFixed(2)}</h4>

      </div>

      <Button
        className="place-order-btn"
        onClick={handlePlaceOrder}
        disabled={cartItems.length === 0}
      >
        Place Order
      </Button>

    </div>

  );

}