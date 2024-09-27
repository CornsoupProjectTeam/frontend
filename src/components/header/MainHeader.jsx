// src/components/header/MainHeader.jsx
import React from "react";

import "./MainHeader.css";

/* assets */
import newLogo from "../../assets/images/logo.svg";
import MagnifyingGlass from "../../assets/icons/MainHeader_MagnifyingGlass.svg";
import Menu from "../../assets/icons/MainHeader_Menu.svg";
import Chat from "../../assets/icons/MainHeader_Chat.svg";

/* components */
import LanguageSelector from "../drop-down/LanguageSelector";

const MainHeader = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <img src={newLogo} alt="Logo" />
      </div>
      <div className="header-search">
        <div className="language-selector">
          <LanguageSelector />
        </div>
        <div className="search-bar">
          <img src={MagnifyingGlass} alt="Search" className="search-icon" />
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
