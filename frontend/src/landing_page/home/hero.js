import React from "react";
import { Link } from "react-router-dom";

function hero() {
  return (
    <div style={{ backgroundColor: "#F5F7FF" }}>
      <div className="container p-5">
        <div className="row">
          <div className="col">
            <div>
              <p style={{color:"#5146E5"}}>HELLO, I'M</p>
              <h1>Khushi <span style={{color:"#5146E5"}}> Rani</span></h1>
              <strong>Computer Science Graduate</strong>
              <br /> <br />

              <p>
               I am a Computer Science and Engineering graduate with an interest in software development, programming, and problem-solving. I enjoy building projects, exploring new technologies, and developing practical solutions to real-world challenges. I am eager to apply my technical knowledge, learn continuously, and contribute to a collaborative team while growing professionally in the IT industry.
              </p>
            </div>

            <div className="d-flex gap-5 mt-5">
              <button style={{ width: "200px" }}>
                <Link to="/project" className="text-decoration-none">
                  View Project
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </button>

              <button style={{ width: "200px" }}>
                <a
                  href="/media/khushirani%27s.pdf"
                  download="Khushi_Rani_Resume.pdf"
                  className="text-decoration-none"
                >
                  Download Resume{" "}
                  <i className="fa-regular fa-circle-down"></i>
                </a>
              </button>
            </div>

            <div className="social-media d-flex gap-4 mt-5">
              <a className="text-decoration-none" href="https://www.linkedin.com/in/khushi-rani/">
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a className="text-decoration-none text-dark" href="https://github.com/khushirani-53">
                <i className="fa-brands fa-github"></i>
              </a>

              <a href="mailto:ranikhushi535@gmail.com">
                <i className="fa-regular fa-envelope text-dark"></i>
              </a>

              <a href="">
                <i className="fa-brands fa-leetcode text-dark"></i>
              </a>
            </div>
          </div>

          <div className="col d-flex justify-content-center align-items-center">
            <img
              className="rounded-circle border p-2"
              src="media/images/khushirani.jpeg"
              alt=""
              height={300}
              width={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;

