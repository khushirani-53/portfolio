import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [selectedNavbar, setSelectedNavbar] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();

  const handleNavbarClick = (index) => {
    setSelectedNavbar(index);
  };
  const handleProfileDropdownClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const navbarClass = "navbar";
  const activeNavebarClass = "navbar Selected";

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{ color: "#14213D" }}
        >
          Khushi <span style={{ color: "#5146E5" }}>Rani</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link "
                to="/"
                onClick={() => handleNavbarClick(0)}
              >
                <p
                  className={
                    location.pathname === "/" ? activeNavebarClass : navbarClass
                  }
                >
                  Home
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => handleNavbarClick(1)}
              >
                <p
                  className={
                    selectedNavbar === 1 ? activeNavebarClass : navbarClass
                  }
                >
                  About
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/skills"
                onClick={() => handleNavbarClick(2)}
              >
                <p
                  className={
                    selectedNavbar === 2 ? activeNavebarClass : navbarClass
                  }
                >
                  Skills
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/project"
                onClick={() => handleNavbarClick(3)}
              >
                <p
                  className={
                    location.pathname === "/project"
                      ? activeNavebarClass
                      : navbarClass
                  }
                >
                  Projects
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/education"
                onClick={() => handleNavbarClick(4)}
              >
                <p
                  className={
                    selectedNavbar === 4 ? activeNavebarClass : navbarClass
                  }
                >
                  Education
                </p>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={() => handleNavbarClick(5)}
              >
                <p
                  className={
                    selectedNavbar === 5 ? activeNavebarClass : navbarClass
                  }
                >
                  Contact
                </p>
              </Link>
            </li>
          </ul>

          <a
            href="/media/khushirani%27s.pdf"
            download="Khushi_Rani_Resume.pdf"
            className="btn text-white px-3"
            style={{
              backgroundColor: "#5146E5",
              borderRadius: "7px",
            }}
          >
            <i className="fa-solid fa-download me-2"></i>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
