import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FreelancerRegister.css'; 
import SmallWombat from "../../assets/icons/SmallWombat.svg"; // 왼쪽 네비게이션 아이콘
import UserIcon from "../../assets/icons/User.svg";
import FreelancerIcon from "../../assets/icons/Logo_wb.svg";
import BlackSymbolIcon from "../../assets/icons/BlackSymbol.svg";
import ChecksIcon from "../../assets/icons/Checks.svg";
import NoteIcon from "../../assets/icons/Note.svg";
import BookmarkIcon from "../../assets/icons/Bookmark.svg";
import SignOutIcon from "../../assets/icons/SignOut.svg";
import OrangeRound from "../../assets/images/OrangeRound.svg"; // 기본 이미지
import ImagePlaceholder from "../../assets/images/ImagePlaceHolder.svg"; // 기본 이미지 (사진 추가하기)
import CameraIcon from "../../assets/icons/Camera.svg"; // 카메라 아이콘

function FreelancerRegister() { 
  const [profileImage, setProfileImage] = useState(null); // 이미지 상태 추가
  const [specialties, setSpecialties] = useState(["썸네일 전문", "로고 전문"]);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [educations, setEducations] = useState([]);
  const [newEducation, setNewEducation] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [selectedMenu, setSelectedMenu] = useState('account-info');
  const [isEditing, setIsEditing] = useState(false);

  // 변경 버튼을 누르면 수정 모드로 전환
  const handleEdit = () => {
    setIsEditing(true);
  };

  // 변경 완료 버튼을 누르면 수정된 값을 반영하고 수정 모드를 종료
  const handleSave = () => {
    setIsEditing(false);
    // 실제 서버에 변경사항을 저장하는 로직 추가
  };

  const handleCameraClick = () => {
    document.getElementById("freeregis-profile-upload").click(); // input 클릭 이벤트 발생
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl); // 업로드된 이미지를 설정
    }
  };

  // 전문 분야 클릭 처리
  const handleSpecialtyClick = (specialty) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(item => item !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };

  // 엔터로 스킬 추가
  const handleSkillKeyPress = (e) => {
    if (e.key === 'Enter' && newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  // 학력 추가
  const handleAddEducation = () => {
    if (newEducation) {
      setEducations([...educations, newEducation]);
      setNewEducation('');
      setShowPopup(false); // 팝업 닫기
    }
  };

  // 네비게이션 메뉴 클릭 시 페이지 이동 처리 함수
  const handleNavigation = (path, menu) => {
    setSelectedMenu(menu);
    navigate(path); // 경로로 이동
  };

  return (
    <div className="freeregis-info-container">
      {/* 좌측 네비게이션 */}
      <div className="freeregis-left-side">
        <div className="freeregis-info">
          {/* 사진 업로드 전이면 기본 이미지(OrangeRound) 표시 */}
          <img
            src={profileImage || OrangeRound}
            alt="Profile"
            className="freeregis-icon"
          />
          <p className="freeregis-role">Designer</p>
          <h3 className="freeregis-name">Ella Chrome Chrome</h3>
          <p className="freeregis-status">
            <img src={SmallWombat} alt="Small Wombat" />
          </p>
        </div>

        {/* 네비게이션 메뉴 */}
        <ul className="freeregis-menu">
          <hr className="freeregis-divider" />
          <li className="freeregis-menu-item"
              onClick={() => handleNavigation('/account-info')}>
            <img src={UserIcon} alt="User Icon" /> 계정 정보
          </li>

          <hr className="freeregis-divider" />

          <li className={`freeregis-menu-item ${selectedMenu === 'freelancer-register' ? 'selected' : ''}`}
              onClick={() => handleNavigation('/freelancer-register')}>
            <img src={FreelancerIcon} alt="Freelancer Icon" /> 프리랜서 등록
          </li>
          <li className="freeregis-menu-item"
              onClick={() => handleNavigation('/freelancer-info')}>
            <img src={BlackSymbolIcon} alt="Symbol Icon selected" /> 프리랜서 정보
          </li>
          <li className="freeregis-menu-item">
            <img src={ChecksIcon} alt="Checks Icon" /> 주문 관리
          </li>

          <hr className="freeregis-divider" />

          <li className="freeregis-menu-item"
              onClick={() => handleNavigation('/post-manag')}>
            <img src={NoteIcon} alt="Note Icon" /> 내 작성글
          </li>
          <li className="freeregis-menu-item"
              onClick={() => handleNavigation('/favorite-list')}>
            <img src={BookmarkIcon} alt="Bookmark Icon" /> 찜 목록
          </li>
        </ul>

        {/* 로그아웃 버튼 */}
        <button className="freeregis-logout-button">
          <img src={SignOutIcon} alt="Sign Out Icon" /> 로그아웃
        </button>
      </div>

      {/* 오른쪽 프리랜서 등록 폼 */}
      <div className="freeregis-right-side">
        <h2>프리랜서 등록</h2>

        {/* 자기소개 */}
        <div className="freeregis-image-upload">
          <label htmlFor="freeregis-profile-upload">
            {profileImage ? (
              <img className="freeregis-img" src={profileImage} alt="Profile" />
            ) : (
              <div className="freeregis-image-placeholder">
                <img src={ImagePlaceholder} alt="Image Placeholder" />
                <p>사진 추가하기</p>
              </div>
            )}
          </label>
          <input
            type="file"
            id="freeregis-profile-upload"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
          <button className="freeregis-camera-button" onClick={handleCameraClick}>
            <img src={CameraIcon} alt="Camera Icon" />
          </button>
        </div>

        <textarea
          placeholder="자신을 소개해주세요. 경력은 아래에 따로 적을 수 있어요."
          className="freeregis-textarea"
        />

        {/* 작업 정보 */}
        <h3>작업 정보</h3>
        <div className="freeregis-specialties">
          {specialties.map((specialty, index) => (
            <button
              key={index}
              className={`freeregis-specialty ${selectedSpecialties.includes(specialty) ? 'selected' : ''}`}
              onClick={() => handleSpecialtyClick(specialty)}
            >
              {specialty}
            </button>
          ))}
        </div>

        {/* 경력 정보 */}
        <h3>경력 정보</h3>
        <input
          type="text"
          placeholder="보유 기술을 입력하세요 (엔터로 구분)"
          className="freeregis-input"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={handleSkillKeyPress}
        />
        <div className="freeregis-skills">
          {skills.map((skill, index) => (
            <span key={index} className="freeregis-skill-tag">{skill}</span>
          ))}
        </div>

        {/* 학력 사항 */}
        <h3>학력 사항</h3>
        <div className="freeregis-education-tags">
          {educations.map((education, index) => (
            <span key={index} className="freeregis-education-tag">{education}</span>
          ))}
          <button className="freeregis-add-education-button" onClick={() => setShowPopup(true)}>+ 입력하세요</button>
        </div>

        {/* 학력 사항 추가 팝업 */}
        {showPopup && (
          <div className="freeregis-popup">
            <div className="freeregis-popup-content">
              <h3>학력 사항 추가</h3>
              <input
                type="text"
                value={newEducation}
                onChange={(e) => setNewEducation(e.target.value)}
                placeholder="학력을 입력하세요"
                className="freeregis-input"
              />
              <div className="freeregis-popup-buttons">
                <button className="freeregis-popup-close-button" onClick={() => setShowPopup(false)}>닫기</button>
                <button className="freeregis-popup-add-button" onClick={handleAddEducation}>추가하기</button>
              </div>
            </div>
          </div>
        )}

        {/* 포트폴리오 등록 */}
        <h3>포트폴리오 첨부</h3>
        <input
          type="text"
          placeholder="인스타그램 계정 링크"
          className="freeregis-input"
        />
        <div className="freeregis-portfolio-upload-box">
          <i className="freeregis-portfolio-upload-icon fas fa-folder-plus"></i>
          <img src={ImagePlaceholder} alt="Image Placeholder" />
          <span className="freeregis-portfolio-upload-text">업로드하기</span>
        </div>

        {/* 등록하기 버튼 */}
        <button className="freeregis-save-button">등록하기</button>
      </div>
    </div>
  );
}

export default FreelancerRegister;
