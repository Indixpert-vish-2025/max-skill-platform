import React from 'react';

export default function DiscountBanner({ title, description }) {
  return (
    <div className="student-discount-banner">
      <div className="student-discount-banner__content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="student-discount-banner__decor" aria-hidden="true">
        <i className="bi bi-book" />
        <i className="bi bi-calendar3" />
      </div>
    </div>
  );
}
