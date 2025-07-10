import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectSniper from './components/ProjectSniper'
import ProjectRobot from './components/ProjectRobot'
import ProjectSciFiHelicopter from './components/ProjectSci-FiHelicopter'
import ProjectSciFiCity from './components/ProjectSci-FiCity'
import Tools from './components/Tools'

function App() {
  return (
    <div className="app-container">
      {/* Floating background elements */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-robot" element={<ProjectRobot />} />
          <Route path="/project-sci-fi-helicopter" element={<ProjectSciFiHelicopter />} />
          <Route path="/project-sniper" element={<ProjectSniper />} />
          <Route path="/project-sci-fi-city" element={<ProjectSciFiCity />} />
        </Routes>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/Portfolio-Website/purused-logo.png" alt="Pursued Logo" className="footer-pursued-logo" />
          </div>
          <div className="footer-text">
            <p>&copy; 2025 Martin Djambazov. All rights reserved.</p>
            <p>Portfolio Website - 3D Artist & Developer</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
