"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef, useEffect, useState } from "react";

function Model({ scale }) {
  const { scene } = useGLTF("/models/butterfly.glb");
  const ref = useRef();

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
      ref.current.rotation.x = mouse.y * 0.1;
      ref.current.rotation.y += mouse.x * 0.1;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={scale}
      position={[0, 0, 0]}
    />
  );
}

export default function ButterflyScene() {
  const [scale, setScale] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 600) setScale(1.8);
      else if (window.innerWidth < 1024) setScale(2.5);
      else setScale(3.5);
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={bg}>
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 55 }}
      >
        {/* 🌌 LIGHTING */}
        <ambientLight intensity={0.25} />

        <pointLight position={[5, 5, 5]} intensity={3} color="#4da3ff" />
        <pointLight position={[-5, -5, -5]} intensity={2} color="#1a6cff" />

        {/* 🦋 BIG BACKGROUND BUTTERFLY */}
        <Model scale={scale} />

        {/* 💙 BLOOM GLOW */}
        <EffectComposer>
          <Bloom
            intensity={1.8}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

const bg = {
  position: "fixed",
  inset: 0,
  zIndex: -1,
};