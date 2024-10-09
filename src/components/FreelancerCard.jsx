// src/components/FreelancerCard.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FreelancerCard.css";

/* components */
import FreelancerProfile from "./FreelancerProfile";
import FreelancerDetails from "./FreelancerDetails";

/* assets */
import favoritePostOn from "../assets/icons/favoriteOn.svg";
import favoritePostOff from "../assets/icons/favoriteOff.svg";

const FreelancerCard = ({
  profileImage,
  name,
  userId,
  responseTime,
  matchCount,
  rating,
  weekendAvailable,
  badge,
  preTestScore,
  field,
  skills,
  averageProductionTime,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="freelancer-card">
      <div className="FC-freelancer-card-wrapper">
        {/* 좌측: 프로필 섹션 */}
        <div className="FC-freelancer-left">
          <FreelancerProfile
            profileImage={profileImage}
            name={name}
            userId={userId}
            responseTime={responseTime}
            matchCount={matchCount}
            rating={rating}
            weekendAvailable={weekendAvailable}
            badge={badge}
            preTestScore={preTestScore}
          />
          <div className="FC-freelancer-actions">
            <img
              src={isFavorited ? favoritePostOn : favoritePostOff}
              alt={isFavorited ? "찜 취소" : "찜하기"}
              onClick={handleFavoriteToggle}
              className="FC-favorite-icon"
              style={{ cursor: "pointer" }}
            />
            <Link to={`/profile/freelancer/${userId}/details`}>
              <button className="FC-detail-link-button">자세히 보기</button>
            </Link>
          </div>
        </div>

        {/* 우측: 매칭 정보 및 기술 스택 */}
        <div className="FC-freelancer-right">
          <FreelancerDetails
            matchCount={matchCount}
            field={field}
            responseTime={responseTime}
            averageProductionTime={averageProductionTime}
            skills={skills}
          />
        </div>
      </div>
    </div>
  );
};

export default FreelancerCard;
