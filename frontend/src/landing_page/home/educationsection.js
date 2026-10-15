
import React from "react";

function educationsection() {
  return (
    <div className="container p-5">
      <div className="row g-5">
        <div className="col-12 col-lg-6">
          <h2 className="section-title">Education</h2>
          <br />

          <strong>
            B.Tech in Computer Science and Engineering
          </strong>

          <p>
            Bharath Institute of Higher Education and Research, Chennai
            <br />
            2022 - 2026
          </p>

          <strong>Science (12th)</strong>

          <p>
            GOVT. S.S. School, Brahampura, Muzaffarpur
            <br />
            2020 - 2022
          </p>
        </div>

        <div className="col-12 col-lg-6">
          <h2 className="section-title">Certification</h2>
          <br />

          <div className="row row-cols-1 row-cols-md-2 g-4">

            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title" >
                    <a
                      href="https://drive.google.com/file/d/1rtHHzYSc1x7CPshkZq1Vp287pzX6ZJ9L/view?usp=drive_link"
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
                      href="https://drive.google.com/file/d/1ZC8lQ9B2QaQ7EpMbUJk8TwU36HzktDAD/view?usp=drive_link"
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
                      href="https://drive.google.com/file/d/1ZiwVsuhiwj49Z0K7U1DwF2jdXs8LYCXd/view?usp=drive_link"
                      rel="noreferrer"
                      className="text-decoration-none "
                    >
                      Power BI
                    </a>
                  </h5>

                  <p className="card-text">
                    Simplilearn
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://drive.google.com/file/d/16YYXqz-JT2oYEkHEH7nByDHYa5ZoCJ6Z/view?usp=drive_link"
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
    </div>
  );
}

export default educationsection;
