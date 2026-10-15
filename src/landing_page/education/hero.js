import React from "react";

function EducationSection() {
  return (
    <div className="container p-5">

      {/* Education Section */}
      <div className="mb-5">
        <h2 className="section-title">Education</h2>

        <div className="mb-4">
          <strong>B.Tech in Computer Science and Engineering</strong>
          <p className="mb-0">
            Bharath Institute of Higher Education and Research, Chennai
          </p>
          <p>2022 - 2026</p>
        </div>

        <div className="mb-4">
          <strong>Science (12th)</strong>
          <p className="mb-0">
            GOVT. S.S. School, Brahampura, Muzaffarpur
          </p>
          <p>2020 - 2022</p>
        </div>
      </div>

      {/* Certification Section */}
      <div>
        <h2 className="section-title">Certifications</h2>

        <div className="row row-cols-1 row-cols-md-2 g-4">

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="https://drive.google.com/file/d/1rtHHzYSc1x7CPshkZq1Vp287pzX6ZJ9L/view"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none "
                  >
                    Python Full Stack
                  </a>
                </h5>
                <p className="card-text">PySpider</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="https://drive.google.com/file/d/1ZC8lQ9B2QaQ7EpMbUJk8TwU36HzktDAD/view"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none "
                  >
                    Web Development
                  </a>
                </h5>
                <p className="card-text">Apna College</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="https://drive.google.com/file/d/1ZiwVsuhiwj49Z0K7U1DwF2jdXs8LYCXd/view"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none"
                  >
                    Power BI
                  </a>
                </h5>
                <p className="card-text">Simplilearn</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  <a
                    href="https://drive.google.com/file/d/16YYXqz-JT2oYEkHEH7nByDHYa5ZoCJ6Z/view"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none "
                  >
                    Digital Skills Readiness Program
                  </a>
                </h5>
                <p className="card-text">Wipro</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default EducationSection;