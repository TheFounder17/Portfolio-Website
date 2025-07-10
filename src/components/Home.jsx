import profilePlaceholder from '../assets/react.svg'

function Home() {
  return (
    <div className="home-container">
      <img
        src="public\home-image.png"
        alt="Profile"
        className="profile-pic"
      />
      <h2 className="profile-name">Martin Iliyanov Djambazov</h2>
      <p className="profile-intro">Yo, wasup! I'm a professional 3D artist and programming scholar</p>
    </div>
  )
}

export default Home 