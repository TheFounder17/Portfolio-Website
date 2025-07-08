import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import profilePlaceholder from './assets/react.svg'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <main>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

function Home() {
  return (
    <div className="home-container">
      <img
        src={profilePlaceholder}
        alt="Profile"
        className="profile-pic"
      />
      <h1 className="profile-name">Your Name</h1>
      <p className="profile-intro">I'm a passionate developer. Welcome to my portfolio!</p>
    </div>
  )
}
function About() {
  return (
    <div className="about-container">
      <img
        src={profilePlaceholder}
        alt="About Placeholder"
        className="about-pic"
      />
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Yo! My name is Martin, I'm a 3D artist, game developer,
        </p>
      </div>
    </div>
  )
}
function Projects() {
  return <h1>Projects Page</h1>
}
function Gallery() {
  return <h1>Gallery Page</h1>
}
function Contact() {
  return <h1>Contact Page</h1>
}

export default App
