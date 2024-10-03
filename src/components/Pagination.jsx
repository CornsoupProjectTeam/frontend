// src/components/Pagination.jsx

import React from "react";

import "./Pagination.css";

/* assets */
import offLeftBtn from "../../src/assets/icons/offLeftBtn.svg";
import onLeftBtn from "../../src/assets/icons/LeftBtn.svg";
import offRightBtn from "../../src/assets/icons/offRightBtn.svg";
import onRightBtn from "../../src/assets/icons/RightBtn.svg";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <img
        src={currentPage === 1 ? offLeftBtn : onLeftBtn}
        alt="left"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      />
      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <img
        src={currentPage === totalPages ? offRightBtn : onRightBtn}
        alt="right"
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
      />
    </div>
  );
};

export default Pagination;
