// src/pages/Client/RegisterClient.jsx

import React, { useState } from "react";
import { Range } from "react-range";

import "./RegisterClient.css";

/* components */
import CustomDatePicker from "../../components/form/CustomDatePicker";
import Modal from "../../components/popup/Modal";
import ImageUpload from "../../components/form/ImageUpload";
import TagInput from "../../components/form/TagInput";

const RegisterProject = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState([10, 200]);

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const handleSubmit = () => {
    // 여기에 폼 제출 로직을 추가하세요.
    console.log("Form submitted");
    closeModal();
  };

  const userId = 123; // 샘플 사용자 ID

  return (
    <div className="register-project-page">
      <button className="register-project-button" onClick={openModal}>
        의뢰글 등록하기
      </button>

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="register-project-modal-content">
          <h2>의뢰글 등록하기</h2>

          {/* 필수 정보 섹션 */}
          <section className="form-section">
            <h3>기본 정보</h3>
            <label>제목*</label>
            <input type="text" placeholder="제목을 입력하세요..." />
          </section>

          <section className="form-section">
            <label>
              희망 예산*: {values[0]}만원 ~ {values[1]}만원
            </label>
            <Range
              values={values}
              step={1}
              min={0}
              max={200}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    background: `linear-gradient(to right, 
            #ddd 0%, 
            #ddd ${(values[0] / 200) * 100}%, 
            #f07a26 ${(values[0] / 200) * 100}%, 
            #f07a26 ${(values[1] / 200) * 100}%, 
            #ddd ${(values[1] / 200) * 100}%, 
            #ddd 100%)`, // 선택되지 않은 부분을 회색으로 처리
                    borderRadius: "4px",
                    margin: "20px 0",
                  }}>
                  {children}
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "24px",
                    width: "24px",
                    backgroundColor: isDragged ? "#f07a26" : "#fff",
                    border: "2px solid #f07a26",
                    borderRadius: "50%",
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
                  }}
                />
              )}
            />
          </section>

          {/* 모집 기간 */}
          <section className="form-section">
            <h3>모집 기간</h3>
            <label>의뢰 모집 마감일*</label>
            <CustomDatePicker />
          </section>

          {/* 제작 기간 */}
          <section className="form-section">
            <h3>제작 기간</h3>
            <label>희망 제작 마감일*</label>
            <CustomDatePicker />
          </section>

          {/* 디자인 작업물 */}
          <section className="form-section">
            <h3>원하는 디자인 작업물</h3>
            <label>의뢰 요구사항*</label>
            <TagInput />
            <label>프로젝트를 포함할 수 있는 이미지를 등록하세요.</label>
            <ImageUpload userId={userId} />
          </section>
          {/* 하단 등록 버튼 */}
          <section className="form-section">
            <button className="submit-button" onClick={handleSubmit}>
              등록하기
            </button>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterProject;
