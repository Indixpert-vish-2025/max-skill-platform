"use client";

import Image from "next/image";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../../../store/slices/cartSlice";
import { removeFromWishlist } from "../../../store/slices/wishlistSlice";

export default function StudentWishlistPage() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const handleMoveToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
  };

  return (
    <div className="student-wishlist">

      <h2 className="mb-4">My Wishlist</h2>

      {wishlistItems.length === 0 ? (

        <div className="empty-wishlist">

          <i className="bi bi-heart"></i>

          <h5>Your Wishlist is Empty</h5>

          <p>Add your favourite courses to wishlist.</p>

        </div>

      ) : (

        <div className="wishlist-list">

          {wishlistItems.map((item) => (

            <div
              key={item.id}
              className="wishlist-item"
            >

              <div className="wishlist-image">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={160}
                  height={100}
                />

              </div>

              <div className="wishlist-content">

                <h5>{item.title}</h5>

                <p>{item.price}</p>

              </div>

              <div className="wishlist-actions">

                <Button
                  className="move-cart-btn"
                  onClick={() => handleMoveToCart(item)}
                >
                  Move to Cart
                </Button>

                <Button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(removeFromWishlist(item.id))
                  }
                >
                  Remove
                </Button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}