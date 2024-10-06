// src/components/popup/Modal.jsx

import React from "react";
import "./Modal.css";

/* assets */
import CloseIcon from "../../assets/icons/CircleClose.svg"; // 닫기 이미지 경로

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={CloseIcon}
          alt="닫기"
          className="close-button"
          onClick={onClose}
        />
        {children} {/* 모달 안에 들어갈 컨텐츠 */}
      </div>
    </div>
  );
};

export default Modal;
