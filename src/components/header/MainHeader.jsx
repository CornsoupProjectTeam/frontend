// src/components/header/MainHeader.jsx
import React from "react";
import { Link } from "react-router-dom";

import "./MainHeader.css";

/* assets */
import newLogo from "../../assets/images/logo_black.svg";
import MagnifyingGlass from "../../assets/icons/MainHeader_MagnifyingGlass.svg";
import Menu from "../../assets/icons/MainHeader_Menu.svg";
import Chat from "../../assets/icons/MainHeader_Chat.svg";

/* components */
import LanguageSelector from "../drop-down/LanguageSelector";

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="logo">
        {/* 로고 클릭 시 /main으로 이동 */}
        <Link to="/main">
          <img src={newLogo} alt="Logo" />
        </Link>
      </div>
      <div className="header-search">
        <div className="language-selector">
          <LanguageSelector />
        </div>
        <div className="search-bar">
          {/* 검색 아이콘 클릭 시 동작 추가 */}
          <a href="/search">
            <img src={MagnifyingGlass} alt="Search" className="search-icon" />
          </a>
          <input
            type="text"
            placeholder="검색하세요"
            className="search-input"
          />
        </div>
        <div className="header-icons">
          <img src={Menu} alt="Menu" className="header-icon" />
          <img src={Chat} alt="Chat" className="header-icon" />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
