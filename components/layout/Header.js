"use client";

import { Form } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function Header({ toggleSidebar }) {
  const { logout } = useAuth();

  const pathname = usePathname();
  const router = useRouter();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const wishlistCount = wishlistItems.length;

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/courses": "Courses",
    "/schedule": "Schedule",
    "/students": "Students",
    "/resource": "Resource",
    "/transaction": "Transaction",
    "/live-class": "Live Class",

    "/student/dashboard": "Dashboard",
    "/student/courses": "Courses",
    "/student/schedule": "Schedule",
    "/student/instructors": "Instructors",
    "/student/profile": "Profile",
    "/student/activity": "Activity",

    "/student/cart": "Shopping Cart",
    "/student/wishlist": "Wishlist",
  };

  const pageTitle = pageTitles[pathname] || "Dashboard";

  return (
    <header className="dashboard-header">

      {/* Mobile Menu */}
      <button
        type="button"
        className="menu-btn"
        onClick={toggleSidebar}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Title */}
      <h1 className="page-title">{pageTitle}</h1>

      {/* Search */}
      <Form className="search-input">
        <div className="search-wrap">
          <i className="bi bi-search search-icon"></i>

          <Form.Control
            placeholder="Search here..."
          />
        </div>
      </Form>

      <div className="header-actions">

        <div className="header-lang">
          <span>Eng (US)</span>
          <i className="bi bi-chevron-down"></i>
        </div>

        {/* Wishlist */}
        <button
          className="header-icon-btn badge-btn"
          onClick={() =>
            router.push("/student/wishlist")
          }
        >
          <i className="bi bi-heart"></i>

          {wishlistCount > 0 && (
            <span className="header-badge">
              {wishlistCount}
            </span>
          )}
        </button>

        {/* Cart */}
        <button
          className="header-icon-btn badge-btn"
          onClick={() =>
            router.push("/student/cart")
          }
        >
          <i className="bi bi-cart3"></i>

          {cartCount > 0 && (
            <span className="header-badge">
              {cartCount}
            </span>
          )}
        </button>

        {/* Profile */}
        <button
          type="button"
          className="header-avatar"
          onClick={logout}
        >
          <i className="bi bi-person-fill text-secondary"></i>
        </button>

        {/* Settings */}
        <button
          type="button"
          className="header-icon-btn"
        >
          <i className="bi bi-gear"></i>
        </button>

      </div>

    </header>
  );
}