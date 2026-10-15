
import React from "react";

function AboutSection() {
  return (
    <div className="container p-5">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-5">
          <h2 className="section-title">About Me</h2>

          <p className="mt-4">
           I am a Computer Science and Engineering graduate passionate about technology, software development, and problem-solving. I have worked on projects using Python, Java, JavaScript, React.js, Node.js, Express.js, Django, SQL, and MongoDB. My projects include an AI-powered virtual meeting platform with speech-to-text transcription and an AI chatbot, a full-stack travel listing platform, and a weather application using a REST API. I enjoy learning new technologies, building practical applications, and continuously improving my technical skills. I am eager to contribute to real-world projects and begin my professional career in the IT industry.
          </p>
        </div>

        <div className="col-12 col-lg-7">
          <div
            className="p-4 rounded"
            style={{ backgroundColor: "#F5F7FF" }}
          >
            <div className="row g-3 align-items-start">
              <div className="col-5 col-sm-4">
                <i className="fa-solid fa-user me-2"></i>
                <strong>Name</strong>
              </div>
              <div className="col-7 col-sm-8">Khushi Rani</div>

              <div className="col-5 col-sm-4">
                <i className="fa-solid fa-graduation-cap me-2"></i>
                <strong>Education</strong>
              </div>
              <div className="col-7 col-sm-8">
                B.Tech in Computer Science &amp; Engineering
              </div>

              <div className="col-5 col-sm-4">
                <i className="fa-solid fa-building-columns me-2"></i>
                <strong>College</strong>
              </div>
              <div className="col-7 col-sm-8">
                Bharath Institute of Higher Education and Research
              </div>

              <div className="col-5 col-sm-4">
                <i className="fa-solid fa-calendar-days me-2"></i>
                <strong>Year of Passing</strong>
              </div>
              <div className="col-7 col-sm-8">2026</div>

              <div className="col-5 col-sm-4">
                <i className="fa-solid fa-location-dot me-2"></i>
                <strong>Location</strong>
              </div>
              <div className="col-7 col-sm-8">Bangalore, India</div>

              <div className="col-5 col-sm-4">
                <i className="fa-regular fa-envelope me-2"></i>
                <strong>Email</strong>
              </div>
              <div className="col-7 col-sm-8 text-break">
                ranikhushi535@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
