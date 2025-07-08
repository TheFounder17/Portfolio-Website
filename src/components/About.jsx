import profilePlaceholder from '../assets/react.svg'

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

export default About 