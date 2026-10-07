"use client";

import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;

  // hash / noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv * vec2(uResolution.x / uResolution.y, 1.0);
    vec2 m = uMouse * 0.5;

    float t = uTime * 0.06;

    // shifting flow field
    vec2 q = vec2(fbm(p + t + m), fbm(p - t + m));
    float n = fbm(p * 1.4 + q * 1.8 + t * 0.5);

    // color ramps — cyan / violet / indigo
    vec3 cCyan = vec3(0.13, 0.83, 0.93);
    vec3 cViolet = vec3(0.75, 0.52, 0.99);
    vec3 cIndigo = vec3(0.51, 0.55, 0.97);
    vec3 cBase = vec3(0.02, 0.02, 0.04);

    vec3 col = mix(cIndigo, cViolet, smoothstep(0.2, 0.7, n));
    col = mix(col, cCyan, smoothstep(0.55, 0.95, n) * 0.7);
    col = mix(cBase, col, smoothstep(0.15, 0.9, n));

    // radial falloff so edges dim to background
    float d = distance(uv, vec2(0.5));
    col *= smoothstep(1.05, 0.15, d);

    // subtle grain
    col += (hash(uv * uResolution.xy + t) - 0.5) * 0.015;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function AuroraPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(
          typeof window !== "undefined" ? window.innerWidth : 1,
          typeof window !== "undefined" ? window.innerHeight : 1,
        ),
      },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    [],
  );

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    materialRef.current.uniforms.uMouse.value.lerp(mouse.current, 0.06);
  });

  return (
    <mesh
      ref={meshRef}
      onPointerMove={(e: ThreeEvent<PointerEvent>) => {
        mouse.current.set(e.uv?.x ?? 0.5, e.uv?.y ?? 0.5);
      }}
    >
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-70 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,black_40%,transparent_100%)]"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        camera={{ position: [0, 0, 1] }}
      >
        <AuroraPlane />
      </Canvas>
    </div>
  );
}
