import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import avatarImage from "../assets/images/nguyen.jpg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatarImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/GERnguyen"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dgnguyen2408/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Dang Gia Nguyen</h1>
          <p>Full Stack Engineer Intern</p>
          <div className="main-meta">
            <p>
              Email:{" "}
              <a href="mailto:dgnguyen2408@gmail.com">dgnguyen2408@gmail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+84902123456">+84 817 682 796</a>
            </p>
            <p>TOEIC: 805 (2023)</p>
          </div>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/GERnguyen"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dgnguyen2408/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
