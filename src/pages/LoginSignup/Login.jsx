import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode';
import "./Login.css";
import logo_blackSVG from "../../assets/images/logo_black.svg"; // 경로에 맞게 조정하세요
import login_orangeSVG from "../../assets/images/login_orange.svg";

function LoginSignup() {
  const handleSuccess = (response) => {
    const decodedToken = jwtDecode(response.credential);
    console.log("Google 로그인 성공:", decodedToken);
  };

  const handleError = () => {
    console.log("Google 로그인 실패");
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <p className="slogan">
          나에게 꼭 맞는 <br />
          디자이너를 이어주는
        </p>
        <img src={logo_blackSVG} alt="Itching Logo" className="logo-image" />

        <img src={login_orangeSVG} alt="Gradient Logo" className="logo-svg" />
      </div>

      <div className="right-side">
        <h2 className="login-heading">로그인</h2> {/* New heading */}
        <form className="login-form">
          <div className="login-input-group">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" placeholder="이메일을 입력하세요." />
          </div>
          <div className="login-input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요."
            />
          </div>
          <button type="submit" className="login-button">
            로그인하기
          </button>
        </form>
        <a href="/" className="forgot-password">
          비밀번호를 잊었어요
        </a>
        <div className="google-button-wrapper">
          <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
        </div>
        <a href="/" className="signup-link">
          회원가입하기
        </a>
      </div>
    </div>
  );
}

export default LoginSignup;
