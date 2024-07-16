import {
  shaderMaterial,
} from "@react-three/drei";
import {  extend } from "@react-three/fiber";
import { BackSide } from "three";

interface DepthBGProps {
  width: number;
  height: number;
  depth: number;
}

function DepthBG({width, height, depth}: DepthBGProps) {
  const StripeMaterial = shaderMaterial(
    {},
    // vertex shader
    /*glsl*/ `
      varying vec2 vUv;
      varying vec3 vPosition;
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    // fragment shader
    /*glsl*/ `
      uniform float time;
      uniform vec3 color;
      varying vec2 vUv;
      varying vec3 vPosition;
      void main() {
        float stripes = smoothstep(0.95,1., sin(vPosition.z * 30.0 ));
        float fadeOut = smoothstep(-0.9, 0.1, vPosition.z);
        gl_FragColor.rgba = vec4(fadeOut*0.2*vec3(stripes), 1.0);
      }
    `,
  );

  extend({ StripeMaterial });

  return (
    <mesh>
      <boxGeometry position={[0, 0, 0.8]} args={[width, height, depth]} />
      <stripeMaterial color="hotpink" time={1} side={BackSide} />
    </mesh>
  );
}

export default DepthBG;