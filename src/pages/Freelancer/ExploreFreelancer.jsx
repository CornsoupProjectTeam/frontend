// src/pages/Freelancer/ExploreFreelancer.jsx

import React, { useState } from "react";
import "./ExploreFreelancer.css";

/* components */
import Pagination from "../../components/Pagination";
import FilterDropdown from "../../components/drop-down/SearchFilter";
import SortDropdown from "../../components/drop-down/Sort";
import FreelancerCard from "../../components/FreelancerCard"; // 프리랜서 카드 컴포넌트

/* assets */
import GoldBadge from "../../assets/icons/GoldWombat.svg";
import SilverBadge from "../../assets/icons/SilverWombat.svg";
import BronzeBadge from "../../assets/icons/BronzeWombat.svg";
import BlackBadge from "../../assets/icons/BlackWombat.svg";

/* 샘플 데이터 */
import sampleProfile from "../../assets/images/image 30.png"; // 샘플 프로필 이미지

const exampleFreelancers = [
  {
    id: 1,
    name: "로고 그려주는 형님",
    userId: "drawingbro",
    responseTime: 90,
    matchCount: 7,
    rating: 4.5,
    weekendAvailable: true,
    badge: "gold",
    preTestScore: 80,
    field: "logo",
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    profileImage: sampleProfile,
    averageProductionTime: 7.5,
  },
  {
    id: 2,
    name: "썸네일 디자이너",
    userId: "thumbnailmaster",
    responseTime: 120,
    matchCount: 5,
    rating: 4.3,
    weekendAvailable: false,
    badge: "silver",
    preTestScore: 85,
    field: "thumbnail",
    skills: ["Sketch", "Adobe XD", "Figma"],
    profileImage: sampleProfile,
    averageProductionTime: 5.5,
  },
  {
    id: 3,
    name: "브랜드 디자이너",
    userId: "brandpro",
    responseTime: 80,
    matchCount: 10,
    rating: 4.7,
    weekendAvailable: true,
    badge: "bronze",
    preTestScore: 90,
    field: "logo",
    skills: ["Figma", "InDesign", "CorelDRAW"],
    profileImage: sampleProfile,
    averageProductionTime: 6.7,
  },
  {
    id: 4,
    name: "로고 그려주는 언니",
    userId: "drawingsis",
    responseTime: 90,
    matchCount: 7,
    rating: 4.5,
    weekendAvailable: true,
    badge: "gold",
    preTestScore: 80,
    field: "logo",
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    profileImage: sampleProfile,
    averageProductionTime: 7.5,
  },
  {
    id: 5,
    name: "로고 그려주는 언니",
    userId: "drawingsis",
    responseTime: 120,
    matchCount: 5,
    rating: 4.3,
    weekendAvailable: false,
    badge: "silver",
    preTestScore: 85,
    field: "thumbnail",
    skills: ["Sketch", "Adobe XD", "Figma"],
    profileImage: sampleProfile,
    averageProductionTime: 5.5,
  },
  {
    id: 6,
    name: "로고 그려주는 언니",
    userId: "drawingsis",
    responseTime: 80,
    matchCount: 10,
    rating: 4.7,
    weekendAvailable: true,
    badge: "bronze",
    preTestScore: 90,
    field: "logo",
    skills: ["Figma", "InDesign", "CorelDRAW"],
    profileImage: sampleProfile,
    averageProductionTime: 6.7,
  },
];

const ITEMS_PER_PAGE = 5;

const filterOptions = [
  {
    label: "희망 금액 단위",
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
    label: "전문 분야",
    options: [
      { label: "전체 분야" },
      { label: "로고", icon: null },
      { label: "썸네일", icon: null },
    ],
  },
  {
    label: "서비스 옵션",
    options: [
      { label: "전체 옵션" },
      { label: "주말 작업 가능", icon: null },
      { label: "주말 상담 가능", icon: null },
    ],
  },
  {
    label: "전문가 뱃지",
    options: [
      { label: "전체 등급", icon: BlackBadge },
      { label: "골드 등급 전문가", icon: GoldBadge },
      { label: "실버 등급 전문가", icon: SilverBadge },
      { label: "브론즈 등급 전문가", icon: BronzeBadge },
    ],
  },
];

const sortOptions = ["신규가입순", "평점순", "응답순", "추천순"];

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

        {/* 프리랜서 리스트 */}
        <div className="EF-freelancer-list">
          {currentFreelancers.map((freelancer) => (
            <FreelancerCard key={freelancer.id} {...freelancer} />
          ))}
        </div>
      </div>
      {/* 페이지네이션 */}
      <div className="EF-pagination-container">
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default ExploreFreelancer;
