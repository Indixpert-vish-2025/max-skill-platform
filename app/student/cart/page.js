"use client";

import Image from "next/image";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../../store/slices/cartSlice";

export default function StudentCartPage() {

  const dispatch = useDispatch();
  const router = useRouter();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const total = cartItems.reduce((sum, item) => {

    const price = Number(
      String(item.price).replace(/[^0-9.]/g, "")
    );

    return sum + price * item.quantity;

  }, 0);

  return (

    <div className="student-cart">

      <h2 className="mb-4">
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (

        <div className="empty-cart">

          <h5>Your cart is empty.</h5>

        </div>

      ) : (

        <>

          <div className="cart-list">

            {cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <div className="cart-image">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={140}
                    height={90}
                  />

                </div>

                <div className="cart-content">

                  <h5>{item.title}</h5>

                  <p>{item.price}</p>

                  <div className="qty-box">

                    <button
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

                <Button
                  variant="danger"
                  onClick={() =>
                    dispatch(
                      removeFromCart(item.id)
                    )
                  }
                >
                  Remove
                </Button>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h4>

              Total : ₹{total.toFixed(2)}

            </h4>

            <Button
              variant="success"
              size="lg"
              onClick={() =>
                router.push("/student/checkout")
              }
            >
              Checkout
            </Button>

          </div>

        </>

      )}

    </div>

  );

}