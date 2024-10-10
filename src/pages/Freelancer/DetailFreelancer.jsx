// src/pages/Freelancer/DetailFreelancer.jsx

import React, { useState, useEffect } from "react";

import "./DetailFreelancer.css";

/* components */
import FreelancerProfile from "../../components/FreelancerProfile";
import FreelancerDetails from "../../components/FreelancerDetails";
import Pagination from "../../components/Pagination";

/* assets */
import fillStar from "../../assets/icons/fillStar.svg";
import emptyStar from "../../assets/icons/emptyStar.svg";
import review_emptyview from "../../assets/images/review_emptyview.svg";

/* 샘플 데이터 */
import samplerProfileImg from "../../assets/images/image 30.png";
import samplerPortfolioImg from "../../assets/images/image 36.png";

const DetailFreelancer = () => {
  // 탭 상태 관리
  const [activeTab, setActiveTab] = useState("자기소개");
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
  const reviewsPerPage = 9;

  useEffect(() => {
    // 페이지 진입 시 헤더의 배경색을 회색으로 변경
    const html = document.querySelector("html");
    html.style.backgroundColor = "#FBFAF9";

    return () => {
      // 페이지를 떠날 때 원래 헤더 배경색으로 복구
      html.style.backgroundColor = ""; // 빈 문자열로 원래 상태 복구
    };
  }, []);

  // 샘플 데이터
  const profileData = {
    profileImage: samplerProfileImg,
    name: "로고 그려주는 형님",
    userId: "drawingbro",
    responseTime: 90,
    matchCount: 7,
    rating: 4.4,
    weekendAvailable: true,
    badge: "gold",
    preTestScore: 80,
    introductionText:
      "난 사람을 찾는 baby (baby) 내 맘은 설레이지 Eyyy, drop the question\n Drop the, drop the question Want attention Wanna want attention...\n난 사람을 찾는 baby (baby) 내 맘은 설레이지 Eyyy, drop the question\n Drop the, drop the question Want attention Wanna want attention...",
  };

  const detailsData = {
    matchCount: 7,
    field: "logo",
    responseTime: 90,
    averageProductionTime: 7.5,
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
  };
  const reviewsData = [
    {
      title: "정말 만족스러웠어요",
      content: "서비스와 결과물 모두 훌륭했습니다. 다음에도 의뢰할 생각이에요!",
      authorName: "고객1",
      authorId: "happyclient1",
      rating: 5,
    },
    {
      title: "평균 이상이에요",
      content: "결과물은 괜찮았지만 응답 시간이 조금 느렸어요.",
      authorName: "고객2",
      authorId: "slowandsteady",
      rating: 3,
    },
    {
      title: "추천할 만해요",
      content:
        "결과물의 퀄리티는 매우 만족스럽습니다. 단기간에 잘 해결해주셨어요.",
      authorName: "고객3",
      authorId: "recommend123",
      rating: 4,
    },
    {
      title: "훌륭한 경험",
      content: "전체적인 작업과정이 매끄러웠고 매우 만족스러웠습니다.",
      authorName: "고객4",
      authorId: "smoothclient",
      rating: 5,
    },
    {
      title: "그럭저럭 괜찮아요",
      content: "결과물은 좋았지만 응대가 조금 부족했던 것 같아요.",
      authorName: "고객5",
      authorId: "neutral123",
      rating: 4,
    },
    {
      title: "다소 아쉬웠어요",
      content: "작업 속도가 좀 느렸고 기대 이하였습니다.",
      authorName: "고객6",
      authorId: "disappointed",
      rating: 2,
    },
  ];

  // 리뷰 데이터 페이지네이션 처리
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);
  const paginatedReviews = reviewsData.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  // 탭 변경 함수
  const renderTabContent = () => {
    switch (activeTab) {
      case "자기소개":
        return (
          <section className="freelancer-introduction-section">
            <FreelancerDetails {...detailsData} />
            <div className="freelancer-introduction">
              <h2>프리랜서 자기소개</h2>
              <div className="freelancer-introduction-text">
                {profileData.introductionText.split("\n").map((line, index) => (
                  <p key={index} className="freelancer-line">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </section>
        );
      case "포트폴리오":
        return (
          <section className="freelancer-portfolio-section">
            <div className="portfolio-intro">
              <h2>포트폴리오</h2>
              <p>잇칭에 공개한 포트폴리오를 구경해보세요.</p>
            </div>
            <div className="portfolio-grid">
              <img src={samplerPortfolioImg} alt="포트폴리오1" />
              <img src={samplerPortfolioImg} alt="포트폴리오2" />
              <img src={samplerPortfolioImg} alt="포트폴리오3" />
              <img src={samplerPortfolioImg} alt="포트폴리오1" />
              <img src={samplerPortfolioImg} alt="포트폴리오2" />
              <img src={samplerPortfolioImg} alt="포트폴리오3" />

              {/* 기타 포트폴리오 이미지 */}
            </div>
          </section>
        );
      case "리뷰":
        return (
          <section className="freelancer-review-section">
            <div className="review-header">
              <h2>프리랜서 리뷰</h2>
              <button className="review-button">리뷰 남기기</button>
            </div>
            {reviewsData.length === 0 ? (
              <div className="no-review">
                <img src={review_emptyview} alt="리뷰 없음" />
                <p>아직 리뷰가 없어요.</p>
              </div>
            ) : (
              <div className="review-wrapper">
                <div className="review-list">
                  {paginatedReviews.map((review, index) => (
                    <div key={index} className="review-item">
                      <h3>{review.title}</h3>
                      <p>{review.content}</p>
                      <div className="review-meta">
                        <div className="review-author">
                          <div className="review-author-image">
                            <img src={samplerProfileImg} alt="리뷰 작성자" />
                          </div>
                          <div className="review-author-info">
                            <span className="authorId">{review.authorId}</span>
                            <span className="authorName">
                              {review.authorName}
                            </span>
                          </div>
                        </div>
                        <span>{review.rating}★</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* 페이지네이션 */}
            {totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            )}
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="detail-freelancer-page">
      {/* 프로필 섹션 */}
      <FreelancerProfile {...profileData} />

      {/* 탭 섹션 */}
      <section className="freelancer-tabs">
        <div className="tab-wrapper">
          {["자기소개", "포트폴리오", "리뷰"].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className="freelancer-tab-contents">
        {/* 조건부로 변경되는 내용 */}
        {renderTabContent()}
      </section>
    </div>
  );
};

export default DetailFreelancer;
