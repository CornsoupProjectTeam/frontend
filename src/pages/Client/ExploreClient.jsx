// src/pages/Client/ExploreClient.jsx

import React, { useState } from "react";
import "./ExploreClient.css";

/* components */
import Pagination from "../../components/Pagination";
import FilterDropdown from "../../components/drop-down/SearchFilter";
import SortDropdown from "../../components/drop-down/Sort";
import RegisterProject from "./RegisterClient";
import ClientCard from "../../components/ClientCard";

/* assets */
import goldBadge from "../../assets/icons/GoldWombat.svg";
import silverBadge from "../../assets/icons/SilverWombat.svg";
import bronzeBadge from "../../assets/icons/BronzeWombat.svg";

/* sample */
import sampleProfile from "../../assets/images/image 30.png";

const exampleClients = [
  {
    id: 1,
    title: "카페 로고 디자인 구합니다.",
    userId: "takemymoney",
    nickname: "못해디자인 모태클라이언트",
    daysLeft: "D-99일 남음",
    budget: "예상 100만원 이하",
    profileImage: sampleProfile,
  },
  {
    id: 2,
    title: "브랜드 패키지 디자인 구합니다.",
    userId: "takemyall",
    nickname: "모든 것을 클라이언트",
    daysLeft: "D-60일 남음",
    budget: "예상 200만원 이하",
    profileImage: sampleProfile,
  },
  {
    id: 3,
    title: "카페 로고 디자인 구합니다.",
    userId: "takemymoney",
    nickname: "못해디자인 모태클라이언트",
    daysLeft: "D-99일 남음",
    budget: "예상 100만원 이하",
    profileImage: sampleProfile,
  },
  {
    id: 4,
    title: "브랜드 패키지 디자인 구합니다.",
    userId: "takemyall",
    nickname: "모든 것을 클라이언트",
    daysLeft: "D-60일 남음",
    budget: "예상 200만원 이하",
    profileImage: sampleProfile,
  },
  {
    id: 5,
    title: "카페 로고 ",
    userId: "takemymoney",
    nickname: "못해디자인 모태클라이언트",
    daysLeft: "D-99일 남음",
    budget: "예상 100만원 이하",
    profileImage: sampleProfile,
  },
  {
    id: 6,
    title: "구합니다.",
    userId: "takemyall",
    nickname: "모든 것을 클라이언트",
    daysLeft: "D-60일 남음",
    budget: "예상 200만원 이하",
    profileImage: sampleProfile,
  },
  // ... 더 많은 샘플 클라이언트 데이터
];

const ITEMS_PER_PAGE = 5;

const priceFilterData = [
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

const filterOptions = [
  {
    label: "희망 예산 단위",
    options: [
      { label: "전체 금액", icon: null },
      { label: "100만원 이하", icon: null },
      { label: "70만원 이하", icon: null },
      { label: "50만원 이하", icon: null },
      { label: "30만원 이하", icon: null },
      { label: "10만원 이하", icon: null },
    ],
  },
  {
    label: "희망 제작 마감일",
    options: [
      { label: "골드 등급 전문가" },
      { label: "실버 등급 전문가" },
      { label: "브론즈 등급 전문가" },
    ],
  },
];
const sortOptions = ["최신순", "인기순", "추천순"];

const ClientExplore = () => {
  const [clientsData] = useState(exampleClients);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(clientsData.length / ITEMS_PER_PAGE);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortCriteria, setSortCriteria] = useState("최신순");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const currentClients = clientsData.slice(
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
    // 여기에서 필터 적용 로직을 구현할 수 있습니다.
  };

  return (
    <div className="client-explore-page">
      {/* 페이지 헤더 */}
      <div className="page-header">
        <div className="page-header-title">
          <h1>클라이언트 찾기</h1>
          <RegisterProject />
        </div>
        {/* 필터와 정렬 드롭다운 */}
        <div className="page-header-filter">
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

        {/* 클라이언트 리스트 */}
        <div className="client-list">
          {currentClients.map((client) => (
            <ClientCard key={client.id} {...client} />
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

export default ClientExplore;
