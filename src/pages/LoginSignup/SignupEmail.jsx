import React from 'react';
import './SignupEmail.css'; // 스타일을 별도 파일로 관리


// 이메일 인증 완료 페이지 컴포넌트
function SignupEmail() {
  const handleResendEmail = () => {
    // 이메일 다시 보내기 처리
    console.log('인증 이메일을 다시 보냈습니다.');
  };

  return (
    <div className="signup-email-container">
      <div className="left-side">
        <p className="slogan">
          나에게 꼭 맞는 <br />
          디자이너를 이어주는
        </p>
        <img src="logo_black.svg" alt="Itching Logo" className="logo-image" />
        <img src="LoginLogo_orange.svg" alt="Gradient Logo" className="logo-svg" />
      </div>

      <div className="right-side">
        <h2>회원가입을 이어서 해주세요!</h2>
        <p className="description">링크를 보냈습니다.<br />받은 메일함을 확인해주세요.<br />메일이 없다면, 스팸메일함도 확인해주세요.</p>
        <img src="email_image.svg" alt="Email Icon" className="email-image" />
        <button className="resend-button" onClick={handleResendEmail}>메일 다시 보내기</button>
      </div>
    </div>
  );
}

export default SignupEmail;
