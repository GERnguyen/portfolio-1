import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import discord from "../assets/images/discord.gif";
import lumina from "../assets/images/lumina.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://www.filmate.club/" target="_blank" rel="noreferrer">
            <h2>Lumina : E-Learning Platform</h2>
          </a>
          <p>
            A comprehensive web-based e-learning ecosystem featuring a robust
            administrative dashboard for instructors and an intuitive learning
            interface for students. The platform handles complex workflows,
            including multi-step course creation, dynamic content delivery, and
            integrated payment processing. <br />
            Tech used: ReactJS, NodeJS, Typescript, TypeORM, Tailwind, MySQL,
            Docker
          </p>
          <div className="project-actions">
            <a
              className="github-link"
              href="https://github.com/GERnguyen/lumina-be"
              target="_blank"
              rel="noreferrer"
              aria-label="Lumina GitHub repository"
            >
              <GitHubIcon />
              <span className="github-label">{`BE`}</span>
            </a>
            <a
              className="github-link"
              href="https://github.com/GERnguyen/lumina-fe-oose"
              target="_blank"
              rel="noreferrer"
              aria-label="Lumina GitHub repository"
            >
              <GitHubIcon />
              <span className="github-label">{`FE`}</span>
            </a>
          </div>
        </div>
        <div className="project">
          <a
            href="https://github.com/iamkvnn/cinx-native/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            <img src={lumina} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/iamkvnn/cinx-native/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Cinx Mobile</h2>
          </a>
          <p>
            A cross-platform mobile application designed to bring the Lumina
            learning experience to iOS and Android. It focuses on
            high-performance content delivery, on-the-go learning tracking, and
            a native-feel interface optimized for mobile interactions. <br />
            Tech used: React Native, Expo, TypeScript, RESTful API, NativeWind,
            Zustand
          </p>
          <div className="project-actions">
            <a
              className="github-link"
              href="https://github.com/iamkvnn/cinx-native/tree/main"
              target="_blank"
              rel="noreferrer"
              aria-label="High Speed Chase GitHub repository"
            >
              <GitHubIcon />
              <span className="github-label">{`Github`}</span>
            </a>
          </div>
        </div>
        <div className="project">
          <a
            href="https://github.com/GERnguyen/pygit-git-clone"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/GERnguyen/pygit-git-clone"
            target="_blank"
            rel="noreferrer"
          >
            <h2>PyGit : Git clone using Python</h2>
          </a>
          <p>
            A lightweight implementation of the Git version control system built
            from scratch in Python. This project delves into the internals of
            Git, focusing on how data is stored, tracked, and managed through
            low-level file manipulations. It provides a CLI for core versioning
            operations, mimicking the behavior of the original Git.
          </p>
          <div className="project-actions">
            <a
              className="github-link"
              href="https://github.com/GERnguyen/pygit-git-clone"
              target="_blank"
              rel="noreferrer"
              aria-label="PyGit GitHub repository"
            >
              <GitHubIcon />
              <span className="github-label">{`Github`}</span>
            </a>
          </div>
        </div>
        <div className="project">
          <a
            href="https://github.com/thanhquan123hi1/cococord-website"
            target="_blank"
            rel="noreferrer"
          >
            <img src={discord} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/thanhquan123hi1/cococord-website"
            target="_blank"
            rel="noreferrer"
          >
            <h2>CoCoCord : Discord Clone</h2>
          </a>
          <p>
            Implemented real-time chat operations (WebSocketMessageController),
            voice and video communications (VoiceRealtimeController, WebRTC
            signaling), and granular role-based access control (Role/Permission
            decorators). Tech used: Java, Spring Boot, WebSockets, WebRTC,
            MongoDB/MySQL.
          </p>
          <div className="project-actions">
            <a
              className="github-link"
              href="https://github.com/thanhquan123hi1/cococord-website"
              target="_blank"
              rel="noreferrer"
              aria-label="CoCoCord GitHub repository"
            >
              <GitHubIcon />
              <span className="github-label">{`Github`}</span>
            </a>
          </div>
        </div>
        <div className="project">
          <a
            href="https://github.com/GERnguyen/Hackathon2025"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/GERnguyen/Hackathon2025"
            target="_blank"
            rel="noreferrer"
          >
            <h2>UTEMAP : University map and events management</h2>
          </a>
          <p>
            An internal digital map system integrated with event management for
            HCMUTE students. Bulit winthin 24 hours for HCMUTE Hackathon 2025.{" "}
            <br />
            Tech used: ReactJS, NodeJS, MongoDB, RESTful API
          </p>
          <div className="project-actions">
            <a
              className="github-link"
              href="https://github.com/GERnguyen/Hackathon2025"
              target="_blank"
              rel="noreferrer"
              aria-label="UTEMAP GitHub repository"
            >
              <GitHubIcon />
              <span className="github-label">{`Github`}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
