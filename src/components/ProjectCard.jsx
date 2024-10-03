// src/components/ProjectCard.jsx

import React, { useState } from "react";

import "./ProjectCard.css";

/* assets */
import sampleProfile from "../assets/images/image 30.png";
import noneProjectImg from "../assets/images/sampleImgLogo.svg";
import goldBadge from "../assets/icons/GoldBadge.svg";
import silverBadge from "../assets/icons/SilverBadge.svg";
import bronzeBadge from "../assets/icons/BronzeBadge.svg";
import favoritePostOff from "../assets/icons/favoritePost_off.svg";
import favoritePostOn from "../assets/icons/favoritePost_on.svg"; // 찜 활성화 아이콘
import detailBtn from "../assets/icons/ExploreProject_detailBtn.svg";

const ProjectCard = ({
  title,
  nickname,
  user_id,
  average_response_time,
  match_count,
  freelancer_badge,
  status,
  pretest_score,
  projectImage,
}) => {
  const [isFavorited, setIsFavorited] = useState(false); // 찜 상태 관리

  // 보여줄 최대 이미지 개수 설정
  const maxImages = 3;

  // 전달된 이미지가 maxImages보다 적으면 noneProjectImg로 부족한 부분을 채우기
  const displayedImages = [
    ...projectImage.slice(0, maxImages), // 전달된 이미지 최대 3개까지 자르기
    ...Array(maxImages - projectImage.length).fill(noneProjectImg), // 부족한 부분을 noneProjectImg로 채우기
  ];

  // 찜하기 버튼 클릭 핸들러
  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited); // 상태를 토글 (찜/찜 해제)
  };

  return (
    <div className="project-card">
      {/* 프로젝트 제목 */}
      <h2 className="project-card-title">{title}</h2>

      <div className="project-card-header">
        {/* 평균 응답 시간과 매칭 경험 */}
        <div className="user-info-container">
          <img src={sampleProfile} alt="프로필 이미지" className="user-img" />
          <div className="user-info">
            <div className="user-details">
              <p className="nickname">{nickname}</p>
              <p className="user-id">@{user_id}</p>
            </div>
            <div className="user-work">
              <p className="average-response-time">
                평균 응답시간 {average_response_time}분
              </p>
              <p className="match-count">매칭 경험 {match_count}회</p>
            </div>
          </div>
        </div>

        <div className="project-card-buttons">
          {/* 찜하기 버튼 */}
          <img
            src={isFavorited ? favoritePostOn : favoritePostOff} // 상태에 따라 아이콘 변경
            alt={isFavorited ? "찜 취소" : "찜하기"}
            onClick={handleFavoriteToggle} // 클릭 이벤트 핸들러
            style={{ cursor: "pointer" }} // 클릭 가능한 버튼 스타일 추가
          />
          <img src={detailBtn} alt="자세히 보기" />
        </div>
      </div>

      {/* 프리랜서 배지 및 사전 테스트 점수 */}
      <div className="project-card-tags">
        {freelancer_badge && (
          <span className="freelancer-badge">
            {freelancer_badge === "Gold" && (
              <img src={goldBadge} alt="Gold Badge" />
            )}
            {freelancer_badge === "Silver" && (
              <img src={silverBadge} alt="Silver Badge" />
            )}
            {freelancer_badge === "Bronze" && (
              <img src={bronzeBadge} alt="Bronze Badge" />
            )}
          </span>
        )}
        <span className="pretest-score">
          {pretest_score ? `pre-test ${pretest_score}점` : "사전 테스트 없음"}
        </span>
        {status && <span className="project-card-status">의뢰 받는 중</span>}
      </div>

      {/* 프로젝트 이미지 그리드 */}
      <div className="project-image-container">
        {displayedImages.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt="프로젝트 이미지"
            className="project-card-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
