// src/components/Pagination.jsx

import React from "react";

import "./Pagination.css";

import LeftBtn from "../../src/assets/icons/GreyLeftBtn.svg";
import RightBtn from "../../src/assets/icons/RightBtn.svg";

const Pagination = ({ totalPages, currentPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <img src={LeftBtn} alt="left" />
      {pages.map((page) => (
        <button
          id="pagination-btn"
          ey={page}
          className={page === currentPage ? "active" : ""}>
          {page}
        </button>
      ))}
      <img src={RightBtn} alt="right" />
    </div>
  );
};

export default Pagination;
