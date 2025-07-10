import blenderlogo from '/blender-logo.png'
import kritalogo from '/krita-logo.png'
import davinciresolve from '/davinci-logo.png'
import chatgptlogo from '/chatgpt-logo.png'
import cursorlogo from '/cursor-logo.png'
import gitlogo from '/git-logo.png'

function Tools() {
  return (
    <div className="tools-giant-container">
      <div className="tools-giant tools-giant-left">
        <h1 className="tools-heading">3D Art</h1>
        <div className="tool-logo-row">
          <img src={blenderlogo} alt="Blender Logo" className="tool-logo" />
          <p className="tool-desc">Blender: Powerful open-source 3D creation suite for modeling, sculpting, animation, and rendering.</p>
        </div>
        <div className="tool-logo-row">
          <img src={kritalogo} alt="Krita Logo" className="tool-logo" />
          <p className="tool-desc">Krita: Free and open-source digital painting program, great for concept art, textures, and illustrations.</p>
        </div>
        <div className="tool-logo-row">
          <img src={davinciresolve} alt="DaVinci Resolve Logo" className="tool-logo" />
          <p className="tool-desc">DaVinci Resolve: Professional video editing and color grading software, perfect for post-production.</p>
        </div>
      </div>
      <div className="tools-giant tools-giant-right">
        <h1 className="tools-heading">Programming</h1>
        <div className="tool-logo-row">
          <img src={chatgptlogo} alt="ChatGPT Logo" className="tool-logo" />
          <p className="tool-desc">ChatGPT: Advanced AI language model for coding help, brainstorming, and automation.</p>
        </div>
        <div className="tool-logo-row">
          <img src={cursorlogo} alt="Cursor AI Logo" className="tool-logo" />
          <p className="tool-desc">Cursor AI: AI-powered code editor that boosts productivity with smart suggestions and automation.</p>
        </div>
        <div className="tool-logo-row">
          <img src={gitlogo} alt="Git Logo" className="tool-logo" />
          <p className="tool-desc">Git: Essential version control system for tracking code changes and collaborating on projects.</p>
        </div>
      </div>
    </div>
  );
}

export default Tools; 