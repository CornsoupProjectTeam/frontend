// src/components/drop-down/SearchFilter.jsx

import React, { useState, useEffect, useRef } from "react";

import "./SearchFilter.css";

/* assets */
import SearchFilterIcon from "../../assets/icons/SearchFilter.svg";
import CaretUp from "../../assets/icons/CaretUp.svg";
import CaretDown from "../../assets/icons/CaretDown.svg";
import goldWombat from "../../assets/icons/GoldWombat.svg";
import silverWombat from "../../assets/icons/SilverWombat.svg";
import bronzeWombat from "../../assets/icons/BronzeWombat.svg";

const SearchFilter = () => {
  // 드롭다운 열림 상태 관리
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  // 드롭다운 토글 함수
  const toggleFilterBar = () => {
    setIsFilterOpen((prev) => !prev);
  };

  // 외부 클릭 감지 핸들러
  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setIsFilterOpen(false); // 외부 클릭 시 드롭다운 닫기
    }
  };

  useEffect(() => {
    // 외부 클릭 이벤트 추가
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-bar-wrapper" ref={filterRef}>
      {/* 필터 버튼 */}
      <button className="filter-dropdown" onClick={toggleFilterBar}>
        <img src={SearchFilterIcon} alt="검색 필터" />
        <p>검색 필터</p>
        <img id="Caret" src={isFilterOpen ? CaretUp : CaretDown} alt="Caret" />
      </button>

      {/* 드롭다운 메뉴 */}
      {isFilterOpen && (
        <div className="filter-dropdown-container">
          {/* 가격대 섹션 */}
          <div className="filter-column">
            <h3>가격대</h3>
            <ul>
              <li>000,000원 이하</li>
              <li>000,000원 이하</li>
              <li>000,000원 이하</li>
              <li>000,000원 이하</li>
              <li>000,000원 이하</li>
            </ul>
          </div>
          {/* 전문가 배지 섹션 */}
          <div className="filter-column">
            <h3>전문가 배지</h3>
            <ul>
              <div className="badge-column">
                <img src={goldWombat} alt="Gold Wombat" />
                <span>골드 등급 전문가</span>
              </div>
              <div className="badge-column">
                <img src={silverWombat} alt="Silver Wombat" />
                <span>실버 등급 전문가</span>
              </div>
              <div className="badge-column">
                <img src={bronzeWombat} alt="Bronze Wombat" />
                <span>브론즈 등급 전문가</span>
              </div>
            </ul>
          </div>
          {/* 서비스 옵션 섹션 */}
          <div className="filter-column">
            <h3>서비스 옵션</h3>
            <ul>
              <li>웜뱃이 무료</li>
              <li>웜뱃이 무료</li>
              <li>웜뱃이 무료</li>
              <li>웜뱃이 무료</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
