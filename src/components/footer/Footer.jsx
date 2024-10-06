// src/components/footer/Footer.jsx

import React from "react";
import { useLocation } from "react-router-dom";

import "./Footer.css";

/* assets */
import symbollogo from "../../assets/images/Footer_Logo.svg";

const Footer = () => {
  // 현재 경로를 가져옴
  const location = useLocation();

  // 헤더를 숨길 경로 리스트 설정
  const hideHeaderPaths = ["/"];

  // 현재 경로가 숨겨야 하는 경로에 포함되어 있으면 null 반환
  if (hideHeaderPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-service">
          <h4>잇칭</h4>
          <ul>
            <li>
              <a href="/">잇칭 서비스 소개</a>
            </li>
          </ul>
        </div>
        <div className="footer-page">
          <h4>모든 기능</h4>
          <ul>
            <li>
              <a href="/main">메인화면</a>
            </li>
            <li>
              <a href="/explore-freelancer">프리랜서 찾기</a>
            </li>
            <li>
              <a href="/explore-client">클라이언트 찾기</a>
            </li>
          </ul>
        </div>
        <div className="footer-cs">
          <h4>고객센터</h4>
          <ul>
            <li>
              <a href="">자주 묻는 질문</a>
            </li>
            <li>
              <a href="">일대일 문의</a>
            </li>
          </ul>
        </div>
        <div className="footer-logo">
          <img src={symbollogo} alt="Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
