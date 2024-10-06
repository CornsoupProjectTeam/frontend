// src/components/form/ImageUpload.jsx

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import "./ImageUpload.css";

/* assets */
import DropImg from "../../assets/icons/FolderPlus.svg";

const ImageUpload = ({ userId }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragging, setDragging] = useState(false);

  const uploadedFilesRef = useRef(null);

  // 파일 선택 핸들러 (드래그/클릭 둘 다 사용)
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => uploadFile(file));
  };

  // 파일 업로드 핸들러
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", userId);

    try {
      const response = await axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // 업로드된 파일을 목록에 추가
      const uploadedFile = {
        filename: response.data.filename,
        url: URL.createObjectURL(file),
      };
      setUploadedFiles([...uploadedFiles, uploadedFile]);
    } catch (error) {
      console.error("파일 업로드 중 오류가 발생했습니다:", error);
    }
  };

  // 드래그앤드롭 핸들러
  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    files.forEach((file) => uploadFile(file));
    setDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  // 파일 삭제 핸들러
  const handleDelete = async (filename) => {
    try {
      await axios.post("/delete", { user_id: userId, filename });
      // 파일 삭제 후 목록에서 제거
      setUploadedFiles(
        uploadedFiles.filter((file) => file.filename !== filename)
      );
    } catch (error) {
      console.error("파일 삭제 중 오류가 발생했습니다:", error);
    }
  };

  // 파일 업로드 시 스크롤이 아래로 내려가도록 하는 useEffect
  useEffect(() => {
    // 이전 파일 개수와 현재 파일 개수를 비교하여 스크롤 이동 조건을 설정
    if (uploadedFiles.length > 0 && uploadedFilesRef.current) {
      uploadedFilesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [uploadedFiles]);

  return (
    <div className="image-upload-container">
      {/* 드래그앤드롭 영역 */}
      <div
        className={`upload-area ${dragging ? "dragging" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById("fileInput").click()}>
        <img src={DropImg} alt="업로드 영역 이미지" className="upload-image" />
        <p>이미지를 드래그앤드롭 하거나 클릭하여 업로드하세요.</p>
      </div>

      {/* 숨겨진 파일 선택 input */}
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        multiple
        accept="image/png, image/jpeg, image/jpg"
        style={{ display: "none" }}
      />

      {/* 업로드된 파일 목록 */}
      <div className="uploaded-files">
        {uploadedFiles.map((file) => (
          <div key={file.filename} className="uploaded-file">
            <p>{file.filename}</p> {/* 파일명 표시 */}
            <button onClick={() => handleDelete(file.filename)}>삭제</button>
          </div>
        ))}
        {/* 스크롤이 내려갈 위치 참조 */}
        <div ref={uploadedFilesRef}></div>
      </div>
    </div>
  );
};

export default ImageUpload;
