"use client";

export default function OngoingClassStat({ item }) {
  const iconMap = {
    palette: "bi-palette",
    code: "bi-code-slash",
  };

  return (
    <div className={`instructor-ongoing-card variant-${item.variant}`}>
      <div className="instructor-ongoing-icon">
        <i className={`bi ${iconMap[item.icon] || "bi-book"}`} />
      </div>
      <div className="instructor-ongoing-value">{item.value}</div>
      <div className="instructor-ongoing-label">{item.label}</div>
      <div className="instructor-ongoing-watermark">
        <i className={`bi ${iconMap[item.icon] || "bi-book"}`} />
      </div>
    </div>
  );
}
