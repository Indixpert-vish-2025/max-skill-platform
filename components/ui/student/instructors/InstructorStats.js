"use client";

export default function InstructorStats({
  achievement,
  certificate,
}) {
  return (

    <div className="instructor-stats">

      <div className="stats-box">

        <div className="stats-header">

          <i className="bi bi-award-fill"></i>

          <span>Achievement</span>

        </div>

        <h3>{achievement}</h3>

      </div>

      <div className="stats-box">

        <div className="stats-header">

          <i className="bi bi-patch-check-fill"></i>

          <span>Certificate</span>

        </div>

        <h3>{certificate}</h3>

      </div>

    </div>

  );
}