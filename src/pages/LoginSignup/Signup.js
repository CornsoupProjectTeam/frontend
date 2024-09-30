import React, { useState } from 'react';
import './Signup.css'; // 필요하다면 별도의 스타일 파일 사용

function Signup() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // 이메일 형식 검증
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setMessage('유효한 이메일을 입력하세요.');
            return;
        }

        // 이메일 전송 로직 (예시)
        console.log(`이메일 인증 링크를 ${email}로 보냈습니다.`);

        // 인증 성공 메시지
        setMessage('인증 링크가 이메일로 전송되었습니다.');
    };

    return (
        <div className="signup-container">
            <div className="left-side">
                <p className="slogan">
                    나에게 꼭 맞는 <br />
                    디자이너를 이어주는
                </p>
                <img src="logo_black.svg" alt="Itching Logo" className="logo-image" />
                <img src="gradient_logo.svg" alt="Gradient Logo" className="logo-svg" />
            </div>

            <div className="right-side">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <h2>회원가입</h2>

                    <div className="input-group">
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="웹멧을 입력하세요."
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        인증 링크 보내기
                    </button>

                    {/* 이메일 전송 성공 또는 오류 메시지 */}
                    {message && <p className="message">{message}</p>}
                </form>
            </div>
        </div>
    );
}

export default Signup;
