// src/components/Projects.jsx
import React from "react";
import "./Projects.css";

export default function Projects() {
 const projects = [
   {
  title: "FoodiePlace (React)",
  desc: "A modern food ordering web application built with React, featuring dynamic UI components, responsive layouts, and smooth animations. Integrates with a REST API backend for managing products, orders, and real-time menu updates, providing a seamless user experience.",
},
   {
     title: "Employee Management System (REST APIs + React)",
     desc: "A full-stack employee management system combining React frontend with Spring Boot REST API backend. Supports CRUD operations for employee data, department management, and role assignments. Implements validation, error handling.",
   },
   {
     title: "Product Management System (MVC)",
     desc: "An MVC-based product management application built using Spring Boot. Manages products, categories, and inventory with proper routing, forms, and CRUD operations. Implements server-side validation and template-based rendering for a seamless user experience.",
   },
   {
     title: "Portfolio Website (React)",
     desc: "A personal portfolio website showcasing my skills, projects, and experience. Built using React with responsive layouts, modern animations, gradients, and smooth scrolling. Includes sections for projects, skills, resume download, and contact form integration for potential recruiters or clients.",
   },
   {
     title: "Intelligent Quantum Algorithm Designer (Academic)",
     desc: "A research-oriented project exploring quantum computing principles and algorithm design. Implements simulations for quantum algorithms, analyzes efficiency and optimization, and provides visual representations of quantum operations. Focused on learning quantum programming paradigms and computational models.",
   },
   {
     title: "Currency Exchange Microservices (Spring Boot)",
     desc: "A microservices-based currency exchange platform demonstrating real-world backend architecture. Includes service-to-service communication using Feign Client, centralized configuration via Config Server, service discovery with Eureka Server, monitoring with Spring Boot Actuator, distributed tracing using Zipkin, and caching with Redis. Implements secure REST APIs, fault tolerance, and scalable microservices design.",
   },
 ];



  return (
    <div className="projects-section">
      <h2 className="title">Personal Projects</h2>

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
