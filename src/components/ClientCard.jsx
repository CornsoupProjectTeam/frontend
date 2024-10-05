// src/components/ClientCard.jsx

import React, { useState } from "react";

import "./ClientCard.css";

/* assets */
import favoritePostOff from "../assets/icons/favoritePost_off.svg";
import favoritePostOn from "../assets/icons/favoritePost_on.svg";
import detailBtn from "../assets/icons/ExploreProject_detailBtn.svg";

const ClientCard = ({
  title,
  userId,
  nickname,
  daysLeft,
  budget,
  profileImage,
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  // 찜하기 버튼 클릭 핸들러
  const handleFavoriteToggle = () => {
    setIsFavorited(!isFavorited); // 상태를 토글 (찜/찜 해제)
  };

  return (
    <div className="client-card">
      {/* 클라이언트 카드의 메인 콘텐츠 */}
      <h2 className="client-card-title">{title}</h2>
      <div className="client-card-content">
        <div className="client-card-header">
          <div className="user-info-container">
            <img src={profileImage} alt="프로필 이미지" className="user-img" />
            <div className="user-info">
              <div className="user-details">
                <p className="nickname">{nickname}</p>
                <p className="user-id">@{userId}</p>
              </div>
            </div>
          </div>
          <div className="client-card-buttons">
            {/* 찜하기 버튼 */}
            <img
              src={isFavorited ? favoritePostOn : favoritePostOff} // 상태에 따라 아이콘 변경
              alt={isFavorited ? "찜 취소" : "찜하기"}
              onClick={handleFavoriteToggle} // 클릭 이벤트 핸들러
              style={{ cursor: "pointer" }} // 클릭 가능한 버튼 스타일 추가
            />
            <a href="/explore-client/details">
              <img src={detailBtn} alt="자세히 보기" />
            </a>
          </div>
        </div>
        {/* 기간 및 예산 정보 */}
        <div className="client-card-tags">
          <span className="client-days-left">{daysLeft}</span>
          <span className="client-budget">{budget}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
