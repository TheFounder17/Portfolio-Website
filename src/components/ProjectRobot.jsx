function ProjectRobot() {
    return(
        <div className="project-robot">
            <h1>Sci-Fi War Robot</h1>
            <div className="robot-image-container">
                <img 
                    src="/Portfolio-Website/3d-projects-renders/war-robot.png" 
                    alt="War Robot Render" 
                    className="robot-image"
                />
            </div>
            <p className="robot-description">
                {/* Add your robot project description here */}
                A game-ready 3D model of a sci-fi war robot, designed for real-time engines and stylized environments. Features detailed hard-surface modeling and optimized topology for animation and rendering.
            </p>
        </div>
    );
}

export default ProjectRobot;