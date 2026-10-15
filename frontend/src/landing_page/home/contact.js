import React from "react";

function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const contactData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      const response = await fetch("http://localhost:3003/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      alert(result.message || "Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      alert(error.message || "Unable to send message.");
    }
  };

  return (
    <div className="container p-5">
      <div className="row align-items-center">
        <div className="col-md-5">
          <h2 className="section-title">Contact Me</h2>

          <div>
            <p>Let's connect!</p>
          </div>

          <p className="mt-4">
           I’m a recent Computer Science and Engineering graduate looking to begin my professional career in the IT industry. I’m open to entry-level opportunities, learning experiences, and collaborations. Feel free to contact me for job opportunities, projects, or professional discussions. I’d be happy to connect!
          </p>

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

        <div className="col-md-6 offset-md-1">
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  name="name"
                  required
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  name="email"
                  required
                />
              </div>

              <div className="col-12">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  name="message"
                  required
                ></textarea>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="btn text-white px-4"
                  style={{ backgroundColor: "#6C5CE7" }}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
