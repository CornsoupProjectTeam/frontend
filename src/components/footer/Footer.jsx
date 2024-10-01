// src/components/footer/Footer.jsx

import React from "react";
import "./Footer.css";

/* assets */
import symbollogo from "../../assets/images/Footer_Logo.svg";

const Footer = () => {
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
              <a href="/freelancer">프리랜서 찾기</a>
            </li>
            <li>
              <a href="/projects">프로젝트 찾기</a>
            </li>
            <li>
              <a href="/client">클라이언트 찾기</a>
            </li>
          </ul>
        </div>
        <div className="footer-cs">
          <h4>고객센터</h4>
          <ul>
            <li>
              <a href="/faq">자주 묻는 질문</a>
            </li>
            <li>
              <a href="/contact">일대일 문의</a>
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
