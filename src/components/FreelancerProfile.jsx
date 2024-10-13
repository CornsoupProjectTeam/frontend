// src/components/FreelancerProfile.jsx

import React from "react";
import "./FreelancerProfile.css";

/* assets */
import GoldBadge from "../assets/icons/GoldBadge.svg";
import SilverBadge from "../assets/icons/SilverBadge.svg";
import BronzeBadge from "../assets/icons/BronzeBadge.svg";

const FreelancerProfile = ({
  profileImage,
  name,
  userId,
  responseTime,
  matchCount,
  rating,
  weekendAvailable,
  badge,
  preTestScore,
}) => {
  return (
    <div className="freelancer-profile">
      <img
        className="FP-profile-image"
        src={profileImage}
        alt={`${name} profile`}
      />
      <div className="FP-freelancer-info">
        <div className="FP-freelancer-info-nameId">
          <h2 className="FP-freelancer-name">{name}</h2>
          <p className="FP-freelancer-userid">@{userId}</p>
        </div>
        <div className="FP-freelancer-info-work">
          <div className="FP-freelancer-stats">
            <span>평균 응답시간 {responseTime}분</span>
            <span>매칭 경험 {matchCount}회</span>
            <span>
              만족도 {rating !== undefined ? rating.toFixed(2) : "N/A"}점
            </span>
          </div>
        </div>
        <div className="FP-freelancer-tags">
          {weekendAvailable && (
            <span className="FP-weekend-work-tag">주말 작업 가능</span>
          )}
          {badge && (
            <span className="FP-freelancer-badge">
              {badge === "gold" && <img src={GoldBadge} alt="Gold Badge" />}
              {badge === "silver" && (
                <img src={SilverBadge} alt="Silver Badge" />
              )}
              {badge === "bronze" && (
                <img src={BronzeBadge} alt="Bronze Badge" />
              )}
            </span>
          )}
          {preTestScore && (
            <span className="FP-pretest-score-tag">
              pre-test {preTestScore}점대
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;
