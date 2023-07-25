import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage/index"
import Header from "./composants/Header/index"
import SkillPage from "./pages/SkillPage/index"
import ProjectPage from "./pages/ProjectPage/index"
import ContactPage from "./pages/ContactPage/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename='/Portfolio' >
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
