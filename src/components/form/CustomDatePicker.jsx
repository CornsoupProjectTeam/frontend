// src/components/form/CustomDatePicker.jsx

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 기본 CSS 파일

import "./CustomDatePicker.css";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="custom-datepicker">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy년 MM월 dd일"
        placeholderText="날짜를 선택하세요"
        className="custom-input" // 커스텀 인풋 스타일
        calendarClassName="custom-calendar" // 커스텀 캘린더 스타일
      />
    </div>
  );
};

export default CustomDatePicker;
