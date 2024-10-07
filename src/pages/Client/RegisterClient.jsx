// src/pages/Client/RegisterClient.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Range } from "react-range";

import "./RegisterClient.css";

/* components */
import CustomDatePicker from "../../components/form/CustomDatePicker";
import Modal from "../../components/popup/Modal";
import ImageUpload from "../../components/form/ImageUpload";
import TagInput from "../../components/form/TagInput";

const RegisterClient = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [values, setValues] = useState([10, 200]); // 예산 값
  const [title, setTitle] = useState(""); // 제목
  const [budgetRange, setBudgetRange] = useState([10, 200]);
  const [deadline, setDeadline] = useState(null); // 모집 마감일
  const [projectEnd, setProjectEnd] = useState(null); // 제작 마감일
  const [tags, setTags] = useState([]); // 태그
  const [images, setImages] = useState([]); // 이미지

  const navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.classList.remove("modal-open");
  };

  const handleSubmit = () => {
    const projectId = Math.floor(Math.random() * 1000); // 고유한 프로젝트 ID 생성 (데모용)
    // 폼 제출 시 데이터를 DetailClient로 보냄
    const projectData = {
      title,
      budgetRange,
      deadline,
      projectEnd,
      tags,
      images,
    };
    // 데이터를 DetailClient로 넘기기
    navigate("/explore-client/details/${projectId}", {
      state: { projectData },
    });
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
            <input
              type="text"
              placeholder="제목을 입력하세요..."
              value={title}
              onChange={(e) => setTitle(e.target.value)} // 제목 입력
            />
          </section>

          {/* 희망 예산 섹션 */}
          <section className="form-section">
            <label>
              희망 예산*: {budgetRange[0]}만원 ~ {budgetRange[1]}만원
            </label>
            <Range
              values={budgetRange}
              step={1}
              min={0}
              max={200}
              onChange={(values) => setBudgetRange(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "100%",
                    background: `linear-gradient(to right, 
                    #ddd 0%, 
                    #ddd ${(budgetRange[0] / 200) * 100}%, 
                    #f07a26 ${(budgetRange[0] / 200) * 100}%, 
                    #f07a26 ${(budgetRange[1] / 200) * 100}%, 
                    #ddd ${(budgetRange[1] / 200) * 100}%, 
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
            <CustomDatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
            />
          </section>

          {/* 제작 기간 */}
          <section className="form-section">
            <h3>제작 기간</h3>
            <label>희망 제작 마감일*</label>
            <CustomDatePicker
              selected={projectEnd}
              onChange={(date) => setProjectEnd(date)}
            />
          </section>

          {/* 디자인 작업물 */}
          <section className="form-section">
            <h3>원하는 디자인 작업물</h3>
            <label>의뢰 요구사항*</label>
            <TagInput tags={tags} setTags={setTags} />
            <label>프로젝트를 포함할 수 있는 이미지를 등록하세요.</label>
            <ImageUpload
              userId={userId}
              images={images}
              setImages={setImages}
            />
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

export default RegisterClient;
