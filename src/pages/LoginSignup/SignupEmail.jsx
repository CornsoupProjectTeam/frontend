import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SignupEmail.css';
import logo_blackSVG from "../../assets/images/logo_black.svg"; // 경로에 맞게 조정하세요
import login_orangeSVG from "../../assets/images/login_orange.svg";
import mailSVG from "../../assets/images/mail.svg";

function SignupEmail() {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email || '';

    const handleResend = () => {
        // 메일 다시 보내기 로직 (추가할 API 호출)
        console.log(`메일 다시 보내기: ${email}`);
    };

    return (
        <div className="signup-email-container">
            <div className="left-side">
                <p className="slogan">
                    나에게 꼭 맞는 <br />
                    디자이너를 이어주는
                </p>
                <img src={logo_blackSVG} alt="Itching Logo" className="logo-image" />
                <img src={login_orangeSVG} alt="Gradient Logo" className="logo-svg" />
            </div>

            <div className="right-side-email">
                <h2>회원가입을 이어서 해주세요!</h2>
                <img src={mailSVG} alt="mail" className="mail-image" />
                <p>링크를 보냈습니다. <br /> 받은 메일함을 확인해주세요. <br /> 메일이 없다면, 스팸메일함도 확인해주세요.</p>
                <button className="resend-button" onClick={handleResend}>
                    메일 다시 보내기
                </button>
            </div>
        </div>
    );
}

export default SignupEmail;
