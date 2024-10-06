import React, { useState } from "react";
import "./TagInput.css";

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // 태그 추가
  const addTag = (event) => {
    if (event.key === "Enter" && inputValue.trim()) {
      setTags([...tags, inputValue.trim()]);
      setInputValue(""); // 입력 필드를 초기화
    }
  };

  // 태그 삭제
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="tag-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={addTag}
        placeholder="요구사항 입력 후 엔터를 눌러주세요."
      />
      <ul className="tags-list">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span>{tag}</span>
            <button type="button" onClick={() => removeTag(index)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagInput;
