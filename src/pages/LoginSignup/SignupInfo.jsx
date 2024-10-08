import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SignupInfo.css'; // CSS 파일을 별도로 생성
import Select from 'react-select'; // react-select 패키지 사용
import logo_blackSVG from "../../assets/images/logo_black.svg"; // 경로에 맞게 조정하세요
import login_orangeSVG from "../../assets/images/login_orange.svg";
import logo_twoSVG from "../../assets/images/logo_two.svg"

function SignupInfo() {
    const location = useLocation();
    const email = location.state?.email || ''; // 이메일 인증 후 입력했던 이메일을 가져옴

    const [password, setPassword] = useState('');

    const [userid, setUserid] = useState(''); // 닉네임 유효성 상태// 아이디 유효성 상태
    const [isUseridValid, setIsUseridValid] = useState(null); // 닉네임 관련 메시지

    const [nickname, setNickname] = useState(''); // 닉네임 유효성 상태
    const [isNicknameValid, setIsNicknameValid] = useState(null);

    const [businessFields, setBusinessFields] = useState([]); // 비즈니스 분야 멀티 셀렉션
    const [interestFields, setInterestFields] = useState([]); // 관심 분야 멀티 셀렉션
    const [isAgreed, setIsAgreed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUseridChange = (event) => {
        setUserid(event.target.value);
        setIsUseridValid(null);
    };

    const handleNicknameChange = (event) => {
        setNickname(event.target.value);
        setIsNicknameValid(null);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleBusinessChange = (selectedOptions) => {
        setBusinessFields(selectedOptions);
    };

    const handleInterestChange = (selectedOptions) => {
        setInterestFields(selectedOptions);
    };

    const handleAgreementChange = () => {
        setIsAgreed(!isAgreed);
    };

    const checkUserid = async () => {
        // 중복 확인 로직 추가
        const response = await fetch(`/api/check-userid?userid=${userid}`);
        const data = await response.json();
        setIsUseridValid(data.isAvailable);
    };

    const checkNickname = async () => {
        // 닉네임 중복 확인 로직 추가
        const response = await fetch(`/api/check-nickname?nickname=${nickname}`);
        const data = await response.json();
        setIsNicknameValid(data.isAvailable);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 가입 완료 로직
        setIsModalOpen(true); // 모달 열기
    };

    const handleModalClose = () => {
        setIsModalOpen(false); // 모달 닫기
        // 추가적으로 페이지 이동이나 다른 로직 처리
    };


    // 비즈니스 분야 옵션
    const businessOptions = [
        { value: '요식업', label: '요식업' },
        { value: '마케팅, 광고', label: '마케팅, 광고' },
        { value: 'it 개발', label: 'it 개발' },
        { value: '병의원, 제약', label: '병의원, 제약' },
        { value: '미용, 뷰티', label: '미용, 뷰티' },
        { value: '학원, 교육', label: '학원, 교육' },
        { value: '여행, 숙박', label: '여행, 숙박' },
        { value: '식품, 음료', label: '식품, 음료' },
        { value: '패션, 잡화', label: '패션, 잡화' },
        { value: '쇼핑몰', label: '쇼핑몰' },
        { value: '제조업', label: '제조업' },
        { value: '공공기관', label: '공공기관' },
        { value: '영상, 디자인', label: '영상, 디자인' },
        { value: '예술, 스포츠, 여가', label: '예술, 스포츠, 여가' },
        { value: '금융, 보험', label: '금융, 보험' },
        { value: '부동산, 분양', label: '부동산, 분양' },
        { value: '세무, 법무, 노무', label: '세무, 법무, 노무' },
        { value: '청소, 인테리어', label: '청소, 인테리어' },
        { value: '운세, 상담', label: '운세, 상담' },
        { value: '기타', label: '기타' }
    ];

    // 관심 분야 옵션
    const interestOptions = [
        { value: '썸네일 제작', label: '썸네일 제작' },
        { value: '로고 제작', label: '로고 제작' }
    ];

    return (
        <div className="signup-info-container">
            {/* 왼쪽 로고 및 슬로건 */}
            <div className="left-side">
                <p className="slogan">
                    나에게 꼭 맞는 <br />
                    디자이너를 이어주는
                </p>
                <img src={logo_blackSVG} alt="Itching Logo" className="logo-image" />
                <img src={login_orangeSVG} alt="Gradient Logo" className="logo-svg" />
            </div>

            {/* 오른쪽 회원가입 폼 */}
            <div className="signup-info-form">
                <h2>이것만 입력하면 회원가입 끝이에요!</h2>

                {/* 이메일 입력 (인증 후 이메일 불러옴) */}
                <div className="input-group">
                    <label htmlFor="email">이메일*</label>
                    <input type="email" id="email" value={email} readOnly />
                </div>

                {/* 비밀번호 입력 */}
                <div className="input-group">
                    <label htmlFor="password">비밀번호*</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="비밀번호를 입력하세요."
                        required
                    />
                </div>

                {/* 아이디 입력 및 중복 확인 */}
                <div className="input-group">
                    <label htmlFor="userid">아이디*</label>
                    <div className="input-with-check">
                        <input
                            type="text"
                            id="userid"
                            value={userid}
                            onChange={handleUseridChange}
                            placeholder="아이디를 입력하세요."
                            required
                            className={`input-field ${isUseridValid === false ? 'error' : ''}`}
                        />
                        <button type="button" className="check-button" onClick={checkUserid}>
                            중복 확인
                        </button>
                    </div>
                    {isUseridValid === true && <p className="valid-message">사용 가능한 아이디입니다.</p>}
                    {isUseridValid === false && <p className="error-message">이미 사용 중인 아이디입니다.</p>}
                </div>

                {/* 닉네임 입력 및 중복 확인 */}
                <div className="input-group">
                    <label htmlFor="nickname">닉네임</label>
                    <div className="input-with-check">
                        <input
                            type="text"
                            id="nickname"
                            value={nickname}
                            onChange={handleNicknameChange}
                            placeholder="닉네임을 입력하세요."
                            className={`input-field ${isNicknameValid === false ? 'error' : ''}`}
                        />
                        <button type="button" className="check-button" onClick={checkNickname}>
                            중복 확인
                        </button>
                    </div>
                    {isNicknameValid === true && <p className="valid-message">사용 가능한 닉네임입니다.</p>}
                    {isNicknameValid === false && <p className="error-message">이미 사용 중인 닉네임입니다.</p>}
                </div>

                {/* 비즈니스 분야 멀티 셀렉트 */}
                <div className="input-group">
                    <label htmlFor="businessField">비즈니스 분야*</label>
                    <Select
                        isMulti
                        options={businessOptions}
                        value={businessFields}
                        onChange={handleBusinessChange}
                        placeholder="비즈니스 분야를 선택하세요"
                        className="multi-select"
                    />
                </div>

                {/* 관심 분야 멀티 셀렉트 */}
                <div className="input-group">
                    <label htmlFor="interestField">관심 분야*</label>
                    <Select
                        isMulti
                        options={interestOptions}
                        value={interestFields}
                        onChange={handleInterestChange}
                        placeholder="관심 분야를 선택하세요"
                        className="multi-select"
                    />
                </div>

                {/* 개인정보 수집/이용 안내 */}
                <div className="agreement-section">
                    <p>
                        개인정보 수집/이용 안내 <a href="#privacy">자세히 보기</a>
                    </p>
                    <label className="custom-checkbox-label">
                        <input type="checkbox" id= "agreement" checked={isAgreed} onChange={handleAgreementChange} />
                        <span className="custom-checkbox"></span> {/* 커스텀 체크박스 */}
                        동의합니다.
                    </label>

                    {/* 가입 완료 버튼 */}
                    <button type="submit" className="submit-button" onClick={handleSubmit}>
                    가입 완료하기
                    </button>
                </div>
            </div>

            {/* 회원가입 완료 모달 */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>회원가입이 완료되었습니다!</h2>
                        <img src={logo_twoSVG} alt="축하 이미지" className="modal-image" />
                        <p>이제, 잇칭에서 꼭 맞는 디자이너를 찾아보세요!</p>
                        <button onClick={handleModalClose} className="modal-button">
                            시작하기
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default SignupInfo;
