// src/components/Pagination.jsx

import React from "react";

const Pagination = ({ totalPages, currentPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page) => (
        <button key={page} className={page === currentPage ? "active" : ""}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
