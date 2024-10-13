import React from 'react';
import './AccountFind.css'; // 스타일을 위한 CSS 파일
import logo_blackSVG from "../../assets/images/logo_black.svg"; // 경로에 맞게 조정하세요
import login_orangeSVG from "../../assets/images/login_orange.svg";
import { useNavigate } from 'react-router-dom';

function AccountFind() {
    return (
      <div className="login-container">
        {/* 좌측 로고 및 슬로건 */}
        <div className="left-side">
          <p className="slogan">
            나에게 꼭 맞는 <br />
            디자이너를 이어주는
          </p>
          <img src={logo_blackSVG} alt="Itching Logo" className="logo-image" />
          <img src={login_orangeSVG} alt="Gradient Logo" className="logo-svg" />
        </div>
  
        {/* 우측 아이디/비밀번호 찾기 폼 */}
        <div className="accountfind-side">
          <h2 className="find-heading">아이디/비밀번호 찾기</h2>
          <form className="find-form">
            <div className="find-input-group">
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" placeholder="이메일을 입력하세요." />
            </div>
  
            <div className="find-input-group">
              <label htmlFor="id">아이디</label>
              <input type="text" id="id" placeholder="아이디를 입력하세요." />
            </div>
  
            <button type="submit" className="login-button">
              비밀번호 재설정 이메일 보내기
            </button>
          </form>
        </div>
      </div>
    );
  }
  

export default AccountFind;
