import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "../assets/styles/Expertise.scss";

type TechItem = {
  label: string;
  slug: string;
};

const techStackRowOne: TechItem[] = [
  { label: "React", slug: "react" },
  { label: "TypeScript", slug: "typescript" },
  { label: "JavaScript", slug: "javascript" },
  { label: "HTML5", slug: "html5" },
  { label: "CSS3", slug: "css3" },
  { label: "Python", slug: "python" },
];

const techStackRowTwo: TechItem[] = [
  { label: "SQL", slug: "mysql" },
  { label: "MongoDB", slug: "mongodb" },
  { label: "Postman", slug: "postman" },
  { label: "Figma", slug: "figma" },
  { label: "Git", slug: "git" },
  { label: "GitHub Actions", slug: "githubactions" },
  { label: "Docker", slug: "docker" },
];

const TechLoopRow = ({
  items,
  reverse = false,
}: {
  items: TechItem[];
  reverse?: boolean;
}) => {
  const loopRepeatCount = 4;
  const loopItems = Array.from({ length: loopRepeatCount }, () => items).flat();

  return (
    <div className={`tech-loop-row ${reverse ? "reverse" : ""}`}>
      <div
        className="tech-loop-track"
        style={{ "--loop-repeats": loopRepeatCount } as React.CSSProperties}
      >
        {loopItems.map((tech, index) => (
          <div className="tech-pill" key={`${tech.label}-${index}`}>
            <img
              src={`https://cdn.simpleicons.org/${tech.slug}`}
              alt={`${tech.label} icon`}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <span>{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React and Node.js. I have a
              strong proficiency in the SDLC process and frontend + backend
              development.
            </p>
          </div>

          <div className="skill tech-loop-panel">
            <h3>Tech Stack</h3>
            <p>
              Endless loop of tools I use across frontend, backend, cloud, and
              AI product development.
            </p>
            <TechLoopRow items={techStackRowOne} />
            <TechLoopRow items={techStackRowTwo} reverse />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
