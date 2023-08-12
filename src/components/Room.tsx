/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 src/assets/room.glb -ts 
*/

import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, MeshDistortMaterial, Html } from "@react-three/drei";
import { A11y } from "@react-three/a11y";
import { GLTF } from "three-stdlib";
import { css } from "@emotion/css";

import gltfUrl from "../assets/room.glb?url";
import { useState } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Object_13: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_11: THREE.Mesh;
    Plane014: THREE.Mesh;
    Plane014_1: THREE.Mesh;
    Plane015: THREE.Mesh;
    Plane015_1: THREE.Mesh;
    Plane015_2: THREE.Mesh;
    Plane015_3: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Plane002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cylinder: THREE.Mesh;
  };
  materials: {
    leaf: THREE.MeshStandardMaterial;
    dirt: THREE.MeshStandardMaterial;
    bark_i_dunno_i_guess_thats_how_its_called: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    White: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
  };
};

function LeafDistortMaterial() {
  return (
    <MeshDistortMaterial
      speed={1}
      distort={0.5}
      color={[0.086, 0.58, 0.12]}
      roughness={0.3}
    />
  );
}

// Between x -2 (breaking point) and -42 (wide point)
// Between z 89 (breaking point) and 82 (wide point)

export default function Room(props: JSX.IntrinsicElements["group"]) {
  const [hidden, set] = useState(false);
  const camera = useThree((state) => state.camera);

  useFrame(() => {
    if (camera.position.x < -2.0 && camera.position.x > -42.0) {
      set(true);
    } else {
      set(false);
    }
  });

  const { nodes, materials } = useGLTF(gltfUrl) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[7.146, -0.51, 1.226]}
        rotation={[-Math.PI / 2, 0, 1.22]}
        scale={[0.599, 0.599, 1.17]}
      >
        <group
          position={[-0.303, 17.419, -1.743]}
          rotation={[0, 0, 0.641]}
          scale={[0.975, 0.975, 1.382]}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, 0.852, 0]} scale={0.854}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials.dirt}
                position={[0, 0.087, 0]}
                scale={0.543}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.leaf}
              position={[0.365, 2.984, -0.105]}
              rotation={[0, 1.146, 0]}
            >
              <LeafDistortMaterial />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.leaf}
              position={[0.144, 5.128, 0.629]}
            >
              <LeafDistortMaterial />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.leaf}
              position={[-0.596, 4.4, -0.245]}
              rotation={[-2.687, 1.381, 2.411]}
              scale={0.908}
            >
              <LeafDistortMaterial />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.bark_i_dunno_i_guess_thats_how_its_called}
              position={[-0.037, 1.411, -0.123]}
              rotation={[0, -0.9, 0]}
              scale={0.69}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_7.geometry}
              material={materials.bark_i_dunno_i_guess_thats_how_its_called}
              position={[0, 1.411, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_11.geometry}
              material={materials.bark_i_dunno_i_guess_thats_how_its_called}
              position={[0.02, 1.525, -0.052]}
              rotation={[0.987, 1.499, -1.008]}
              scale={0.291}
            />
          </group>
        </group>
      </group>
      <group position={[1.75, -1.384, 2.586]} scale={5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_1.geometry}
          material={materials.White}
        />
      </group>
      <group position={[1.75, -1.384, 2.586]} scale={5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_2.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015_3.geometry}
          material={materials.Black}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Black}
        position={[-1.847, 1.616, 1.415]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <Html
          className={css`
            background: #ffffff;
            opacity: ${hidden ? 0 : 1};
          `}
          castShadow
          receiveShadow
          occlude="blending"
          transform
          distanceFactor={4}
          position={[-0.12, 0.08, 0.12]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <iframe
            title="Documentation for react-three-fiber (r3f)"
            width={524}
            height={414}
            src="https://docs.pmnd.rs/react-three-fiber/getting-started/examples"
          />
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Black}
        position={[-2.348, 1.52, 1.5]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      >
        <Html
          className={css`
            background: #353535;
          `}
          castShadow
          receiveShadow
          occlude="blending"
          transform
          distanceFactor={4}
          position={[-0.12, 0.08, 0.12]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        >
          <iframe
            title="Homemade frontend for https://durot.co/"
            width={524}
            height={414}
            src="https://durot.co/"
          />
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Black}
        position={[-1.196, 0.887, -2.074]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.226, 0.056, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Black}
        position={[4.869, 2.774, -2.077]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.226, 0.056, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.Black}
        position={[1.689, 3.761, -2.454]}
        rotation={[0, 0, -Math.PI]}
        scale={[3.244, 0.056, 0.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials.Black}
        position={[0.358, 3.714, -1.87]}
        rotation={[0, 0, -Math.PI]}
        scale={[1.226, 0.056, 0.243]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Black}
        position={[-1.878, 1.977, 4.79]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[2.499, 0.056, 0.109]}
      />
      <A11y
        role="link"
        href="https://www.github.com/gmarcha"
        description="Github account"
        actionCall={() => {
          window.open("https://www.github.com/gmarcha", "_blank");
        }}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Material}
          position={[3.139, -1.384, 3.052]}
        />
      </A11y>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Black}
        position={[-1.11, -0.862, -3.4]}
        rotation={[0, 1.562, 0]}
        scale={[0.357, 0.522, 0.357]}
      />
    </group>
  );
}

useGLTF.preload(gltfUrl);
