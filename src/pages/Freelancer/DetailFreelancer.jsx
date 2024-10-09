// src/pages/Freelancer/DetailFreelancer.jsx

import React from "react";
import { useEffect } from "react";
import "./DetailFreelancer.css";

/* components */
import FreelancerProfile from "../../components/FreelancerProfile";
import FreelancerDetails from "../../components/FreelancerDetails";

/* 샘플 데이터 */
import samplerProfileImg from "../../assets/images/image 30.png";

const DetailFreelancer = () => {
  const profileData = {
    profileImage: samplerProfileImg,
    name: "로고 그려주는 형님",
    userId: "drawingbro",
    responseTime: 90,
    matchCount: 7,
    rating: 4.4,
    weekendAvailable: true,
    badge: "gold",
    preTestScore: 80,
  };

  const detailsData = {
    matchCount: 7,
    field: "logo",
    responseTime: 90,
    averageProductionTime: 7.5,
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  };

  useEffect(() => {
    // 페이지 진입 시 헤더의 배경색을 회색으로 변경
    const html = document.querySelector("html");
    html.style.backgroundColor = "#FBFAF9";

    return () => {
      // 페이지를 떠날 때 원래 헤더 배경색으로 복구
      html.style.backgroundColor = ""; // 빈 문자열로 원래 상태 복구
    };
  }, []);

  return (
    <div className="detail-freelancer-page">
      {/* 프로필 섹션 */}
      <section className="freelancer-profile-section">
        <FreelancerProfile {...profileData} />
        <button className="chat-button">채팅하기</button>
      </section>

      {/* 탭 섹션 */}
      <section className="freelancer-tabs">
        <button className="tab-button active">자기소개</button>
        <button className="tab-button">프로젝트</button>
        <button className="tab-button">포트폴리오</button>
        <button className="tab-button">리뷰</button>
      </section>

      {/* 프리랜서 정보 섹션 */}
      <section className="freelancer-details-section">
        <h2>프리랜서 정보</h2>
        <FreelancerDetails {...detailsData} />
      </section>

      {/* 프리랜서 자기소개 섹션 */}
      <section className="freelancer-introduction-section">
        <h2>프리랜서 자기소개</h2>
        <p>
          난 사람을 찾는 baby (baby) 내 맘은 설레이지 Eyyy, drop the question
          Drop the, drop the question Want attention Wanna want attention...
        </p>
      </section>

      {/* 의뢰하기 버튼 */}
      <section className="request-button-section">
        <button className="request-button">지금 바로 의뢰하기</button>
      </section>
    </div>
  );
};

export default DetailFreelancer;
