// src/components/footer/Footer.jsx

import React from "react";

import "./Footer.css"; // 푸터 스타일을 포함한 CSS 파일 import

import symbollogo from "../../assets/images/symbol_orange.svg"; // 로고 이미지 import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-service">
          <h4>잇칭</h4>
          <ul>
            <li>잇칭 서비스 소개</li>
          </ul>
        </div>
        <div className="footer-page">
          <h4>모든 기능</h4>
          <ul>
            <li>메인화면</li>
            <li>프리랜서 찾기</li>
            <li>프로젝트 찾기</li>
            <li>클라이언트 찾기</li>
          </ul>
        </div>
        <div className="footer-cs">
          <h4>고객센터</h4>
          <ul>
            <li>자주 묻는 질문</li>
            <li>일대일 문의</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
