// src/components/FreelancerDetails.jsx

import React from "react";

import "./FreelancerDetails.css";

import Category from "../assets/images/FD_category.svg";
import Response from "../assets/images/FD_response.svg";
import Work from "../assets/images/FD_work.svg";

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
          <img src={Category} alt="category" />
          <span className="FD-metric-value">
            {field === "logo" ? "로고 디자인" : "썸네일 디자인"}
          </span>
        </div>
        <div className="FD-metric">
          <span className="FD-metric-label">평균 응답</span>
          <img src={Response} alt="response" />
          <span className="FD-metric-value">{responseTime}분</span>
        </div>
        <div className="FD-metric">
          <span className="FD-metric-label">제작 기간</span>
          <img src={Work} alt="work" />
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
