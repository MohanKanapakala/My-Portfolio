// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "FoodiePlace (React)",
      desc: "A modern food ordering UI built using React. Includes dynamic components and responsive design.",
    },
    {
      title: "Employee Management System (REST APIs + React)",
      desc: "CRUD-based employee management app using React frontend and REST API backend integration.",
    },
    {
      title: "Product Management System (MVC)",
      desc: "An MVC application to manage products, categories, and inventory with proper routing.",
    },
    {
      title: "Portfolio Website (React)",
      desc: "A personal portfolio with animations, gradients, and responsive layouts built using React.",
    },
    {
      title: "Intelligent Quantum Algorithm Designer (Academic)",
      desc: "A research-based project that explores quantum computing principles and algorithm design.",
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="description">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
