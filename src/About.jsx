
import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      {/* ABOUT INFO */}
      <div className="about-row">
        <h1>About Me</h1>
        <p>
          I'm Mohana Rao, a B.Tech graduate and aspiring Full Stack Java Developer. I
          have hands-on experience in building responsive front-end interfaces
          using React and developing robust backend services with Java, Spring
          Boot, and Microservices. As a fresher, I am looking for a challenging
          role where I can apply my skills, grow professionally, and contribute
          to impactful software solutions.
        </p>
      </div>

      {/* SKILLS HEADING */}
      <div className="skills-heading">Skills & Technologies</div>

      {/* ROW 1 */}
      <div className="skills-row">
        <div className="skill-item">
          <img src="/images/html.png" alt="HTML" />
          <p>HTML</p>
        </div>

        <div className="skill-item">
          <img src="/images/css1.png" alt="CSS" />
          <p>CSS</p>
        </div>

        <div className="skill-item">
          <img src="/images/bootstrap.png" alt="Bootstrap" />
          <p>Bootstrap</p>
        </div>

        <div className="skill-item">
          <img src="/images/js1.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>

        <div className="skill-item">
          <img src="/images/react1.png" alt="React" />
          <p>ReactJS</p>
        </div>
      </div>

      {/* ROW 2 */}
      <div className="skills-row">
        <div className="skill-item">
          <img src="/images/java.png" alt="Java" />
          <p>Java</p>
        </div>

        <div className="skill-item">
          <img src="/images/spring-boot.png" alt="Spring Boot" />
          <p>Spring Boot</p>
        </div>

        <div className="skill-item">
          <img src="/images/microservices.png" alt="Microservices" />
          <p>Microservices</p>
        </div>

        <div className="skill-item">
          <img src="/images/oracle.png" alt="SQL" />
          <p>SQL / Oracle</p>
        </div>
      </div>
    </div>
  );
}