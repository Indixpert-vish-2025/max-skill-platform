"use client";

import BillingForm from "../../../components/ui/checkout/BillingForm";
import PaymentMethod from "../../../components/ui/checkout/PaymentMethod";
import OrderSummary from "../../../components/ui/checkout/OrderSummary";
import CouponCard from "../../../components/ui/checkout/CouponCard";

export default function StudentCheckoutPage() {
  return (
    <div className="student-checkout">

      <h2>Checkout</h2>

      <div className="checkout-wrapper">

        <div className="checkout-left">

          <BillingForm />

          <PaymentMethod />

        </div>

        <div className="checkout-right">

          <CouponCard />

          <OrderSummary />

        </div>

      </div>

    </div>
  );
}