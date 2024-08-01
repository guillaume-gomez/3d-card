import { ReactNode } from "react";
import { DoubleSide, FrontSide } from 'three';
import { extend } from '@react-three/fiber';
import { MeshPortalMaterial, Text, FontData } from '@react-three/drei';
import { geometry } from 'maath';
import DepthBG from "./DepthBG";

extend(geometry);
const GOLDENRATIO = 1.61803398875;

interface FrameProps {
  name: string;
  width?: number;
  height?: number;
  depth?: number;
  children: ReactNode
}

function Frame({
  id,
  name,
  width = 1,
  height = GOLDENRATIO,
  depth = 0.5,
  children, 
  ...props 
} : FrameProps) {
  return (
    <group {...props}>
      <Text 
        font={'/azonix.woff'}
        color="red"
        fontSize={0.25}
        letterSpacing={0}
        anchorY="top"
        anchorX="left"
        lineHeight={0.8}
        position={[-0.375, 0.715, depth/2 + 0.01]}>
        {name}
      </Text>
      <mesh name={id} receiveShadow>
        <boxGeometry args={[width, height,depth]}/>
        <MeshPortalMaterial side={DoubleSide}>
          <ambientLight/>
          <DepthBG width={width} height={height} depth={depth*3} />
          {children}
        </MeshPortalMaterial>
      </mesh>
      <mesh name={id} position={[0, 0, -0.001]} castShadow>
        <boxGeometry args={[width + 0.05, height + 0.05, depth]} />
        <meshBasicMaterial color="blue" />
      </mesh>
    </group>
  )
}

export default Frame;
