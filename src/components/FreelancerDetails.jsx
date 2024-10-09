// src/components/FreelancerDetails.jsx

import React from "react";

import "./FreelancerDetails.css";

const FreelancerDetails = ({
  matchCount,
  field,
  responseTime,
  averageProductionTime,
  skills,
}) => {
  return (
    <div className="freelancer-details">
      <div className="FD-freelancer-metrics">
        <div className="FD-main_metric">
          <span className="FD-main_metric-label">매칭 횟수</span>
          <span className="FD-main_metric-value">{matchCount}번</span>
        </div>
        <div className="FD-metric">
          <span className="FD-metric-label">전문 분야</span>
          <span className="FD-metric-value">
            {field === "logo" ? "로고 디자인" : "썸네일 디자인"}
          </span>
        </div>
        <div className="FD-metric">
          <span className="FD-metric-label">평균 응답</span>
          <span className="FD-metric-value">{responseTime}분</span>
        </div>
        <div className="FD-metric">
          <span className="FD-metric-label">제작 기간</span>
          <span className="FD-metric-value">
            {averageProductionTime.toFixed(1)}일
          </span>
        </div>
      </div>

      <div className="FD-freelancer-skills-container">
        <div className="FD-skills-background">
          <h4>보유 기술</h4>
          <div className="FD-skill-list">
            {skills.map((skill, index) => (
              <span key={index} className="FD-skill-item">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDetails;
