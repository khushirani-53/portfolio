function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">
              &copy;&nbsp;2026 Khushi Rani. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">

            <a
              href="#"
              className="text-white text-decoration-none me-4"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-white text-decoration-none me-4"
            >
              LinkedIn
            </a>

            <a
              href="mailto:ranikhushi535@gmail.com"
              className="text-white text-decoration-none"
            >
              Email
            </a>
            <a href="#" className="ms-4"><button style={{backgroundColor:"#6C5CE7" }}>&#x21E7;</button></a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;