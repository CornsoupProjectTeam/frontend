// src/pages/Freelancer/ExploreFreelancer.jsx

import React, { useState } from "react";
import "./ExploreFreelancer.css";

/* components */
import Pagination from "../../components/Pagination";
import FilterDropdown from "../../components/drop-down/SearchFilter";
import SortDropdown from "../../components/drop-down/Sort";
import FreelancerCard from "../../components/FreelancerCard"; // 프리랜서 카드 컴포넌트

/* 샘플 데이터 */
import sampleProfile from "../../assets/images/image 30.png"; // 샘플 프로필 이미지

const exampleFreelancers = [
  {
    id: 1,
    name: "로고 그려주는 형님",
    username: "drawingbro",
    rating: 4.5,
    reviewCount: 100,
    matchRate: 7,
    skillSet: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    profileImage: sampleProfile,
  },
  {
    id: 2,
    name: "로고 그려주는 형님",
    username: "drawingbro",
    rating: 4.4,
    reviewCount: 150,
    matchRate: 5,
    skillSet: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    profileImage: sampleProfile,
  },
  {
    id: 3,
    name: "로고 그려주는 형님",
    username: "drawingbro",
    rating: 4.4,
    reviewCount: 150,
    matchRate: 0,
    skillSet: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    profileImage: sampleProfile,
  },
  // 더 많은 샘플 데이터 추가 가능
];

const ITEMS_PER_PAGE = 5;

const filterOptions = [
  {
    label: "가격대",
    options: [
      { label: "전체 금액", icon: null },
      { label: "100만원 이하", icon: null },
      { label: "70만원 이하", icon: null },
      { label: "50만원 이하", icon: null },
    ],
  },
  {
    label: "기간",
    options: [
      { label: "6개월 이내", icon: null },
      { label: "12개월 이내", icon: null },
    ],
  },
];

const sortOptions = ["최신순", "인기순", "추천순"];

const ExploreFreelancer = () => {
  const [freelancersData] = useState(exampleFreelancers);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(freelancersData.length / ITEMS_PER_PAGE);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortCriteria, setSortCriteria] = useState("최신순");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const currentFreelancers = freelancersData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (option) => {
    setSortCriteria(option);
  };

  const handleApplyFilters = (selectedOptions) => {
    console.log("적용된 필터: ", selectedOptions);
    setSelectedFilters(selectedOptions);
    // 필터 적용 로직을 여기에 구현할 수 있습니다.
  };

  return (
    <div className="freelancer-explore-page">
      {/* 페이지 헤더 */}
      <div className="EF-page-header">
        <div className="EF-page-header-title">
          <h1>프리랜서 찾기</h1>
          {/* 여기에 프리랜서 등록 버튼 같은 컴포넌트 추가 가능 */}
          <button className="EF-register-button">프리랜서 등록</button>
        </div>
        {/* 필터와 정렬 드롭다운 */}
        <div className="EF-page-header-filter">
          {/* 필터 */}
          <FilterDropdown
            title="검색 필터"
            filters={filterOptions}
            filterIcon="/icons/SearchFilter.svg"
            onApply={handleApplyFilters}
          />
          <SortDropdown
            sortOptions={sortOptions}
            sortCriteria={sortCriteria}
            onSortChange={handleSortChange}
          />
        </div>
      </div>

      <div className="EF-main-content">
        {/* 사이드바 */}
        <aside className="EF-sidebar">
          <div className="EF-category">
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

        {/* 프리랜서 리스트 */}
        <div className="EF-freelancer-list">
          {currentFreelancers.map((freelancer) => (
            <FreelancerCard key={freelancer.id} {...freelancer} />
          ))}
        </div>
      </div>
      {/* 페이지네이션 */}
      <div className="EF-pagination-container">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ExploreFreelancer;
