// src/components/ProjectCard.jsx

import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  nickname,
  user_id,
  average_response_time,
  match_count,
  freelancer_badge,
  status,
  pretest_score,
  projectImage,
  tags, // 태그 추가
}) => {
  return (
    <div className="project-card">
      {/* 프로젝트 제목 */}
      <h2 className="project-card-title">{title}</h2>

      <div className="project-card-header">
        {/* 프로필 이미지와 닉네임 */}
        <div className="user-info">
          <img
            src={`https://api.adorable.io/avatars/50/${nickname}.png`}
            alt="프로필 이미지"
            className="user-avatar"
          />
          <div className="user-details">
            <p className="nickname">{nickname}</p>
            <p className="user-id">@{user_id}</p>
          </div>
        </div>

        {/* 평균 응답 시간과 매칭 경험 */}
        <div className="user-stats">
          <p className="average-response-time">
            평균 응답시간 {average_response_time}분
          </p>
          <p className="match-count">매칭 경험 {match_count}회</p>
        </div>
      </div>

      {/* 프로젝트 이미지 */}
      {projectImage && (
        <img
          src={projectImage}
          alt="프로젝트 이미지"
          className="project-card-image"
        />
      )}

      {/* 태그 */}
      <div className="project-card-tags">
        {tags.map((tag) => (
          <span key={tag} className="project-card-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* 프리랜서 배지 및 사전 테스트 점수 */}
      <div className="project-card-badges">
        {freelancer_badge && (
          <span className="freelancer-badge">🛡️ {freelancer_badge}</span>
        )}
        {pretest_score && (
          <span className="pretest-score">pre-test {pretest_score}점대</span>
        )}
      </div>

      {/* 프로젝트 상태 */}
      <div
        className={`project-card-status ${
          status === "모집 중" ? "status-open" : "status-closed"
        }`}>
        {status}
      </div>

      {/* 자세히 보기 버튼 */}
      <button className="project-card-button">자세히 보기</button>
    </div>
  );
};

export default ProjectCard;
