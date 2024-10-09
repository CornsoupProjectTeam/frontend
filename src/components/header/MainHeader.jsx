// src/components/header/MainHeader.jsx

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./MainHeader.css";

/* assets */
import newLogo from "../../assets/images/logo_black.svg";
import MagnifyingGlass from "../../assets/icons/MH_MagnifyingGlass.svg";
import Menu from "../../assets/icons/MH_Menu.svg";
import Chat from "../../assets/icons/MH_Chat.svg";
import Close from "../../assets/icons/MH_Close.svg";

/* components */
import LanguageSelector from "../drop-down/LanguageSelector";

const MainHeader = () => {
  /* 메뉴 상태 관리 */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /* 검색어 상태 관리 */
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const location = useLocation();

  // 헤더를 숨길 경로 리스트 설정 후 현재 경로가 숨겨야 하는 경로에 포함되어 있으면 null 반환
  const hideHeaderPaths = ["/"];

  if (hideHeaderPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <header className="main-header">
      {/* 로고 */}
      <div className="logo">
        <Link to="/main">
          <img src={newLogo} alt="Logo" />
        </Link>
      </div>
      <div className="header-search">
        <div className="language-selector">
          <LanguageSelector />
        </div>
        {/* 검색 */}
        <div className="search-bar">
          <button onClick={handleSearch} className="search-button">
            <img src={MagnifyingGlass} alt="Search" className="search-icon" />
          </button>
          <input
            type="text"
            placeholder="검색하세요"
            className="search-input"
            value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            // onKeyDown={handleKeyDown}
          />
        </div>
        <div className="header-icons">
          {/* 메뉴 아이콘 */}
          <img
            src={Menu}
            alt="Menu"
            className="header-icon"
            onClick={toggleMenu}
          />
          {/* 채팅 아이콘 */}
          <img src={Chat} alt="Chat" className="header-icon" />
        </div>
      </div>
      {/* 조건부로 메뉴 표시 */}
      {isMenuOpen && (
        <div className="overlay-menu">
          <div className="overlay-menu-header">
            <img src={newLogo} alt="Logo" className="overlay-logo" />
            <img
              src={Close}
              alt="Close"
              className="close-icon"
              onClick={toggleMenu}
            />
          </div>
          <nav className="overlay-menu-items">
            <ul>
              <li>
                <Link to="/main" onClick={toggleMenu}>
                  메인화면
                </Link>
              </li>
              <li>
                <Link to="/freelancer" onClick={toggleMenu}>
                  프리랜서 찾기
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={toggleMenu}>
                  프로젝트 찾기
                </Link>
              </li>
              <li>
                <Link to="/clients" onClick={toggleMenu}>
                  클라이언트 찾기
                </Link>
              </li>
            </ul>
          </nav>
          <div className="overlay-footer">
            <Link to="/login" onClick={toggleMenu}>
              로그인 / 회원가입
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
