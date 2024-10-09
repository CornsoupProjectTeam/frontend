// src/components/FreelancerCard.jsx

import React from "react";
import "./FreelancerCard.css";

const FreelancerCard = ({
  name,
  username,
  rating,
  reviewCount,
  matchRate,
  skillSet,
  profileImage,
}) => {
  return (
    <div className="freelancer-card">
      <img
        src={profileImage}
        alt={`${name} 프로필`}
        className="profile-image"
      />
      <div className="freelancer-info">
        <h3>{name}</h3>
        <p>@{username}</p>
        <p>
          평점: {rating} / 리뷰: {reviewCount}개
        </p>
        <p>매칭률: {matchRate}%</p>
        <div className="skill-set">
          {skillSet.map((skill, index) => (
            <span key={index} className="skill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelancerCard;
