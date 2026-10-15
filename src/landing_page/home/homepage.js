import React from "react";

import Hero from "./hero";
import AboutSection from "../about/aboutsection";
import SkillSection from "./skillsection";
import ProjectSection from "./projectsection";
import EducationSection from "./educationsection";
import Contact from "./contact";

function Homepage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <EducationSection />
      <Contact />
    </>
  );
}

export default Homepage;
