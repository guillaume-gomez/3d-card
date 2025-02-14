import {  useState } from "react";
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { CameraControls, Sky, Gltf, Plane, Center, Lightformer, Stats } from '@react-three/drei';

import SkyBox from "./SkyBox";
import Portal from "./Portal";
import Flag from "./Flag";

const AnimatedGltf = animated(Gltf);


interface ModelConfiguration {
  src: string;
  position: [number, number, number];
  scale: number;
}

const modelsConfiguration : ModelConfiguration[] = [
  { src: "Donut.glb", position: [0, -0.1,    -0.5], scale: 0.1 },
  { src: "Hamburger.glb", position: [0, -0.5, -0.5], scale: 0.08 },
]

function ThreeJsRendering() {
  const [indexVisible, setIndexVisible] = useState<number>(0);
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
      receiveShadow
      style={{width: 800, height: 800}}
      gl={{ localClippingEnabled: true }}
      camera={{ fov: 75, position: [0, 0, 10] }}
    >
      <color attach="background" args={['grey']} />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[2.5, 5, 5]} intensity={1.5} shadow-mapSize={[1024, 1024]}>
        <orthographicCamera attach="shadow-camera" args={[-5, 5, 5, -5, 1, 50]} />
      </directionalLight>

      <spotLight args={["#FFFFFF",100]} position={[2, 3, 0]} castShadow />
      <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 10, 0]} scale={[10, 2, 1]} />


      <Center>
        <Portal position={[0,0,0]} width={10} height={10} rotation-y={Math.PI}>
          <Sky />
          <AnimatedGltf src="Fence.glb" position={[-22.5, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[-15, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[-7.5, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[0, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[7.5, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[15, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[22.5, -0.1, -10]} scale={1.0} visible={true} />
          {/*<AnimatedGltf src="Another_soldier.glb" position={[0, 0, -15]} scale={0.15} visible={true} />*/}
          <AnimatedGltf src="Soldier.glb" position={[0, 0, -15]} scale={1} visible={true} />
          <AnimatedGltf src="Man.glb" position={[0, 0, 2]} rotation-y={Math.PI} scale={1} visible={true} />
          <Flag position={[0,5,-20]} flagPath="flags/North_Korea.png" />
        </Portal>
        <Portal position={[5,0,0.25]} width={1} height={1} rotation-y={Math.PI/2}>
          <Sky />
          <AnimatedGltf src="Donut.glb" position={[0, -0.1, 0]} scale={props.scale} visible={true} />
        </Portal>
        <Portal position={[0,0,0.5]} width={10} height={10} >
          <Sky />
          <AnimatedGltf src="Fence.glb" position={[-22.5, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[-15, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[-7.5, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[0, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[7.5, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[15, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Fence.glb" position={[22.5, -0.1, -10]} scale={1.0} visible={true} />
          <AnimatedGltf src="Another_soldier.glb" position={[0, 0, -15]} scale={0.15} visible={true} />
          <AnimatedGltf src="Man.glb" position={[0, 0, 2]} rotation-y={Math.PI} scale={1} visible={true} />
          <Flag position={[0,5,-20]} flagPath="flags/South_Korea.png" />

          {/*{
          modelsConfiguration.map(({src, position, scale}, index) => {
            return (<Gltf src={src} position={position} scale={scale} visible={indexVisible === index} />)
          })*/}
        }
        </Portal>
      </Center>
      <Plane
        receiveShadow
        position={[0,-2,0]}
        rotation={[-Math.PI/2,0,0]}
        args={[100,100]}
      >
        <meshStandardMaterial color="orange" />
      </Plane>
      <CameraControls
        minPolarAngle={0.5}
        maxPolarAngle={Math.PI / 2}
        maxDistance={10}
        onEnd={(e) => {
            const cameraPosition = e.target._camera;
            if(cameraPosition.position.z < 0.1) {
                setIndexVisible(indexVisible === 0 ? 1 : 0);
            }
          }
        }
      />
      <Stats/>
    </Canvas>
  );
}
export default ThreeJsRendering;
