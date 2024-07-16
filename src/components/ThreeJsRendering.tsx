import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { CameraControls, Sky, Gltf } from '@react-three/drei'

import Frame from "./Frame";

function ThreeJsRendering() {
  return (
    <Canvas
      style={{width: 500, height: 500}}
      gl={{ localClippingEnabled: true }}
      camera={{ fov: 75, position: [0, 0, 1.5] }}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
    >
      <color attach="background" args={['#f0f0f0']} />
      <Frame id="01" name="toto" author="Jesse">
        <Sky />
        <Gltf src="Donut.glb" position={[0, -0.1, 0]}  scale={0.1} />
      </Frame>
      <CameraControls makeDefault /> {/*minAzimuthAngle={-Math.PI / 2.5} maxAzimuthAngle={Math.PI / 2.5} minPolarAngle={0.5} maxPolarAngle={Math.PI / 2}*/} />
    </Canvas>
  );
}
export default ThreeJsRendering;
