'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

// ה-Shader עצמו: קוד GLSL שיוצר את "הנוזל"
const fragmentShader = `
uniform float uTime;
uniform vec3 uColorStart;
uniform vec3 uColorEnd;
varying vec2 vUv;

// פונקציית "רעש" ליצירת תנועה טבעית
float noise(vec2 p) {
  return sin(p.x * 10.0 + uTime) * sin(p.y * 10.0 + uTime);
}

void main() {
  vec2 uv = vUv;
  float n = noise(uv + uTime * 0.1);
  
  // ערבוב צבעים דינמי
  vec3 color = mix(uColorStart, uColorEnd, n * 0.5 + 0.5);
  
  // הוספת "ערפל"
  float alpha = 0.4 + 0.1 * sin(uTime * 0.5);
  gl_FragColor = vec4(color, alpha);
}
`;

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

function FluidPlane() {
  const mesh = useRef<THREE.Mesh>(null);
  
  // משתנים שמועברים ל-GPU
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColorStart: { value: new THREE.Color('#0a0a0a') }, // שחור עמוק
    uColorEnd: { value: new THREE.Color('#1a237e') },   // כחול ניאון עמוק
  }), []);

  // לולאת האנימציה - רצה כל פריים
  useFrame((state) => {
    if (mesh.current) {
      const material = mesh.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh} scale={[10, 10, 1]}>
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
}

export default function AtmosphereBackground() {
  return (
    <div className="fixed inset-0 -z-50 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <FluidPlane />
      </Canvas>
    </div>
  );
}
