// src/components/ProjectCard.jsx

import React from "react";
import "./ProjectCard.css"; // 스타일 파일

const ProjectCard = () => {
  return (
    <div className="project-card">
      <h2>프로젝트 제목이 여기에 들어갑니다.</h2>
      <p>프로젝트 금액: 1,000,000원</p>
      <p>평균 응답 시간: 90분</p>

      <div className="freelancer-info">
        <span className="badge gold">Gold 등급</span>
        <span>평점: 4.5</span>
      </div>

      <div className="weekend-options">
        <span>주말 상담 가능</span> | <span>주말 작업 가능</span>
      </div>
    </div>
  );
};

export default ProjectCard;
