import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landing_page/home/homepage";
import AboutSection from "./landing_page/about/aboutsection";

import "./index.css";
import SkillSection from "./landing_page/skills/skillsection";
import ProjectSection from "./landing_page/project/aboutproject";
import EducationSection from "./landing_page/education/educationsection";
import Contact from "./landing_page/home/contact";
import Navbar from "./landing_page/navbar";
import Footer from "./landing_page/footer";
import NotFound from "./landing_page/notefound";

import Admin from "./landing_page/home/admin";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutSection />}></Route>
      <Route path="/skills" element={<SkillSection />}></Route>
      <Route path="/project" element={<ProjectSection />}></Route>
      <Route path="/education" element={<EducationSection />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/admin" element={<Admin />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
