"use client";

import { Card } from "react-bootstrap";

export default function InstructorProfilePanel({ profile }) {
  return (
    <div className="instructor-profile-page">
      <div className="instructor-profile-left">
        <Card className="instructor-profile-card border-0 shadow-sm">
          <Card.Body>
            <div className="instructor-profile-avatar-wrap">
              <img src={profile.image} alt={profile.name} className="instructor-profile-avatar" />
            </div>

            <h4>{profile.name}</h4>
            <p className="instructor-profile-designation">{profile.designation}</p>
            <span className="instructor-profile-since">{profile.memberSince}</span>

            <div className="instructor-profile-contact">
              <div>
                <i className="bi bi-envelope" />
                <span>{profile.email}</span>
              </div>
              <div>
                <i className="bi bi-telephone" />
                <span>{profile.phone}</span>
              </div>
              <div>
                <i className="bi bi-geo-alt" />
                <span>{profile.location}</span>
              </div>
            </div>

            <p className="instructor-profile-bio">{profile.bio}</p>

            <div className="instructor-profile-skills">
              {profile.skills.map((skill) => (
                <span key={skill} className="instructor-skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <div className="instructor-profile-achievements">
              {profile.achievements.map((icon, index) => (
                <img key={index} src={icon} alt="Achievement" />
              ))}
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="instructor-profile-right">
        <div className="instructor-profile-stats-grid">
          <div className="instructor-profile-stat">
            <h3>{profile.stats.students}</h3>
            <p>Students</p>
          </div>
          <div className="instructor-profile-stat">
            <h3>{profile.stats.courses}</h3>
            <p>Courses</p>
          </div>
          <div className="instructor-profile-stat">
            <h3>{profile.stats.rating}</h3>
            <p>Rating</p>
          </div>
          <div className="instructor-profile-stat">
            <h3>{profile.stats.reviews}</h3>
            <p>Reviews</p>
          </div>
          <div className="instructor-profile-stat">
            <h3>{profile.stats.earnings}</h3>
            <p>Earnings</p>
          </div>
          <div className="instructor-profile-stat">
            <h3>{profile.stats.experience}</h3>
            <p>Experience</p>
          </div>
        </div>

        <Card className="instructor-profile-courses-card border-0 shadow-sm">
          <Card.Body>
            <h5>My Courses</h5>
            {profile.courses.map((course) => (
              <div key={course.id} className="instructor-profile-course">
                <div>
                  <strong>{course.title}</strong>
                  <small>{course.students} Students · {course.rating} Rating</small>
                </div>
                <div className="instructor-profile-course-progress">
                  <div className="instructor-progress-track">
                    <div
                      className="instructor-progress-fill"
                      style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                    />
                  </div>
                  <span>{course.progress}%</span>
                </div>
              </div>
            ))}
          </Card.Body>
        </Card>

        <Card className="instructor-profile-schedule-card border-0 shadow-sm">
          <Card.Body>
            <h5>Teaching Schedule</h5>
            {profile.schedule.map((item) => (
              <div key={item.day} className="instructor-profile-schedule-item">
                <div>
                  <strong>{item.day}</strong>
                  <span>{item.course}</span>
                </div>
                <span className="instructor-profile-schedule-time">{item.time}</span>
              </div>
            ))}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
