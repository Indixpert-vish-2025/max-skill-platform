"use client";

import Image from "next/image";

export default function ProfileCard({ profile }) {

  return (

    <div className="profile-card">

      <button className="profile-more">

        <i className="bi bi-three-dots"></i>

      </button>

      <div className="profile-image">

        <Image
          src={profile.image}
          alt={profile.name}
          width={90}
          height={90}
        />

      </div>

      <h3>{profile.name}</h3>

      <span className="member-since">

        {profile.memberSince}

      </span>

      <div className="profile-counts">

        <div className="count-box">

          <small>Points</small>

          <h4>{profile.points}</h4>

        </div>

        <div className="count-box">

          <small>Certificate</small>

          <h4>{profile.certificate}</h4>

        </div>

      </div>

      <div className="achievement-title">

        Achievements

      </div>

      

<div className="achievement-list">
  {profile.achievements.map((icon, index) => (
    <div className="achievement-icon" key={index}>
      <Image
        src={icon}
        alt="Achievement"
        width={22}
        height={22}
      />
    </div>
  ))}
</div>

      <div className="bio-title">

        Bio

      </div>

      <p className="bio-text">

        {profile.bio}

      </p>

    </div>

  );

}