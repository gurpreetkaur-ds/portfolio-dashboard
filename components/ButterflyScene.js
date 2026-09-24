"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";


function ButterflyModel() {
  const { scene, animations } =
    useGLTF("/models/butterfly.glb");

  const groupRef = useRef(null);
  const mixerRef = useRef(null);


  useEffect(() => {

    /*
     * ==========================================
     * KEEP ORIGINAL TEXTURE
     * ==========================================
     *
     * The texture already contains the black
     * butterfly body and black wing patterns.
     *
     * We DO NOT remove material.map.
     */

    scene.traverse((object) => {

      if (!object.isMesh || !object.material) {
        return;
      }

      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];


      materials.forEach((material) => {

        /*
         * Make sure the original texture stays.
         */
        if (!material.map) {
          return;
        }


        /*
         * White material color so we can work
         * directly with the original texture.
         */
        material.color =
          new THREE.Color("#ffffff");


        /*
         * Blue glow.
         */
        material.emissive =
          new THREE.Color("#006eff");

        material.emissiveIntensity = 0.25;


        material.metalness = 0.12;
        material.roughness = 0.42;


        /*
         * ======================================
         * BLUE WINGS / BLACK PATTERN SHADER
         * ======================================
         *
         * Dark pixels from the original texture
         * remain BLACK.
         *
         * Bright orange/yellow areas become BLUE.
         */

        material.onBeforeCompile = (shader) => {

          shader.fragmentShader =
            shader.fragmentShader.replace(
              "#include <map_fragment>",

              `
              #include <map_fragment>

              /*
               * Calculate brightness of original
               * texture.
               */
              float textureBrightness =
                  dot(
                    diffuseColor.rgb,
                    vec3(
                      0.299,
                      0.587,
                      0.114
                    )
                  );


              /*
               * Dark parts of original texture.
               *
               * These are the butterfly's black
               * body and black wing patterns.
               */
              float blackMask =
                  1.0 -
                  smoothstep(
                    0.08,
                    0.25,
                    textureBrightness
                  );


              /*
               * Futuristic blue.
               */
              vec3 blue =
                  vec3(
                    0.015,
                    0.38,
                    1.0
                  );


              /*
               * Preserve brightness from the
               * original texture.
               */
              vec3 blueWing =
                  blue *
                  max(
                    textureBrightness * 2.0,
                    0.35
                  );


              /*
               * Mix:
               *
               * BLACK original areas
               * +
               * BLUE wing areas
               */
              diffuseColor.rgb =
                  mix(
                    blueWing,
                    vec3(
                      0.002,
                      0.004,
                      0.008
                    ),
                    blackMask
                  );
              `
            );
        };


        material.needsUpdate = true;

      });

    });


    /*
     * ==========================================
     * REAL GLB WING ANIMATION
     * ==========================================
     */

    if (animations.length > 0) {

      mixerRef.current =
        new THREE.AnimationMixer(scene);


      /*
       * Use "idle" animation if available.
       */
      const idleAnimation =
        animations.find(
          (animation) =>
            animation.name
              .toLowerCase() === "idle"
        ) ||
        animations[0];


      const action =
        mixerRef.current.clipAction(
          idleAnimation
        );


      action.reset();

      action.setLoop(
        THREE.LoopRepeat,
        Infinity
      );

      action.play();

    }


    return () => {

      if (mixerRef.current) {

        mixerRef.current.stopAllAction();

        mixerRef.current = null;

      }

    };

  }, [scene, animations]);


  /*
   * ==========================================
   * ANIMATION
   * ==========================================
   */

  useFrame((state, delta) => {

    const time =
      state.clock.getElapsedTime();


    /*
     * Keep the actual GLB wing animation running.
     */
    if (mixerRef.current) {

      mixerRef.current.update(delta);

    }


    if (groupRef.current) {

      /*
       * ========================================
       * WHOLE BUTTERFLY ROTATION
       * ========================================
       *
       * Slow enough that the butterfly does
       * not disappear constantly.
       */

      groupRef.current.rotation.y =
        time * 0.16;


      /*
       * Small natural tilt.
       */

      groupRef.current.rotation.z =
        Math.sin(time * 0.5) * 0.025;


      /*
       * Floating.
       */

      groupRef.current.position.y =
        Math.sin(time * 0.8) * 0.035;

    }

  });


  return (

    <group
      ref={groupRef}
      scale={10}
      position={[0, 0, 0]}
    >

      <primitive object={scene} />

    </group>

  );

}


/*
 * ============================================
 * BUTTERFLY SCENE
 * ============================================
 */

export default function ButterflyScene() {

  return (

    <div className="butterfly-scene">

      <Canvas
        camera={{
          position: [0, 0, 2.5],
          fov: 40,
          near: 0.01,
          far: 100,
        }}

        dpr={[1, 2]}

        gl={{
          alpha: true,
          antialias: true,
          powerPreference:
            "high-performance",
        }}
      >

        <ambientLight
          intensity={0.65}
        />


        <pointLight
          position={[2, 2, 3]}
          intensity={3}
          distance={8}
          color="#168cff"
        />


        <pointLight
          position={[-2, -1, 2]}
          intensity={2}
          distance={6}
          color="#00c8ff"
        />


        <ButterflyModel />

      </Canvas>

    </div>

  );

}


useGLTF.preload(
  "/models/butterfly.glb"
);