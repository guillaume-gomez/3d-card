import { ReactNode } from "react";
import { extend } from '@react-three/fiber';
import { DoubleSide, BackSide, FrontSide } from 'three';
import { MeshPortalMaterial } from '@react-three/drei';
import { geometry } from 'maath';
import DepthBG from "./DepthBG";

extend(geometry);

interface PortalProps {
  width?: number;
  height?: number;
  depth?: number;
  children: ReactNode
}

function Portal({
  width = 1,
  height = 1,
  depth = 0.5,
  children, 
  ...props 
} : PortalProps) {
  return (
    <group {...props}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]}/>
        <MeshPortalMaterial side={DoubleSide}>
          <ambientLight/>
          <DepthBG width={width} height={height} depth={depth*5} />
          {children}
        </MeshPortalMaterial>
      </mesh>
      <mesh position={[0, 0, -0.001]} castShadow receiveShadow>
        <boxGeometry args={[width + 0.05, height + 0.05, depth]} />
        {/*<meshBasicMaterial side={BackSide}>*/}
        <meshLambertMaterial side={FrontSide} color="red"/>
      </mesh>
    </group>
  )
}

export default Portal;
