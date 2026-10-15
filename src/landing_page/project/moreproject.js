import React from "react";

function ProjectSection() {
  return (
    <div className="container p-5">
        <h2 className="section-title">Projects</h2>
      <div className="row">
        

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
             <img src="/media/images/aiproject.png" className="card-img-top" alt="AI Virtual Meeting Platform" />

              <div className="card-body">
                <h5 className="card-title">AI Virtual Meeting Platform</h5>

                <p className="card-text">
                  A real-time virtual meeting platform featuring live
                  speech-to-text transcription and an AI-powered chatbot. It
                  enables users to communicate, collaborate, and access meeting
                  assistance through an interactive interface. <br />{" "}
                  <i>Technologies: </i>
                  React.js, Node.js, Express.js, MongoDB, WebRTC, Socket.IO,
                  ASR.
                </p>
                <a href="https://github.com/khushirani-53/Meetsphere" class="btn btn-primary">
                  Link
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
             <img src="/media/images/project2.png" className="card-img-top" alt="AI Virtual Meeting Platform" />

              <div className="card-body">
                <h5 className="card-title">Wanderlust</h5>

                <p className="card-text">
                  A full-stack web application that allows users to explore
                  travel listings and discover places to stay. It provides a
                  user-friendly interface for browsing listings, with backend
                  functionality for managing travel-related data. <br />
                  <i>Technologies: </i> HTML, CSS, JavaScript, Node.js,
                  Express.js, MongoDB.
                </p>
                <a href="https://github.com/khushirani-53/Wanderlust" class="btn btn-primary">
                  LINK
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
             <img src="/media/images/portfolio.png" className="card-img-top" alt="AI Virtual Meeting Platform" />

              <div className="card-body">
                <h5 className="card-title">Personal Portfolio Website</h5>

                <p className="card-text">
                  A responsive personal portfolio website built to showcase my
                  technical skills, projects, educational background, and
                  contact information. It provides recruiters and professionals
                  with an overview of my work, technologies, and career
                  interests through a clean and user-friendly interface. <br />
                  <i>Technologies: </i> React.js, JavaScript, Bootstrap, HTML, CSS.
                </p>
                <a href="#" class="btn btn-primary">
                  link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
