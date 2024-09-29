// src/pages/Project/ExploreProject.jsx

import React, { useState } from "react";

import "./ExploreProject.css";

import ProjectCard from "../../components/ProjectCard";
import FilterBar from "../../components/FilterBar";
import Pagination from "../../components/Pagination";

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

const ExploreProject = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("최신순");

  const toggleFilterBar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
    // 정렬 로직 추가: 필요에 따라 프로젝트 데이터를 정렬합니다.
  };

  return (
    <div className="explore-project-page">
      {/* 페이지 제목 및 등록 버튼 */}
      <div className="page-header">
        <h1>어떤 프로젝트를 찾으세요?</h1>
        <button className="register-project-button">프로젝트 등록하기</button>
      </div>

      {/* 사이드바와 프로젝트 리스트 */}
      <div className="main-content">
        {/* 사이드바 */}
        <aside className="sidebar">
          <h3>디자인</h3>
          <ul>
            <li>썸네일</li>
            <li>로고</li>
          </ul>
        </aside>

        <div className="content-area">
          {/* 필터 바 */}
          <div className="filter-bar-wrapper">
            <button className="filter-toggle-button" onClick={toggleFilterBar}>
              검색 필터
            </button>
            {isFilterOpen && (
              <div className="filter-bar-container">
                <FilterBar closeFilter={toggleFilterBar} />
              </div>
            )}

            {/* 정렬 기능 */}
            <select className="sort-dropdown" onChange={handleSortChange}>
              <option value="최신순">최신순</option>
              <option value="인기순">인기순</option>
              <option value="평점순">평점순</option>
            </select>
          </div>

          {/* 프로젝트 리스트 */}
          <div className="project-list">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id} // key prop
                title={project.title}
                user={project.user}
                date={project.date}
                tags={project.tags}
                status={project.status}
              />
            ))}
          </div>

          {/* 페이지네이션 */}
          <Pagination currentPage={1} totalPages={5} />
        </div>
      </div>
    </div>
  );
};

export default ExploreProject;
