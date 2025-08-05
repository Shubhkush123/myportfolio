import { useState, useEffect } from 'react'
import './App.css'
import profileImage from './assets/profile.jpg'
import weatherAppImage from './assets/weather-app.jpg'
import todoListImage from './assets/todo-list.jpg'
import ticTacToeImage from './assets/tic-tac-toe.jpg'
import onlineLearningImage from './assets/download (2).jpeg'

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Weather Detection App",
      image: weatherAppImage,
      description: "A real-time weather detection application built with React that provides current weather conditions, forecasts, and location-based weather updates.",
      tags: ["React", "Weather API", "CSS"],
      demo: "https://your-weather-app-demo.com",
      code: "https://github.com/yourusername/weather-app"
    },
    {
      id: 2,
      title: "Todo List Application",
      image: todoListImage,
      description: "A feature-rich Todo List app with React and localStorage for task management, including categories, priorities, and completion tracking.",
      tags: ["React", "localStorage", "CSS"],
      demo: "https://your-todo-app-demo.com",
      code: "https://github.com/yourusername/todo-list"
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      image: ticTacToeImage,
      description: "An interactive Tic Tac Toe game built with React, featuring two-player mode, move history, and win detection algorithm.",
      tags: ["React", "Game Logic", "CSS"],
      demo: "https://your-tictactoe-demo.com",
      code: "https://github.com/yourusername/tic-tac-toe"
    },
    {
      id: 4,
      title: "Online Learning Platform",
      image: onlineLearningImage,
      description: "A full-stack MERN-based platform offering secure authentication, dynamic course listings, user dashboards, and admin controls for managing content and users effectively.",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      demo: "https://library-vvb7.vercel.app/",
      code: "https://github.com/Shubhkush123/online-learning"
    }
  ];

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <h1>Portfolio</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={mobileMenuOpen ? 'active' : ''}></span>
          <span className={mobileMenuOpen ? 'active' : ''}></span>
          <span className={mobileMenuOpen ? 'active' : ''}></span>
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => handleNavClick('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#projects" onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#skills" onClick={() => handleNavClick('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#contact" onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text scroll-reveal">
            <h1>Hi, I'm <span className="highlight">Shubham Kushwah</span></h1>
            <h2>Mern Stack Developer</h2>
            <p>I'm a dedicated MERN Stack Developer with hands-on experience in building scalable, responsive web apps using MongoDB, Express.js, React.js, and Node.js. I focus on clean code, user experience, and efficient API development.

            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary-btn" onClick={() => handleNavClick('projects')}>
                View My Work
              </a>
              <a href="#contact" className="btn secondary-btn" onClick={() => handleNavClick('contact')}>
                Contact Me
              </a>
            </div>
          </div>
          <div className="profile-image scroll-reveal">
            <img src={profileImage} alt="Shubham Kushwah" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title scroll-reveal">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card scroll-reveal" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.demo} className="btn small-btn primary-btn" target="_blank" rel="noopener noreferrer">
                  View Demo
                </a>
                <a href={project.code} className="btn small-btn secondary-btn" target="_blank" rel="noopener noreferrer">
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title scroll-reveal">My Skills</h2>
        <div className="skills-container">
          <div className="skill-category scroll-reveal">
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
          <div className="skill-category scroll-reveal">
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
        <h2 className="section-title scroll-reveal">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info scroll-reveal">
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
                <p>Indore, Madhya Pradesh</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/Shubhkush123" className="social-icon" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/shubham-kushwah-2b39a8327" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://twitter.com/shubhamkushwah" className="social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          <form className="contact-form scroll-reveal" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="btn primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Shubham Kushwah. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
