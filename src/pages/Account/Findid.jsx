import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Findid.css'; // 스타일을 위한 CSS 파일
import logo_blackSVG from "../../assets/images/logo_black.svg"; // 경로에 맞게 조정하세요
import login_orangeSVG from "../../assets/images/login_orange.svg";
import mailSVG from "../../assets/images/mail.svg";

function Findid() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login'); // 로그인 페이지로 이동
    };

    return (
        <div className="findid-container">
            <div className="left-side">
                <p className="slogan">
                    나에게 꼭 맞는 <br />
                    디자이너를 이어주는
                </p>
                <img src={logo_blackSVG} alt="Itching Logo" className="logo-image" />
                <img src={login_orangeSVG} alt="Gradient Logo" className="logo-svg" />
            </div>

            <div className="right-side-email">
                <h2>이메일로 아이디를 보냈습니다!</h2>
                <img src={mailSVG} alt="mail" className="mail-image" />
                <p>받은 메일함을 확인해주세요. <br /> 메일이 없다면, 스팸메일함도 확인해주세요.</p>
                <button className="login-button" onClick={handleLogin}>
                    로그인하기
                </button>
            </div>
        </div>
    );
}

export default Findid;