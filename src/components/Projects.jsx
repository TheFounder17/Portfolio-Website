import { Link } from 'react-router-dom'


function Projects() {
  return (

    <div className="projects-container">
      
      <div className="project-card">
        <h2>ToDo App</h2>
        <p>My first ever react project. A simple todo app.</p>
        <a href="https://thefounder17.github.io/todo-app/" target="_blank" rel="noopener noreferrer" className="project-btn">Visit Site</a>
      </div>

      <div className="project-card">
        <h2>Chereshka Store</h2>
        <p>Group project that uses 3D models instead of images and has a special "outfit maker" feature</p>
        <a href="https://mariaaivanova.github.io/OnlineShop.github.io/" target="_blank" rel="noopener noreferrer" className="project-btn">Visit Site</a>
      </div>

      <div className="project-card">
        <h2>Sc-Fi Sniper</h2>
        <p>3D model of futuristic sniper rifle.</p>
        <Link to="/project-sniper" className="project-btn">Visit Site</Link>
      </div>

      <div className="project-card">
        <h2>Sci-Fi War Robot</h2>
        <p>Game-ready 3D model of a sci-fi war robot.</p>
        <Link to="/project-robot" className="project-btn">Visit Site</Link>
      </div>

      <div className="project-card">
        <h2>Sci-Fi Helicopter</h2>
        <p>Detailed 3D model of a futuristic helicopter with sci-fi design elements.</p>
        <Link to="/project-sci-fi-helicopter" className="project-btn">Visit Site</Link>
      </div>

      <div className="project-card">
        <h2>Sci-Fi City</h2>
        <p>Complex 3D scene of a stylize futuristic city</p>
        <Link to="/project-sci-fi-city" className="project-btn">Visit Site</Link>
      </div>
    </div>
  )
}

export default Projects 