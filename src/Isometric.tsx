import { useGLTF } from "@react-three/drei";

function Isometric(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials }: any = useGLTF("/isometric.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-4.116, -0.395, 8.862]}
        rotation={[-Math.PI / 2, 0, -0.342]}
        scale={[0.599, 0.599, 1.17]}
      >
        <group
          position={[-0.303, 17.419, -1.743]}
          rotation={[0, 0, 0.641]}
          scale={[0.706, 0.706, 1]}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.leaf}
              position={[0.365, 2.984, -0.105]}
              rotation={[0, 1.146, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_15.geometry}
              material={materials.leaf}
              position={[0.144, 5.128, 0.629]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_17.geometry}
              material={materials.leaf}
              position={[-0.596, 4.4, -0.245]}
              rotation={[-2.687, 1.381, 2.411]}
              scale={0.908}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.dirt}
              position={[0, 0.852, 0]}
              scale={0.854}
            />
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
        position={[-1.747, 1.616, 1.415]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Black}
        position={[0.441, -0.862, 0.567]}
        scale={[0.357, 0.522, 0.357]}
      />
    </group>
  );
}

useGLTF.preload("/isometric.glb");

export default Isometric;
