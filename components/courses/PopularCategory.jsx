import Image from "next/image";

export default function PopularCategory({
  title,
  image,
  subtitle,
  active = false,
  onClick,
}) {
  return (
    <div
      className={`popular-category-btn ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="category-icon">
        <Image
          src={image}
          alt={title}
          width={42}
          height={42}
        />
      </div>

      <div className="category-content">
        <h6>{title}</h6>
        <p>{subtitle}</p>
      </div>

      <i className="bi bi-chevron-right category-arrow"></i>
    </div>
  );
}