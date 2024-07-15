import { useEffect, useState, RefObject } from "react";
import { Vector3, Box3, Group, DoubleSide, Plane } from "three";
import { Sky, useGLTF } from '@react-three/drei';

interface ModelProps {
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
  path: string;
  visible?: boolean;
  clip?: boolean;
}

const zPlane = new Plane(new Vector3(0, 0, 1), 0);
const yPlane = new Plane(new Vector3(0, 1, 0), 1);

function Model({
  position,
  rotation,
  scale,
  path,
  clip = false,
  visible = true
}: ModelProps) {
  console.log(path)
  const { scene } = useGLTF(path);

  return (
    <primitive
      position={position}
      rotation={rotation}
      scale={scale}
      object={scene}
      visible={visible}
      side={DoubleSide}
      clippingPlanes={clip ? [zPlane, yPlane] : null}
    />
  );
}

export default Model;