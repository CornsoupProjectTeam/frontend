// src/pages/Project/ExploreProject.jsx

import React, { useState } from "react";

import "./ExploreProject.css";

/* components */
import ProjectCard from "../../components/ProjectCard";
import SearchFilter from "../../components/drop-down/SearchFilter";
import Pagination from "../../components/Pagination";
import Sort from "../../components/drop-down/Sort";

/* sample assets */
import sampleProjectImg from "../../assets/images/image 36.png";

const exampleProjectsData = [
  {
    id: 1,
    title: "로고 디자인 프로젝트",
    nickname: "디자이너A",
    user_id: "designerA_01",
    average_response_time: 15,
    match_count: 10,
    freelancer_badge: "Gold",
    status: false,
    pretest_score: 85,
    projectImage: [sampleProjectImg, sampleProjectImg],
  },
  {
    id: 2,
    title: "포스터 제작 프로젝트",
    nickname: "디자이너B",
    user_id: "designerB_02",
    average_response_time: 10,
    match_count: 20,
    freelancer_badge: "Silver",
    status: true,
    pretest_score: 90,
    projectImage: [sampleProjectImg, sampleProjectImg, sampleProjectImg],
  },
  {
    id: 3,
    title: "앱 UX/UI 디자인 프로젝트",
    nickname: "디자이너C",
    user_id: "designerC_03",
    average_response_time: 8,
    match_count: 15,
    freelancer_badge: "Bronze",
    status: true,
    pretest_score: 95,
    projectImage: [],
  },
  {
    id: 4,
    title: "로고 디자인 프로젝트",
    nickname: "디자이너D",
    user_id: "designerA_01",
    average_response_time: 15,
    match_count: 10,
    freelancer_badge: "Gold",
    status: false,
    pretest_score: 85,
    projectImage: [sampleProjectImg, sampleProjectImg],
  },
  {
    id: 5,
    title: "포스터 제작 프로젝트",
    nickname: "디자이너E",
    user_id: "designerB_02",
    average_response_time: 10,
    match_count: 20,
    freelancer_badge: "Silver",
    status: true,
    pretest_score: 90,
    projectImage: [sampleProjectImg, sampleProjectImg, sampleProjectImg],
  },
  {
    id: 6,
    title: "앱 UX/UI 디자인 프로젝트",
    nickname: "디자이너F",
    user_id: "designerC_03",
    average_response_time: 8,
    match_count: 15,
    freelancer_badge: "Bronze",
    status: true,
    pretest_score: 95,
    projectImage: [sampleProjectImg],
  },
];

const ITEMS_PER_PAGE = 3;

const ExploreProject = () => {
  const [projectsData] = useState(exampleProjectsData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("최신순");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleFilterBar = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleSortChange = (option) => {
    setSortCriteria(option);
    setIsSortOpen(false);
    console.log(`Sort by: ${option}`);
  };

  const currentProjects = projectsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="explore-project-page">
      {/* 페이지 제목 및 등록 버튼 */}
      <div className="page-header">
        <div className="page-header-title">
          <h1>어떤 프로젝트를 찾으세요?</h1>
          <button className="register-project-button">프로젝트 등록하기</button>
        </div>

        {/* 필터 바 */}
        <div className="page-header-filter">
          <SearchFilter />
          <Sort sortCriteria={sortCriteria} onSortChange={handleSortChange} />
        </div>
      </div>

      <div className="main-content">
        {/* 사이드바 */}
        <aside className="sidebar">
          <div className="category">
            <h3>디자인</h3>
            <ul>
              <li
                className={selectedCategory === "썸네일" ? "active" : ""}
                onClick={() => handleCategoryClick("썸네일")}>
                썸네일
              </li>
              <li
                className={selectedCategory === "로고" ? "active" : ""}
                onClick={() => handleCategoryClick("로고")}>
                로고
              </li>
            </ul>
          </div>
        </aside>

        {/* 프로젝트 리스트 (현재 페이지에 해당하는 프로젝트만 렌더링) */}
        <div className="project-lists">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ExploreProject;
