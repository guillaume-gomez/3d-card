import {  useState } from "react";
import { Canvas } from '@react-three/fiber';
import { CameraControls, Sky, Gltf } from '@react-three/drei';

import Frame from "./Frame";

function ThreeJsRendering() {
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <Canvas
      style={{width: 800, height: 800}}
      gl={{ localClippingEnabled: true }}
      camera={{ fov: 75, position: [0, 0, 1.5] }}
    >
      <color attach="background" args={['#f0f0f0']} />
      <Frame id="01" name="toto" author="Jesse">
        <Sky />
        <Gltf src="Donut.glb" position={[0, -0.1, 0]} scale={0.1} visible={visible} />
      </Frame>
      <CameraControls
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
        minPolarAngle={0.5}
        maxPolarAngle={Math.PI / 2}
        maxDistance={10}
        onEnd={(e) => {
            const cameraPosition = e.target._camera;
            if(cameraPosition.position.z < 0.1) {
                setVisible(!visible);
            }
          }
        }
      />
    </Canvas>
  );
}
export default ThreeJsRendering;
