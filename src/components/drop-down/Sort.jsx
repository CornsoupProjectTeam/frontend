// src/components/drop-down/Sort.jsx

import React, { useState, useRef, useEffect } from "react";

import "./Sort.css";

/* assets */
import CaretUp from "../../assets/icons/CaretUp.svg";
import CaretDown from "../../assets/icons/CaretDown.svg";
import SortIcon from "../../assets/icons/SortDescendin.svg"; // 정렬 아이콘

const SortDropdown = ({ sortOptions, sortCriteria, onSortChange }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef(null);

  // 드롭다운 열고 닫기
  const toggleSortDropdown = () => {
    setIsSortOpen((prev) => !prev);
  };

  // 외부 클릭 감지
  const handleClickOutside = (event) => {
    if (sortRef.current && !sortRef.current.contains(event.target)) {
      setIsSortOpen(false); // 외부 클릭 시 드롭다운 닫기
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 정렬 옵션 선택 시 처리 (선택 후 드롭다운 닫기)
  const handleSortChange = (option) => {
    onSortChange(option);
    setIsSortOpen(false);
  };

  return (
    <div className="sort-dropdown-wrapper" ref={sortRef}>
      {/* 정렬 버튼 */}
      <button className="sort-dropdown" onClick={toggleSortDropdown}>
        <img src={SortIcon} alt="정렬" />
        <span className="selectSort">{sortCriteria}</span>
        <img id="Caret" src={isSortOpen ? CaretUp : CaretDown} alt="Caret" />
      </button>

      {/* 드롭다운 메뉴 */}
      {isSortOpen && (
        <ul className="sort-options">
          {sortOptions.map((option, index) => (
            <li
              key={index}
              className={sortCriteria === option ? "selected" : ""}
              onClick={() => handleSortChange(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;
