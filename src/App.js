// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import Footer from "./components/footer/Footer";
import Login from "./pages/LoginSignup/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "./pages/LoginSignup/Signup";
import SignupEmail from "./pages/LoginSignup/SignupEmail";
import ExploreClient from "./pages/Client/ExploreClient";
import DetailClient from "./pages/Client/DetailClient";
import ExploreFreelancer from "./pages/Freelancer/ExploreFreelancer";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Router>
        <MainHeader />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupemail" element={<SignupEmail />} />
          <Route path="/explore-client" element={<ExploreClient />} />
          <Route
            path="/explore-client/details/:client_post_id"
            element={<DetailClient />}
          />
          <Route path="/explore-freelancer" element={<ExploreFreelancer />} />
        </Routes>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
