// src/pages/Project/ExploreProject.jsx

import React from "react";

import "./ExploreProject.css";

import ProjectCard from "../../components/ProjectCard";
import FilterBar from "../../components/FilterBar";
import Pagination from "../../components/Pagenation";

const projectsData = [
  {
    id: 1,
    title: "프로젝트 제목이 들어갑니다.",
    user: "디자이너 A",
    date: "5일 전",
    tags: ["디자인", "로고", "브랜딩"],
    status: "모집 중",
  },
  {
    id: 2,
    title: "프로젝트 제목이 들어갑니다.",
    user: "디자이너 B",
    date: "3일 전",
    tags: ["디자인", "포스터"],
    status: "모집 완료",
  },
  // 더 많은 프로젝트 데이터
];

const ExploreProjectPage = () => {
  return (
    <div className="explore-projects-page">
      <FilterBar />
      <h1>어떤 프로젝트를 찾으세요?</h1>
      <div className="projects-list">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Pagination totalPages={4} currentPage={1} />
    </div>
  );
};

export default ExploreProjectPage;
