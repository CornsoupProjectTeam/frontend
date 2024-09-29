// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExploreProjectPage from "./pages/Project/ExploreProjectPage";
import MainHeader from "./components/header/MainHeader";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Router>
      <MainHeader />
      <Routes>
        <Route path="/projects" element={<ExploreProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
