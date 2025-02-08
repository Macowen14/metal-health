import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import ResourcePage from "./pages/ResourcePage";
import AnxietyAssessment from "./pages/AnxietyAssesment";
import Results from "./pages/Results";

function App() {
  return (
    <Router>
      {/* Navbar will be present on all pages */}
      <Navbar />

      <Routes>
        {/* Home page will be shown at root path */}
        <Route path="/" element={<Home />} />

        {/* Resource page will be shown at /resources */}
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/anxiety" element={<AnxietyAssessment />} />
        <Route path="/results" element={<Results />} />
      </Routes>

      {/* Footer will be present on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
