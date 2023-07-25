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
        <Route path="/Portfolio/" element={<HomePage />} />
        <Route path="/Portfolio/skill" element={<SkillPage />} />
        <Route path="/Portfolio/project" element={<ProjectPage />} />
        <Route path="/Portfolio/contact" element={<ContactPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
