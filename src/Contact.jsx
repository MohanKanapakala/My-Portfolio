// src/components/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=kanapakalamohanrao@gmail.com&su=Portfolio%20Contact%20-%20${name}&body=Name:%20${name}%0AEmail:%20${email}%0A%0AMessage:%0A${message}`;

    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSendMessage}>
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
