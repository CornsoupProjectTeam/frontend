// src/components/drop-down/LanguageSelector.jsx

import React, { useState } from "react";

import "./LanguageSelector.css";

/* assets */
import CaretDown from "../../assets/icons/CaretDown.svg";
import CaretUp from "../../assets/icons/CaretUp.svg";
import Globe from "../../assets/icons/MainHeader_Globe.svg";

const LanguageSelector = () => {
  // 드롭다운 상태
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  // 선택된 언어 상태
  const [selectedLanguage, setSelectedLanguage] = useState("한국어");

  // 드롭다운 상태를 토글하는 함수
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // 언어 선택 함수
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false); // 언어 선택 후 드롭다운 닫기
  };

  return (
    <div className="language-selector">
      <button onClick={toggleDropdown} className="language-button">
        <img src={Globe} alt="Select Language" className="language-icon" />
        <img
          src={isDropdownOpen ? CaretUp : CaretDown}
          alt="Toggle Dropdown"
          className="arrow-icon"
        />
      </button>

      {/* 드롭다운 메뉴 표시 */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div
            className={`dropdown-item ${
              selectedLanguage === "한국어" ? "selected" : ""
            }`}
            onClick={() => selectLanguage("한국어")}>
            <span className="language-text">한국어</span>
            <span className="currency-symbol">₩</span>
          </div>
          <div
            className={`dropdown-item ${
              selectedLanguage === "English" ? "selected" : ""
            }`}
            onClick={() => selectLanguage("English")}>
            <span className="language-text">English</span>
            <span className="currency-symbol">$</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
