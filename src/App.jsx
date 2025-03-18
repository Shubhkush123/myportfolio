import { useState } from 'react'
import './App.css'
import shubh from './image/shubh.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="portfolio-app">
      {/* <img src={shubh} alt="random" /> */}
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home" onClick={() => setActiveSection('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#projects" onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#skills" onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#contact" onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Shubham kushwah</span></h1>
          <h2>React Developer</h2>
          <p>I build modern, responsive web applications with React</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View My Work</a>
            <a href="#contact" className="btn secondary-btn">Contact Me</a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {[1, 2, 3].map((project) => (
            <div key={project} className="project-card">
              <div className="project-image"></div>
              <h3>Project {project}</h3>
              <p>This is a description of project {project}. It showcases my skills in React, CSS, and responsive design.</p>
              <div className="project-tags">
                <span>React</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn small-btn">View Demo</a>
                <a href="#" className="btn small-btn">Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">React</div>
                <p>React</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">JS</div>
                <p>JavaScript</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">TS</div>
                <p>TypeScript</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">CSS</div>
                <p>CSS/SCSS</p>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <div className="skill-icon">Git</div>
                <p>Git</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">API</div>
                <p>RESTful APIs</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">Resp</div>
                <p>Responsive Design</p>
              </div>
              <div className="skill-item">
                <div className="skill-icon">Test</div>
                <p>Testing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <p>Shubhamkushwah3753@gmail.com</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <p>+91 6264553753</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>Indore</p>
              </div>
            </div>
            <div className="social-links">
              <a href="#" className="social-icon">GitHub</a>
              <a href="#" className="social-icon">LinkedIn</a>
              <a href="#" className="social-icon">Twitter</a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn primary-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
