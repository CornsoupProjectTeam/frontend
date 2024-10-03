/* src/pages/Project/ExploreProject.jsx */

import React, { useState } from "react";

import "./ExploreProject.css";

import ProjectCard from "../../components/ProjectCard";
import FilterBar from "../../components/FilterBar";
import Pagination from "../../components/Pagination";

import SearchFilter from "../../assets/icons/SearchFilter.svg";
import Sort from "../../assets/icons/SortDescendin.svg";
import CaretDown from "../../assets/icons/CaretDown.svg";
import CaretUp from "../../assets/icons/CaretUp.svg";

const exampleProjectsData = [
  {
    id: 1,
    title: "로고 디자인 프로젝트",
    nickname: "디자이너A",
    user_id: "designerA_01",
    average_response_time: 15,
    match_count: 10,
    freelancer_badge: "Top Designer",
    status: "모집 중",
    pretest_score: 85,
    projectImage: "https://via.placeholder.com/200",
    tags: ["디자인", "로고", "브랜딩"],
  },
  {
    id: 2,
    title: "포스터 제작 프로젝트",
    nickname: "디자이너B",
    user_id: "designerB_02",
    average_response_time: 10,
    match_count: 20,
    freelancer_badge: "Experienced",
    status: "모집 완료",
    pretest_score: 90,
    projectImage: "https://via.placeholder.com/200",
    tags: ["디자인", "포스터"],
  },
  {
    id: 3,
    title: "앱 UX/UI 디자인 프로젝트",
    nickname: "디자이너C",
    user_id: "designerC_03",
    average_response_time: 8,
    match_count: 15,
    freelancer_badge: "Certified UX Designer",
    status: "모집 중",
    pretest_score: 95,
    projectImage: "https://via.placeholder.com/200",
    tags: ["UX/UI", "앱 디자인", "모바일"],
  },
];

const ExploreProject = () => {
  const [projectsData, setProjectsData] = useState(exampleProjectsData); // 예시 데이터를 초기값으로 설정
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortCriteria, setSortCriteria] = useState("최신순");
  const [isSortOpen, setIsSortOpen] = useState(false);

  /*
  // 실제 API로 프로젝트 데이터를 가져오는 useEffect 주석처리
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.example.com/projects"); // 실제 API 엔드포인트로 변경
        const data = await response.json();
        setProjectsData(data); // 데이터를 상태에 저장
        setLoading(false); // 로딩 완료
      } catch (err) {
        console.error(err);
        setError("데이터를 불러오는 중 오류가 발생했습니다."); // 오류 발생 시 처리
        setLoading(false);
      }
    };

    fetchProjects(); // 컴포넌트가 마운트될 때 API 호출
  }, []); // 빈 배열로 한 번만 호출되게 설정
*/

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
          <button className="filter-dropdown" onClick={toggleFilterBar}>
            <img src={SearchFilter} alt="검색 필터" />
            <p>검색 필터</p>
            <img
              id="Caret"
              src={isFilterOpen ? CaretUp : CaretDown} // isFilterOpen에 따라 이미지 변경
              alt="Caret"
            />
          </button>
          {isFilterOpen && (
            <div className="filter-bar-container">
              <FilterBar closeFilter={toggleFilterBar} />
            </div>
          )}

          {/* 정렬 드롭다운 */}
          <div className="sort-dropdown" onClick={toggleSortDropdown}>
            <img src={Sort} alt="정렬" />
            <span>{sortCriteria}</span>
            <img
              id="Caret"
              src={isSortOpen ? CaretUp : CaretDown} // isSortOpen에 따라 이미지 변경
              alt="Caret"
            />
            {isSortOpen && (
              <ul className="sort-options">
                <li onClick={() => handleSortChange("최신순")}>최신순</li>
                <li onClick={() => handleSortChange("인기순")}>인기순</li>
                <li onClick={() => handleSortChange("평점순")}>평점순</li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* 사이드바와 프로젝트 리스트 */}
      <div className="main-content">
        {/* 사이드바 */}
        <aside className="sidebar">
          <div className="category">
            <h3>디자인</h3>
            <ul>
              <li>썸네일</li>
              <li>로고</li>
            </ul>
          </div>
        </aside>

        {/* 프로젝트 리스트 */}
        <div className="project-lists">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              user={project.user}
              date={project.date}
              tags={project.tags}
              status={project.status}
              projectImage={project.projectImage}
            />
          ))}
        </div>
      </div>
      <div className="pagination-container">
        {/* 페이지네이션 */}
        <Pagination currentPage={1} totalPages={5} />
      </div>
    </div>
  );
};

export default ExploreProject;
