import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FreelancerInfo.css';
import SmallWombat from "../../assets/icons/SmallWombat.svg"; // 왼쪽 네비게이션 아이콘
import UserIcon from "../../assets/icons/User.svg";
import FreelancerIcon from "../../assets/icons/Logo_wb.svg";
import BlackSymbolIcon from "../../assets/icons/BlackSymbol.svg";
import ChecksIcon from "../../assets/icons/Checks.svg";
import NoteIcon from "../../assets/icons/Note.svg";
import BookmarkIcon from "../../assets/icons/Bookmark.svg";
import SignOutIcon from "../../assets/icons/SignOut.svg";
import emptyview from "../../assets/images/emptyview.svg"; // Import empty view image
import OrangeRound from "../../assets/images/OrangeRound.svg"; // Import default profile image

function FreelancerInfo() {
  const [profileImage, setProfileImage] = useState(null); // 이미지 상태 추가
  const [isRegistered, setIsRegistered] = useState(false); // 프리랜서 등록 여부
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [selectedMenu, setSelectedMenu] = useState('account-info');

// 네비게이션 메뉴 클릭 시 페이지 이동 처리 함수
  const handleNavigation = (path, menu) => {
    setSelectedMenu(menu);
    navigate(path); // 경로로 이동
  };

  return (
    <div className="freeInfo-info-container">
      {/* 좌측 네비게이션 */}
      <div className="freeInfo-left-side">
        <div className="freeInfo-info">
          {/* 사진 업로드 전이면 기본 이미지(OrangeRound) 표시 */}
          <img
            src={profileImage || OrangeRound}
            alt="Profile"
            className="freeInfo-icon"
          />
          <p className="freeInfo-role">Designer</p>
          <h3 className="freeInfo-name">Ella Chrome Chrome</h3>
          <p className="freeInfo-status">
            <img src={SmallWombat} alt="Small Wombat" />
          </p>
        </div>

        {/* 네비게이션 메뉴 */}
        <ul className="freeInfo-menu">
          <hr className="freeInfo-divider" />
          <li className="freeInfo-menu-item"
          onClick={() => handleNavigation('/account-info')}>
            <img src={UserIcon} alt="User Icon" /> 계정 정보
          </li>

          <hr className="freeInfo-divider" />

          <li className="freeInfo-menu-item"
          onClick={() => handleNavigation('/freelancer-register')}>
            <img src={FreelancerIcon} alt="Freelancer Icon" /> 프리랜서 등록
          </li>
          <li className={`freeInfo-menu-item ${selectedMenu === 'freelancer-info' ? 'selected' : ''}`}
            onClick={() => handleNavigation('/freelancer-info', 'freelancer-info')}>
            <img src={BlackSymbolIcon} alt="Symbol Icon selected" /> 프리랜서 정보
          </li>
          <li className="freeInfo-menu-item">
            <img src={ChecksIcon} alt="Checks Icon" /> 주문 관리
          </li>

          <hr className="freeInfo-divider" />

          <li className="freeInfo-menu-item"
          onClick={() => handleNavigation('/post-manag')}>
            <img src={NoteIcon} alt="Note Icon" /> 내 작성글
          </li>
          <li className="freeInfo-menu-item"
          onClick={() => handleNavigation('/favorite-list')}>
            <img src={BookmarkIcon} alt="Bookmark Icon" /> 찜 목록
          </li>
        </ul>

        {/* 로그아웃 버튼 */}
        <button className="freeInfo-logout-button">
          <img src={SignOutIcon} alt="Sign Out Icon" /> 로그아웃
        </button>
      </div>

      {/* 프리랜서 정보 등록 여부에 따라 표시 */}
      <div className="freeInfo-right-side">
        <h2>프리랜서 정보</h2>
        {!isRegistered ? (
          <div className="freeInfo-empty-view">
            <img src={emptyview} alt="Empty View" className="freeInfo-empty-icon" />
            <p className="freeInfo-empty-text">등록된 정보가 없어요.</p>
            <p className="freeInfo-empty-subtext">잇칭 프리랜서로 활동하고 싶다면 등록하세요.</p>
            <button className="freeInfo-register-button">지금 등록하기</button>
          </div>
        ) : (
          <div> 
            {/* 
              등록 후 화면 코드는 여기 추가
            */}
          </div>
        )}

        {/* 프리랜서 리뷰 섹션 */}
        <div className="freeInfo-review-container">
          <h2>프리랜서 리뷰</h2>
          <img src={emptyview} alt="Empty Review" className="freeInfo-empty-icon" />
          <p className="freeInfo-review-empty-text">아직 리뷰가 없어요.</p>
        </div>
      </div>
    </div>
  );
}

export default FreelancerInfo;
