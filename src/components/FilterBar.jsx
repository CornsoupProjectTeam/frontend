// src/components/FilterBar.jsx

import React from "react";

const FilterBar = () => {
  return (
    <div className="filter-bar">
      <select>
        <option value="latest">최신 프로젝트</option>
        <option value="popular">인기 프로젝트</option>
      </select>
      <button>검색</button>
    </div>
  );
};

export default FilterBar;
