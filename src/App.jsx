// src/App.jsx
import React from "react";

import "./App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link, Route,  Router,  Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="inner">
          <div className="logo">MOHANA RAO KANAPAKALA</div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ================ ROUTES ================ */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}