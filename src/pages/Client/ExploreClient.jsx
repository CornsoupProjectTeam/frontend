// src/pages/Client/ExploreClient.jsx

import React, { useState } from "react";
import "./ExploreClient.css";

import Pagination from "../../components/Pagination";
import FilterDropdown from "../../components/drop-down/SearchFilter";
import SortDropdown from "../../components/drop-down/Sort";
import RegisterProject from "./RegisterClient";

import goldBadge from "../../assets/icons/GoldWombat.svg";
import silverBadge from "../../assets/icons/SilverWombat.svg";
import bronzeBadge from "../../assets/icons/BronzeWombat.svg";

/* 샘플 이미지 */
import sampleProfile from "../../assets/images/image 30.png";

const exampleClients = [
  {
    id: 1,
    title: "카페 로고 디자인 구합니다.",
    clientName: "못해디자인 모태클라이언트",
    username: "takemymoney",
    daysLeft: "D-99일 남음",
    budget: "예상 100만원 이하",
  },
  {
    id: 2,
    title: "브랜드 패키지 디자인 구합니다.",
    clientName: "모든 것을 클라이언트",
    username: "takemyall",
    daysLeft: "D-60일 남음",
    budget: "예상 200만원 이하",
  },
  {
    id: 1,
    title: "카페 로고 디자인 구합니다.",
    clientName: "못해디자인 모태클라이언트",
    username: "takemymoney",
    daysLeft: "D-99일 남음",
    budget: "예상 100만원 이하",
  },
  {
    id: 2,
    title: "브랜드 패키지 디자인 구합니다.",
    clientName: "모든 것을 클라이언트",
    username: "takemyall",
    daysLeft: "D-60일 남음",
    budget: "예상 200만원 이하",
  },
  {
    id: 1,
    title: "카페 로고 디자인 구합니다.",
    clientName: "못해디자인 모태클라이언트",
    username: "takemymoney",
    daysLeft: "D-99일 남음",
    budget: "예상 100만원 이하",
  },
  {
    id: 2,
    title: "브랜드 패키지 디자인 구합니다.",
    clientName: "모든 것을 클라이언트",
    username: "takemyall",
    daysLeft: "D-60일 남음",
    budget: "예상 200만원 이하",
  },
  // ... 더 많은 샘플 클라이언트 데이터
];

const ITEMS_PER_PAGE = 3;

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

const expertBadgeData = [
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

const ClientExplore = () => {
  const [clientsData] = useState(exampleClients);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(clientsData.length / ITEMS_PER_PAGE);
  const [sortCriteria, setSortCriteria] = useState("최신순");
  const sortOptions = ["최신순", "인기순", "추천순"];

  const currentClients = clientsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (option) => {
    setSortCriteria(option);
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
          {/* 전문가 배지 필터 */}
          <FilterDropdown
            title="검색 필터"
            filters={expertBadgeData}
            filterIcon="/icons/SearchFilter.svg"
          />
          <SortDropdown
            sortOptions={sortOptions}
            sortCriteria={sortCriteria}
            onSortChange={handleSortChange}
          />
        </div>
      </div>

      {/* 클라이언트 리스트 */}
      <div className="client-list">
        {currentClients.map((client) => (
          <div key={client.id} className="client-card">
            <div className="client-card-content">
              <img
                src={sampleProfile}
                alt="클라이언트 프로필"
                className="client-profile-img"
              />
              <div className="client-info">
                <h3 className="client-title">{client.title}</h3>
                <p className="client-name">{client.clientName}</p>
                <p className="client-username">@{client.username}</p>
              </div>
            </div>

            <div className="client-card-footer">
              <span className="client-days-left">{client.daysLeft}</span>
              <span className="client-budget">{client.budget}</span>
            </div>

            <div className="client-actions">
              <button className="bookmark-btn">🔖</button>
              <button className="details-btn">자세히 보기</button>
            </div>
          </div>
        ))}
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
