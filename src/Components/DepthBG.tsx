import { useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import { BackSide, Color } from "three";

interface DepthBGProps {
  width: number;
  height: number;
  depth: number;
  animate?: boolean;
  color: string;
}

function changeColor(color: Color) : string {
  console.log(color);

}

function DepthBG({width, height, depth, animate = false, color = "hsl(0, 100%, 50%)"}: DepthBGProps) {
  const StripeMaterial = shaderMaterial(
    { time: 0.0, color: new Color(0.2, 0.0, 0.1), lineHeight: 1.0 },
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
      uniform float lineHeight;
      uniform vec3 color;
      varying vec2 vUv;
      varying vec3 vPosition;
      void main() {
        float stripes = smoothstep(0.95 ,1., cos(vPosition.z * 50.0) * lineHeight);
        float fadeOut = smoothstep(-0.95, 0.1, vPosition.z);
        gl_FragColor.rgba = vec4(fadeOut*0.2*vec3(stripes)*color, 1.0);
      }
    `,
  );

  extend({ StripeMaterial });

  useFrame((_state, delta) => {
    if(animate) {
      //changeColor(stripeMaterialRef.current.uniforms.color);

      let hslColor = new Color();
      stripeMaterialRef.current.uniforms.color.value.getHSL(hslColor);
      hslColor.setHSL((hslColor.h + delta/10) % 100, 0.5, 0.5);
      stripeMaterialRef.current.uniforms.color.value = hslColor;

      //mesh.current.rotation.x = mesh.current.rotation.y += delta
      //const newTime = (stripeMaterialRef.current.uniforms.time.value +  0.1);
      //stripeMaterialRef.current.uniforms.time.value = newTime;
    }
  });
  const stripeMaterialRef = useRef();

  return (
    <mesh>
      <boxGeometry position={[0, 0, 0.8]} args={[width, height, depth]} />
      <stripeMaterial
        ref={stripeMaterialRef}
        color={color}
        time={1}
        side={BackSide}
        lineHeight={1.25}
      />
    </mesh>
  );
}

export default DepthBG;