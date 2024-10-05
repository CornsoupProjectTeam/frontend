// src/components/drop-down/FilterDropdown.jsx

import React, { useState, useEffect, useRef } from "react";
import "./SearchFilter.css";

import CaretDown from "../../assets/icons/CaretDown.svg";
import CaretUp from "../../assets/icons/CaretUp.svg";
import FilterIcon from "../../assets/icons/SearchFilter.svg";

const FilterDropdown = ({ title, filters, filterIcon }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  // 드롭다운 토글 함수
  const toggleFilterBar = () => {
    setIsFilterOpen((prev) => !prev);
  };

  // 외부 클릭 감지 핸들러
  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-bar-wrapper" ref={filterRef}>
      {/* 필터 버튼 */}
      <button className="filter-dropdown" onClick={toggleFilterBar}>
        {filterIcon && <img src={FilterIcon} alt={`${title} 아이콘`} />}
        <p>{title}</p>
        <img id="Caret" src={isFilterOpen ? CaretUp : CaretDown} alt="Caret" />
      </button>

      {/* 드롭다운 메뉴 */}
      {isFilterOpen && (
        <div className="filter-dropdown-container">
          {filters.map((section, idx) => (
            <div className="filter-column" key={idx}>
              <h3>{section.label}</h3>
              <ul>
                {section.options.map((option, i) => (
                  <li key={i}>
                    {option.icon && (
                      <img src={option.icon} alt={option.label} />
                    )}
                    <span>{option.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
