"use client";

import ActivityCard from "./ActivityCard";

export default function ActivityTimeline({

  title,

  items,

}) {

  return (

    <div className="activity-section">

      <h5>

        {title}

      </h5>

      {items.map((item) => (

        <ActivityCard

          key={item.id}

          activity={item}

        />

      ))}

    </div>

  );

}