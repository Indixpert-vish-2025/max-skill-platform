"use client";

import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  applyCoupon,
  clearCoupon,
} from "../../../store/slices/couponSlice";

export default function CouponCard() {

  const dispatch = useDispatch();

  const { code } = useSelector(
    (state) => state.coupon
  );

  const [coupon, setCoupon] = useState("");

  const handleApply = () => {

    const value = coupon.trim().toUpperCase();

    if (!value) {

      toast.warning("Enter Coupon Code");

      return;

    }

    if (code === value) {

      toast.info("Coupon Already Applied");

      return;

    }

    if (
      value === "MAX20" ||
      value === "WELCOME10" ||
      value === "STUDENT15"
    ) {

      dispatch(applyCoupon(value));

      toast.success(
        `${value} Applied Successfully`
      );

    } else {

      dispatch(clearCoupon());

      toast.error("Invalid Coupon");

    }

  };

  return (

    <div className="coupon-card">

      <h4>Coupon Code</h4>

      <div className="coupon-box">

        <Form.Control

          placeholder="Enter Coupon"

          value={coupon}

          onChange={(e)=>
            setCoupon(e.target.value)
          }

        />

        <Button
          className="apply-btn"
          onClick={handleApply}
        >

          Apply

        </Button>

      </div>

      {code && (

        <div className="coupon-active">

          <span>

            Applied :

            <strong>{code}</strong>

          </span>

          <Button

            size="sm"

            variant="outline-danger"

            onClick={()=>{
              dispatch(clearCoupon());
              setCoupon("");
              toast.info("Coupon Removed");
            }}

          >

            Remove

          </Button>

        </div>

      )}

      <div className="coupon-list">

        <small>Available Coupons</small>

        <ul>

          <li>MAX20 → 20% OFF</li>

          <li>WELCOME10 → 10% OFF</li>

          <li>STUDENT15 → 15% OFF</li>

        </ul>

      </div>

    </div>

  );

}