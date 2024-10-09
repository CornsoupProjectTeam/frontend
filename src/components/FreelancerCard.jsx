import React, { useState } from "react";
import "./FreelancerCard.css"; // 스타일 시트

/* 찜하기 아이콘 */
import favoritePostOn from "../assets/icons/favoriteOn.svg";
import favoritePostOff from "../assets/icons/favoriteOff.svg";

/* 배지 이미지 */
import goldBadge from "../assets/icons/GoldBadge.svg";
import silverBadge from "../assets/icons/SilverBadge.svg";
import bronzeBadge from "../assets/icons/BronzeBadge.svg";

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
  // 찜하기 상태 관리
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited); // 클릭 시 상태 반전
  };

  return (
    <div className="freelancer-card">
      <div className="freelancer-card-wrapper">
        {/* 좌측: 프로필 섹션 */}
        <div className="freelancer-left">
          <div className="freelancer-profile">
            <img
              className="profile-image"
              src={profileImage}
              alt={`${name} profile`}
            />
            <div className="freelancer-info">
              <div className="freelancer-info-nameId">
                <h2 className="freelancer-name">{name}</h2>
                <p className="freelancer-userid">@{userId}</p>
              </div>
              <div className="freelancer-info-work">
                <div className="freelancer-stats">
                  <span>평균 응답시간 {responseTime}분</span>
                  <span>매칭 경험 {matchCount}회</span>
                  <span>만족도 {rating.toFixed(2)}점</span>
                </div>
              </div>
            </div>
            {/* 주말 작업 여부 및 뱃지 */}
            <div className="freelancer-tags">
              {weekendAvailable && (
                <span className="weekend-work-tag">주말 작업 가능</span>
              )}
              {badge && (
                <span className="freelancer-badge">
                  {badge === "gold" && <img src={goldBadge} alt="Gold Badge" />}
                  {badge === "silver" && (
                    <img src={silverBadge} alt="Silver Badge" />
                  )}
                  {badge === "bronze" && (
                    <img src={bronzeBadge} alt="Bronze Badge" />
                  )}
                </span>
              )}
              {preTestScore && (
                <span className="pretest-score-tag">
                  pre-test {preTestScore}점대
                </span>
              )}
            </div>
          </div>
          <div className="freelancer-actions">
            {/* 찜하기 버튼 */}
            <img
              src={isFavorited ? favoritePostOn : favoritePostOff} // 상태에 따라 아이콘 변경
              alt={isFavorited ? "찜 취소" : "찜하기"}
              onClick={handleFavoriteToggle} // 클릭 이벤트 핸들러
              className="favorite-icon"
              style={{ cursor: "pointer" }} // 클릭 가능한 버튼 스타일 추가
            />
            {/* 자세히 보기 버튼 */}
            <a
              href={`/profile/freelancer/${userId}/details`}
              className="detail-link">
              <button className="detail-link-button">자세히 보기</button>
            </a>
          </div>
        </div>

        {/* 우측: 매칭 정보 및 기술 스택 */}
        <div className="freelancer-right">
          <div className="freelancer-metrics">
            <div className="main_metric">
              <span className="main_metric-label">매칭 횟수</span>
              <span className="main_metric-value">{matchCount}번</span>
            </div>
            <div className="metric">
              <span className="metric-label">전문 분야</span>
              <span className="metric-value">
                {field === "logo" ? "로고 디자인" : "썸네일 디자인"}
              </span>
            </div>
            <div className="metric">
              <span className="metric-label">평균 응답</span>
              <span className="metric-value">{responseTime}분</span>
            </div>
            <div className="metric">
              <span className="metric-label">제작 기간</span>
              <span className="metric-value">
                {averageProductionTime.toFixed(1)}일
              </span>
            </div>
          </div>

          {/* 기술 스택 */}
          <div className="freelancer-skills-container">
            {/* 배경 이미지가 적용된 영역 */}
            <div className="skills-background">
              <h4>보유 기술</h4>
              <div className="skill-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerCard;
