"use client";

import Image from "next/image";
import { Card, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import { addToCart } from "../../store/slices/cartSlice";
import { addToWishlist } from "../../store/slices/wishlistSlice";

export default function CoursePreview({ course }) {
  const router = useRouter();
  const dispatch = useDispatch();

  // Add To Cart
  const handleAddToCart = () => {
    dispatch(addToCart(course));
    router.push("/student/cart");
  };

  // Wishlist
  const handleWishlist = () => {
    dispatch(addToWishlist(course));
    router.push("/student/wishlist");
  };

  // Buy Now
  const handleBuyNow = () => {
    dispatch(addToCart(course));
    router.push("/student/checkout");
  };

  return (
    <Card className="course-preview-card border-0 shadow-sm">

      <div className="preview-image">

        <Image
          src={course.image}
          alt={course.title}
          fill
          className="preview-img"
        />

        <button
          className="play-button"
          onClick={() =>
            router.push(`/student/courses/${course.id}/learn`)
          }
        >
          <i className="bi bi-play-fill"></i>
        </button>

      </div>

      <Card.Body>

        <div className="price-wrapper">

          <h2 className="price">
            {course.price}
          </h2>

          <div className="price-meta">

            <span className="old-price">
              {course.oldPrice}
            </span>

            <span className="discount">
              Save {course.discount}
            </span>

            <Button
              variant="link"
              className="wishlist-btn"
              onClick={handleWishlist}
            >
              <i className="bi bi-heart-fill me-2"></i>
              Add to Wishlist
            </Button>

          </div>

        </div>

        <h6 className="mt-4 mb-3">
          What will you learn:
        </h6>

        <div className="learn-list">

          {course.learnPoints.map((item, index) => (

            <div
              key={index}
              className="learn-item"
            >
              <i className="bi bi-check-circle-fill"></i>

              <span>{item}</span>

            </div>

          ))}

        </div>

        <div className="d-flex gap-3 mt-4">

          <Button
            variant="outline-secondary"
            className="w-50"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          <Button
            variant="success"
            className="w-50"
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>

        </div>

      </Card.Body>

    </Card>
  );
}