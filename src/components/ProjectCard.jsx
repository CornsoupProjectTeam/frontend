// src/components/ProjectCard.jsx

import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <h2>{project.title}</h2>
        <p>작성자: {project.user}</p>
        <p>작성일: {project.date}</p>
        <div className="tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <p>상태: {project.status}</p>
      </div>
      <button className="view-details">자세히 보기</button>
    </div>
  );
};

export default ProjectCard;
