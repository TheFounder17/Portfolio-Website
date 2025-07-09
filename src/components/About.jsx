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
        Hi, I’m Martin — a 3D artist with a passion for hard surface modeling, stylized characters, and turning imagination into game-ready assets. Whether it's building futuristic weapons, detailed environments, or expressive characters, I focus on making every piece not just visually striking, but technically solid and optimized for real-time engines. I blend design, storytelling, and technical skill to create digital art that feels alive — whether for games, animation, or interactive experiences. Welcome to my world.
        </p>
      </div>
    </div>
  )
}

export default About 