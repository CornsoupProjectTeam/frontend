// src/pages/Client/RegisterClient.jsx

import React, { useState } from "react";

import "./RegisterClient.css";

import Modal from "../../components/popup/Modal";
import ToggleSwitch from "../../components/button/ToggleSwitch";

const RegisterProject = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="register-project-page">
      {/* 의뢰글 등록 버튼 */}
      <button className="register-project-button" onClick={openModal}>
        의뢰글 등록하기
      </button>

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="register-project-modal-content">
          <h2>의뢰글 등록하기</h2>

          {/* 의뢰글 등록 폼 */}
          <form className="register-project-form">
            <section>
              <label>제목*</label>
              <input type="text" placeholder="의뢰 제목을 입력하세요" />
            </section>

            <section>
              <label>가격*</label>
              <input type="number" placeholder="가격을 입력하세요" />
            </section>

            {/* 추가 폼 필드 */}
            <section>
              <label>시안 추가 구매</label>
              <ToggleSwitch />
            </section>
            <section>
              <label>시안개수</label>
              <select>
                <option value="" hidden>
                  시안 개수를 선택하세요
                </option>
                <option value="1개">1개</option>
                <option value="2개">2개</option>
                <option value="3개">3개</option>
                <option value="4개">4개</option>
                <option value="5개">5개</option>
              </select>
            </section>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterProject;
