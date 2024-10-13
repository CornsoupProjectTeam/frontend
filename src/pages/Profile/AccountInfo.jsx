import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountInfo.css';
import ImagePlaceholder from "../../assets/images/ImagePlaceHolder.svg"; // 기본 이미지 (사진 추가하기)
import CameraIcon from "../../assets/icons/Camera.svg"; // 카메라 아이콘
import SmallWombat from "../../assets/icons/SmallWombat.svg"; // 왼쪽 네비게이션 아이콘
import UserIcon from "../../assets/icons/User.svg";
import FreelancerIcon from "../../assets/icons/Logo_wb.svg";
import BlackSymbolIcon from "../../assets/icons/BlackSymbol.svg";
import ChecksIcon from "../../assets/icons/Checks.svg";
import NoteIcon from "../../assets/icons/Note.svg";
import BookmarkIcon from "../../assets/icons/Bookmark.svg";
import SignOutIcon from "../../assets/icons/SignOut.svg";
import Select from 'react-select'; // react-select 패키지 사용
import OrangeRound from "../../assets/images/OrangeRound.svg";

function AccountInfo() {
  // 상태 관리
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('오류를해결잘하는멋쟁이');
  const [businessField, setBusinessField] = useState([]); // 다중 선택을 위해 배열로 상태 관리
  const [interestField, setInterestField] = useState([]);
  const [email, setEmail] = useState('finnthehuman@gmail.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [selectedMenu, setSelectedMenu] = useState('account-info');

  // 이미지 상태 관리
  const [profileImage, setProfileImage] = useState(null);

  // 변경 버튼을 누르면 수정 모드로 전환
  const handleEdit = () => {
    setIsEditing(true);
  };

  // 변경 완료 버튼을 누르면 수정된 값을 반영하고 수정 모드를 종료
  const handleSave = () => {
    setIsEditing(false);
    // 실제 서버에 변경사항을 저장하는 로직 추가
  };

  // 네비게이션 메뉴 클릭 시 페이지 이동 처리 함수
  const handleNavigation = (path, menu) => {
    setSelectedMenu(menu);
    navigate(path); // 경로로 이동
  };

  const handleCameraClick = () => {
    document.getElementById("profile-upload").click(); // input 클릭 이벤트 발생
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl); // 업로드된 이미지를 설정
    }
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '380px',  // 컨트롤 너비 설정
    }),
    menu: (provided) => ({
      ...provided,
      width: '380px',  // 메뉴 너비 설정
    })
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
    { value: '예술, 스포츠', label: '예술, 스포츠' },
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
    <div className="account-info-container">
      {/* 좌측 네비게이션 */}
      <div className="account-left-side">
        <div className="account-info">
          {/* 사진 업로드 전이면 기본 이미지(OrangeRound) 표시 */}
          <img
            src={profileImage || OrangeRound}
            alt="Profile"
            className="account-icon"
          />
          <p className="account-role">Designer</p>
          <h3 className="account-name">Ella Chrome Chrome</h3>
          <p className="account-status">
            <img src={SmallWombat} alt="Small Wombat" />
          </p>
        </div>

        {/* 네비게이션 메뉴 */}
        <ul className="account-menu">
        <hr className="account-divider" />
          <li className={`account-menu-item ${selectedMenu === 'account-info' ? 'selected' : ''}`}
            onClick={() => handleNavigation('/account-info')}>
            <img src={UserIcon} alt="User Icon" /> 계정 정보
          </li>

          {/* 선 긋기 */}
        <hr className="account-divider" />

          <li className="account-menu-item"
            onClick={() => handleNavigation('/freelancer-register')}>
            <img src={FreelancerIcon} alt="Freelancer Icon" /> 프리랜서 등록
          </li>
          <li className="account-menu-item"
            onClick={() => handleNavigation('/freelancer-info')}>
            <img src={BlackSymbolIcon} alt="BlackSymbol Icon" /> 프리랜서 정보
          </li>
          <li className="account-menu-item">
            <img src={ChecksIcon} alt="Cheks Icon" /> 주문 관리
          </li>

          {/* 선 긋기 */}
        <hr className="account-divider" />

          <li className="account-menu-item"
            onClick={() => handleNavigation('/post-manag')}>
            <img src={NoteIcon} alt="Note Icon" /> 내 작성글
          </li>
          <li className="account-menu-item"
            onClick={() => handleNavigation('/favorite-list')}>
            <img src={BookmarkIcon} alt="Bookmark Icon" /> 찜 목록
          </li>
        </ul>

        {/* 로그아웃 버튼 */}
        <button className="account-logout-button">
          <img src={SignOutIcon} alt="Sign Out Icon" /> 로그아웃
        </button>
      </div>

      {/* 오른쪽 계정 정보 */}
      <div className="account-right-side">
        <h2>계정 정보</h2>
        <h3>기본 정보</h3>

        {/* 프로필 이미지 */}
        <div className="image-upload">
          <label htmlFor="profile-upload">
            {profileImage ? (
              <img className="account-img" src={profileImage} alt="Profile" />
            ) : (
              <div className="image-placeholder">
                <img src={ImagePlaceholder} alt="Image Placeholder" />
                <p>사진 추가하기</p>
              </div>
            )}
          </label>
          <input
            type="file"
            id="profile-upload"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            disabled={!isEditing}  // 수정 중일 때만 업로드 가능
          />
          {isEditing && (
            <button className="account-camera-button" onClick={handleCameraClick}>
              <img src={CameraIcon} alt="Camera Icon" />
            </button>
          )}
        </div>

        {/* 이메일 및 닉네임 */}
        <label>이메일</label>
        <input type="email" value={email} readOnly={!isEditing} />

        <label>닉네임</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          readOnly={!isEditing}
        />
        {isEditing && (
          <button className="duplicate-check-button">중복 확인</button>
        )}

        {/* 비즈니스 분야 */}
        <label>비즈니스 분야</label>
        <Select
          isMulti
          options={businessOptions}
          value={businessField}
          onChange={setBusinessField}
          isDisabled={!isEditing}
          styles={customStyles}
        />

        {/* 관심 분야 */}
        <label>관심 분야</label>
        <Select
          isMulti
          options={interestOptions}
          value={interestField}
          onChange={setInterestField}
          isDisabled={!isEditing}
          styles={customStyles}
        />

        {/* 비밀번호 변경 */}
        <h3>비밀번호 변경</h3>
        <label>현재 비밀번호</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          readOnly={!isEditing}
        />

        {isEditing && (
          <>
            <label>새 비밀번호</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <label>새 비밀번호 확인</label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </>
        )}

        {/* 버튼: 수정 or 저장 */}
        {isEditing ? (
          <button className="save-button" onClick={handleSave}>변경 완료하기</button>
        ) : (
          <button className="edit-button" onClick={handleEdit}>변경하기</button>
        )}
      </div>
    </div>
  );
}

export default AccountInfo;
