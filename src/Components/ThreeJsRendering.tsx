import {  useState } from "react";
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { CameraControls, Sky, Gltf, Plane, Center, Lightformer } from '@react-three/drei';

import SkyBox from "./SkyBox";
import Frame from "./Frame";

const AnimatedGltf = animated(Gltf);

function ThreeJsRendering() {
  const [visible, setVisible] = useState<boolean>(true);
  const props = useSpring({
    from: { scale: 0.05 },
    to: [
      { scale: 0.08 },
      { scale: 0.1 },
      { scale: 0.05 }
    ],
    config: {
      duration: 1000,
    },
    loop: true
  });

  return (
    <Canvas
      style={{width: 800, height: 800}}
      gl={{ localClippingEnabled: true }}
      camera={{ fov: 75, position: [0, 0, 1.5] }}
    >
      <color attach="background" args={['#f0f0f0']} />
      <SkyBox  size={100} />
      <spotLight args={["#FFFFFF",100]} position={[2, 3, 0]} castShadow />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 6, 0]} scale={[10, 2, 1]} />


      <Center>
        <Frame id="01" name="Alice" author="Jesse" position={[-3,0,0]}>
          <Sky />
          <AnimatedGltf src="Donut.glb" position={[0, -0.1, 0]} scale={props.scale} visible={visible} />
        </Frame>
        <Frame id="02" name="Guillaume" author="paulo" position={[-1,0,0]}>
          <Sky />
          <AnimatedGltf src="Donut.glb" position={[0, -0.1, 0]} scale={props.scale} visible={visible} />
        </Frame>
      </Center>
      <Plane
        material-color="#2D1D7A"
        position={[0,-2,0]}
        rotation={[-Math.PI/2,0,0]}
        args={[100,100]}
      />
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
