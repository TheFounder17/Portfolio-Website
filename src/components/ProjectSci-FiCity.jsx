import testscene from '/3d-projects-renders/sci-fi-test.mp4'

function ProjectSciFiCity() {
    return(
        <div className="project-sci-fi-city">
            <h1>Sci-Fi City</h1>
            <div className="city-video-container">
                <video 
                    src={testscene}
                    className="city-video" 
                    controls 
                    autoPlay 
                    loop 
                    muted
                />
            </div>
            <p className="city-description">
            This is a test animation containing the sci-fi helicopter and a sci-fi bulding. The purpose was to see if im able to create such scenes and vibes.
            </p>
        </div>
    );
}

export default ProjectSciFiCity;