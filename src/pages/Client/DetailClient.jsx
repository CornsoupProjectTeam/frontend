// src/pages/Client/DetailClient.jsx

import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import "./DetailClient.css";

/* assets */
import LeftBtn from "../../assets/icons/LeftBtn.svg";

/* sample profile image */
import sampleProfile from "../../assets/images/image 30.png";
import sampleProject from "../../assets/images/image 36.png";
import sampleProject2 from "./test.jpg";
import sampleProject3 from "./image.png";

const DetailClient = () => {
  const { client_post_id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const projectData = location.state?.projectData || {};

  const [clientData, setClientData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // 페이지 진입 시 헤더의 배경색을 회색으로 변경
    const html = document.querySelector("html");
    html.style.backgroundColor = "#FBFAF9";

    return () => {
      // 페이지를 떠날 때 원래 헤더 배경색으로 복구
      html.style.backgroundColor = ""; // 빈 문자열로 원래 상태 복구
    };
  }, []);

  useEffect(() => {
    if (projectData.id === client_post_id) {
      setClientData(projectData);
    } else {
      // 샘플 데이터를 설정합니다.
      const sampleProjectData = {
        id: client_post_id,
        title: "카페 로고 디자인 구합니다.",
        daysLeft: "D-99일 남음",
        budget: "예상 100만원 이하",
        budgetRange: [100, 200],
        deadline: new Date("2024-09-15"),
        projectEnd: new Date("2024-12-15"),
        tags: ["로고", "디자인", "카페"],
        images: [
          { url: sampleProject },
          { url: sampleProject2 },
          { url: sampleProject },
          { url: sampleProject },
          { url: sampleProfile },
          { url: sampleProject2 },
          { url: sampleProject3 },
        ],
        profileImage: sampleProfile,
        nickname: "모태클라이언트",
        userId: "takemymoney",
      };

      setClientData(sampleProjectData);
    }
  }, [client_post_id, projectData]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    document.body.classList.add("modal-open"); // 스크롤 방지
  };

  const closeImageView = () => {
    setSelectedImage(null);
    document.body.classList.remove("modal-open"); // 스크롤 재활성화
  };

  if (!clientData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="client-detail-page">
      <div className="client-detail-card">
        <div className="client-detail-header">
          <img src={LeftBtn} alt="뒤로가기" onClick={() => navigate(-1)} />
          <h1>{clientData.title}</h1>
        </div>
        <div className="client-detail-content">
          <div className="client-description">
            <div className="client-profile">
              <img src={clientData.profileImage} alt="프로필" />
              <div className="client-info">
                <h3>{clientData.nickname}</h3>
                <p>@{clientData.userId}</p>
              </div>
            </div>
            <div className="client-badges">
              <span className="client-days-left">{clientData.daysLeft}</span>
              <span className="client-budget">{clientData.budget}</span>
            </div>
            <div className="client-details-content">
              <form className="details-container">
                <h4>
                  희망 예산 : {clientData.budgetRange[0]}만원 ~{" "}
                  {clientData.budgetRange[1]}만원
                </h4>
              </form>
              <form className="details-container">
                <h4>모집 기간</h4>
                <form className="details-section">
                  <h4>의뢰 모집 마감일</h4>
                  <p className="date-display">
                    {clientData.deadline
                      ? clientData.deadline.toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "N/A"}
                  </p>
                </form>
              </form>
              <form className="details-container">
                <h4>제작 기간</h4>
                <form className="details-section">
                  <h4>희망 제작 마감일</h4>
                  <p className="date-display">
                    {clientData.projectEnd
                      ? clientData.projectEnd.toLocaleDateString("ko-KR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "N/A"}
                  </p>
                </form>
              </form>
              <form className="details-container">
                <h4>원하는 디자인 작업물</h4>
                <form className="details-section">
                  <h4>의뢰 요구사항</h4>
                  {clientData.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                  ))}
                </form>

                <form className="details-section">
                  <h4>프로젝트를 표현할 수 있는 이미지</h4>
                  {clientData.images.length > 0 ? (
                    <div className="image-list">
                      {clientData.images.map((image, index) => (
                        <img
                          key={index}
                          src={image.url}
                          alt={`Project Image ${index}`}
                          onClick={() => handleImageClick(image.url)} // 이미지 클릭 시 모달
                        />
                      ))}
                    </div>
                  ) : (
                    <p>등록된 이미지가 없습니다.</p>
                  )}
                </form>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="other-projects-section">
        <h2>다른 의뢰글 더 보기</h2>
        <div className="other-projects">
          <img src={sampleProject} alt="Sample Project" />
          <img src={sampleProject} alt="Sample Project" />
          <img src={sampleProject} alt="Sample Project" />
          <img src={sampleProject} alt="Sample Project" />
          <img src={sampleProject} alt="Sample Project" />
          <img src={sampleProject} alt="Sample Project" />
          <img src={sampleProject} alt="Sample Project" />
        </div>
      </div>
      {/* 이미지 확대 시 배경과 함께 보이기 */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeImageView}>
          <img
            src={selectedImage}
            alt="확대된 이미지"
            className="image-modal-content"
          />
        </div>
      )}
    </div>
  );
};

export default DetailClient;
