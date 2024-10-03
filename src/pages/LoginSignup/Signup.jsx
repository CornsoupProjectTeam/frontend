import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위해 사용
import './Signup.css';
import logo_blackSVG from "../../assets/images/logo_black.svg"; // 경로에 맞게 조정하세요
import login_orangeSVG from "../../assets/images/login_orange.svg";


function Signup() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // 이메일 형식 검증
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage('유효한 이메일을 입력하세요.');
            return;
        }

        // 이메일 검증 후 SignupEmail로 이동
        navigate('/signupemail', { state: { email } });
    };

    return (
        <div className="signup-container">
            <div className="left-side">
                <p className="slogan">
                    나에게 꼭 맞는 <br />
                    디자이너를 이어주는
                </p>
                
                <img src={logo_blackSVG} alt="Itching Logo" className="logo-image" />
                <img src={login_orangeSVG} alt="Gradient Logo" className="logo-svg" />
            </div>

            <div className="right-side-signup">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2>회원가입</h2>

                    <div className="input-group">
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="메일을 입력하세요."
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        인증 링크 보내기
                    </button>

                    {/* 오류 메시지 */}
                    {message && <p className="error-message">{message}</p>}
                </form>
            </div>
        </div>
    );
}

export default Signup;
