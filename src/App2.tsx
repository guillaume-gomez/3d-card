import * as THREE from 'three'
import { Canvas, extend } from '@react-three/fiber'
import { useGLTF, MeshPortalMaterial, CameraControls, Text, Sky, Gltf } from '@react-three/drei'
import { easing, geometry } from 'maath';
import Model from "./Model";

extend(geometry);
const GOLDENRATIO = 1.61803398875;


function App() {
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
      <CameraControls makeDefault minAzimuthAngle={-Math.PI / 2.5} maxAzimuthAngle={Math.PI / 2.5} minPolarAngle={0.5} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  );
}
export default App;

function Frame({ id, name, author, bg, width = 1, height = GOLDENRATIO, children, ...props }) {
  return (
    <group {...props}>
      <Text color="black" fontSize={0.25} letterSpacing={-0.025} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]}>
        {name}
      </Text>
      <Text color="black" fontSize={0.1} anchorX="right" position={[0.4, -0.659, 0.01]}>
        /{id}
      </Text>
      <Text color="black" fontSize={0.04} anchorX="left" position={[0.0, -0.677, 0.01]}>
        {author}
      </Text>
      <mesh name={id}>
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        <MeshPortalMaterial side={THREE.DoubleSide}>
        {children}
        </MeshPortalMaterial>
      </mesh>
      <mesh name={id} position={[0, 0, -0.001]}>
        <roundedPlaneGeometry args={[width + 0.05, height + 0.05, 0.12]} />
        <meshBasicMaterial color="black" />
      </mesh>
    </group>
  )
}