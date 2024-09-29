// src/components/FilterBar.jsx

import React from "react";
import "./FilterBar.css";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <h3>검색 필터</h3>
      <div className="filter-options">
        <button>가격대</button>
        <button>평가 등급</button>
        <button>상담 옵션</button>
        <button>주말 작업 가능</button>
      </div>
    </div>
  );
};

export default FilterBar;
