"use client";

import React from "react";
import ActivityAttachment from "./ActivityAttachment";

export default function ActivityCard({ activity }) {

  return (

    <div className="activity-card">

      <div className="activity-time">

        {activity.time}

      </div>

      <div className="activity-content">

        <div
          className="activity-avatar"
          style={{
            background: activity.color,
          }}
        >

          {activity.initial}

        </div>

        <div className="activity-details">

          <p>

            <strong>

              {activity.user}

            </strong>

            {" "}

            {activity.action}

            {" "}

            <span className="course-name">

              {activity.course}

            </span>

            {" "}

            {activity.type}

          </p>

          <ActivityAttachment

            attachments={activity.attachments}

          />

        </div>

      </div>

    </div>

  );

}