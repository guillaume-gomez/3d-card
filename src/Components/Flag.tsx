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
  const [hovered, hover] = useState<boolean>(false);
  console.log(colorMap)
  useCursor(hovered)
  /*useFrame(() => {
    ref.current.distort = MathUtils.lerp(ref.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
  })*/
  return (
    <mesh
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      scale={[2, 4, 1]}
      position={position}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <meshBasicMaterial map={colorMap} />
      {/*<MeshDistortMaterial ref={ref} speed={5}>
      </MeshDistortMaterial>*/}
    </mesh>
  )
}

export default Flag