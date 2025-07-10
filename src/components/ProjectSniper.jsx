import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function SniperModel() {
  const obj = useLoader(OBJLoader, '/Portfolio-Website/3d-models/sniper-model.obj');
  return <primitive object={obj} scale={1.5} />;
}

function ProjectSniper() {
  return (
    <div className="sniper-viewer-container">
      <h1>Sci-Fi Sniper</h1>
      <p>3D model of a futuristic sniper rifle. Explore the model below!</p>
      <div className="sniper-canvas-wrapper">
        <Canvas camera={{ position: [0, 2, 12], fov: 50 }} style={{ height: 400, background: '#181818', borderRadius: 16 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <SniperModel />
          <OrbitControls
            target={[0, 0, 0]}
            maxDistance={30}
            minDistance={5}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
        </Canvas>
      </div>
      <div className="sniper-images-container">
        <div className="sniper-image-box">
          <img src="/Portfolio-Website/3d-projects-renders/sniper-render1.png" alt="Sniper Render 1" className="sniper-image" />
        </div>
        <div className="sniper-image-box">
          <img src="/Portfolio-Website/3d-projects-renders/sniper-render2.png" alt="Sniper Render 2" className="sniper-image" />
        </div>
      </div>
      <p className="sniper-description">
        A high-tech, stylized sniper rifle designed for sci-fi settings. This model features intricate details, glowing accents, and is optimized for real-time rendering in games or animation.
      </p>
    </div>
  );
}

export default ProjectSniper;