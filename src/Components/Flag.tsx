import { MathUtils } from 'three'
import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { MeshDistortMaterial, GradientTexture, useCursor } from '@react-three/drei';
import { TextureLoader } from 'three/src/loaders/TextureLoader'

interface FlagProps {
  position?: [number, number, number]
}

function Flag({ position = [0,0,0] }) {
  const colorMap = useLoader(TextureLoader, 'france.png');
  const ref = useRef();
  useFrame(() => {
    ref.current.distort = MathUtils.lerp(ref.current.distort,  0.4 ,  0.05 );
  })
  return (
    <mesh
      scale={[10, 5, 1]}
      position={position}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <MeshDistortMaterial ref={ref} speed={5} map={colorMap}>
      </MeshDistortMaterial>
    </mesh>
  )
}

export default Flag