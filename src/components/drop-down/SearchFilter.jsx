// src/components/drop-down/FilterDropdown.jsx

import React, { useState, useEffect, useRef } from "react";

import "./SearchFilter.css";

/* assets */
import CaretDown from "../../assets/icons/CaretDown.svg";
import CaretUp from "../../assets/icons/CaretUp.svg";
import FilterIcon from "../../assets/icons/SearchFilter.svg";

const FilterDropdown = ({ title, filters, filterIcon }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
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

  const handleOptionSelect = (optionLabel) => {
    setSelectedOptions(
      (prevSelected) =>
        prevSelected.includes(optionLabel)
          ? prevSelected.filter((option) => option !== optionLabel) // 이미 선택된 항목이면 제거
          : [...prevSelected, optionLabel] // 선택되지 않은 항목이면 추가
    );
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
          <div className="filter-column-wrapper">
            {filters.map((section, idx) => (
              <div className="filter-column" key={idx}>
                <h3>{section.label}</h3>
                <ul>
                  {section.options.map((option, i) => (
                    <li
                      key={i}
                      className={
                        selectedOptions.includes(option.label) ? "selected" : ""
                      }
                      onClick={() => handleOptionSelect(option.label)}>
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
          {/* 하단에 적용 버튼 추가 */}
          <div className="filter-apply-button-wrapper">
            <button className="filter-apply-button">적용</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
