// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExploreProjectPage from "./pages/Project/ExploreProject";
import MainHeader from "./components/header/MainHeader";
import Footer from "./components/footer/Footer";
import Login from "./pages/LoginSignup/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "./pages/LoginSignup/Signup";
import SignupEmail from "./pages/LoginSignup/SignupEmail";
import SignupInfo from './pages/LoginSignup/SignupInfo';

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <MainHeader />
        <Routes>
          <Route path="/explore-project" element={<ExploreProjectPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupemail" element={<SignupEmail />} />
          <Route path="/signupinfo" element={<SignupInfo />} />
        </Routes>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
