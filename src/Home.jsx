import React from "react";
import "./Home.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
 const handleHireMe = () => {
   window.open(
     "https://mail.google.com/mail/?view=cm&fs=1&to=kanapakalamohanrao@gmail.com&su=Hiring%20Inquiry&body=Hello%20Mohana%20Rao",
     "_blank"
   );
 };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/MyResume.pdf"; // Place Resume.pdf in public folder
    link.download = "Mohana_Rao_Resume.pdf";
    link.click();
  };

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <div className="hero">
        {/* LEFT TEXT */}
        <div className="hero-left">
          <p className="hello">Hello! I'm</p>
          <h3 className="name">Mohana Rao</h3>
          <h1 className="title">Java Full Stack Developer</h1>

          <p className="description">
            I am a B.Tech graduate passionate about Full-Stack Java Development.
            I build responsive React UIs and reliable backend services using
            Java, Spring Boot, Microservices, and Oracle.
          </p>

          <div className="buttons">
            <button className="hire-me-btn" onClick={handleHireMe}>
              Hire Me →
            </button>
            <button className="cv-btn" onClick={handleDownloadCV}>
              Download CV ⬇
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <div className="image-circle">
            <img src="/images/Profile.jpg" alt="profile" />
          </div>
        </div>
      </div>

      {/* SOCIAL ICON BAR */}
      <div className="social-bar">
        <span>Follow Me On :</span>
        <a
          href="https://www.linkedin.com/in/mohankanapakala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/mohanrao.kanapakala"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/mohan_kanapakala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
