// src/components/ClientCard.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ClientCard.css";

/* assets */
import favoriteOff from "../assets/icons/favoriteOff.svg";
import favoriteOn from "../assets/icons/favoriteOn.svg";
import detailBtn from "../assets/icons/EP_detailBtn.svg";

const ClientCard = ({
  id,
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
      <h2 className="CC-client-card-title">{title}</h2>
      <div className="CC-client-card-content">
        <div className="CC-client-card-header">
          <div className="CC-user-info-container">
            <img
              src={profileImage}
              alt="프로필 이미지"
              className="CC-user-img"
            />
            <div className="CC-user-info">
              <div className="CC-user-details">
                <p className="CC-nickname">{nickname}</p>
                <p className="CC-user-id">@{userId}</p>
              </div>
            </div>
          </div>
          <div className="CC-client-card-buttons">
            {/* 찜하기 버튼 */}
            <img
              src={isFavorited ? favoriteOn : favoriteOff} // 상태에 따라 아이콘 변경
              alt={isFavorited ? "찜 취소" : "찜하기"}
              onClick={handleFavoriteToggle} // 클릭 이벤트 핸들러
              style={{ cursor: "pointer" }} // 클릭 가능한 버튼 스타일 추가
            />
            <Link to={`/explore-client/details/${id}`}>
              {" "}
              {/* URL에 id 추가 */}
              <img src={detailBtn} alt="자세히 보기" />
            </Link>
          </div>
        </div>
        {/* 기간 및 예산 정보 */}
        <div className="CC-client-card-tags">
          <span className="CC-client-days-left">{daysLeft}</span>
          <span className="CC-client-budget">{budget}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
