import { ReactNode } from "react";
import { DoubleSide } from 'three';
import { extend } from '@react-three/fiber';
import { MeshPortalMaterial, Text} from '@react-three/drei';
import { geometry } from 'maath';
import DepthBG from "./DepthBG";

extend(geometry);
const GOLDENRATIO = 1.61803398875;

interface FrameProps {
  id: string;
  name: string;
  author: string;
  width?: number;
  height?: number;
  depth?: number;
  children: ReactNode
}

function Frame({
  id,
  name,
  author,
  width = 1,
  height = GOLDENRATIO,
  depth = 0.5,
  children, 
  ...props 
} : FrameProps) {
  return (
    <group {...props}>
      <Text 
        color="red"
        fontSize={0.25}
        letterSpacing={-0.025}
        anchorY="top"
        anchorX="left"
        lineHeight={0.8}
        position={[-0.375, 0.715, depth/2 + 0.01]}>
        {name}
      </Text>
      <Text color="red" fontSize={0.1} anchorX="right" position={[0.4, -0.659, depth/2 + 0.01]}>
        /{id}
      </Text>
      <Text color="red" fontSize={0.04} anchorX="left" position={[0.0, -0.677, depth/2 + 0.01]}>
        {author}
      </Text>
      <mesh name={id}>
        <boxGeometry args={[width, height,depth]} />
        <MeshPortalMaterial side={DoubleSide}>
          <ambientLight/>
          <DepthBG width={width} height={height} depth={depth*3} />
          {children}
        </MeshPortalMaterial>
      </mesh>
      <mesh name={id} position={[0, 0, -0.001]}>
        <boxGeometry args={[width + 0.05, height + 0.05, depth]} />
        <meshBasicMaterial color="blue" />
      </mesh>
    </group>
  )
}

export default Frame;
