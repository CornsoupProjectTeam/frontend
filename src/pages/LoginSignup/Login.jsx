import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode'; // named import로 변경
import './Login.css'; 
import logo_blackSVG from '../../assets/images/logo_black.svg'; // 경로에 맞게 조정하세요
import login_orangeSVG from '../../assets/images/login_orange.svg';
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { WebLogo } from "../WebLogo/WebLogo";
import frame1000007095 from "./frame-1000007095.png";

function LoginSignup() {
    const handleSuccess = (response) => {
      const decodedToken = jwtDecode(response.credential);
      console.log('Google 로그인 성공:', decodedToken);
    };
  
    const handleError = () => {
      console.log('Google 로그인 실패');
    };
  
    return (
      <>
        <div className="element">
          <div className="div">
            <div className="view">
              <div className="frame-wrapper">
                <div className="frame">
                  <div className="text-wrapper">로그인</div>
                </div>
              </div>
              <div className="frame-2">
                <div className="frame-3">
                  <div className="frame-4">
                    <div className="text-wrapper-2">이메일</div>
                    <TextField
                      label={
                        <div className="textfield">
                          <div className="text-wrapper-3">웜뱃을 입력하세요.</div>
                        </div>
                      }
                    >
                      웜뱃을 입력하세요.
                    </TextField>
                  </div>
                  <div className="frame-4">
                    <div className="text-wrapper-4">비밀번호</div>
                    <TextField
                      label={
                        <div className="textfield">
                          <div className="text-wrapper-3">웜뱃을 입력하세요.</div>
                        </div>
                      }
                    >
                      웜뱃을 입력하세요.
                    </TextField>
                  </div>
                  <Button variant="contained">로그인하기</Button>
                </div>
                <TextField
                  label={
                    <div className="div-wrapper">
                      <div className="text-wrapper-5">비밀번호를 잊었어요</div>
                    </div>
                  }
                >
                  비밀번호를 잊었어요
                </TextField>
              </div>
              <div className="google-login">
                <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
              </div>
                <TextField
                  label={
                    <div className="div-wrapper">
                      <div className="text-wrapper-6">회원가입하기</div>
                    </div>
                  }
                >
                  회원가입하기
                </TextField>
            </div>
          </div>
          <div className="frame-wrapper-2">
            <div className="frame">
              <div className="text-wrapper-7">
                나에게 꼭 맞는
                <br />
                디자이너를 이어주는
              </div>
            </div>
          </div>
        </div>
        <WebLogo className="web-logo-instance" property1="twenty-seven-thousand-and-ninety-six" />
        <img className="img" alt="Frame" src={logo_blackSVG} />
      </>
    );
}

export default LoginSignup;

  