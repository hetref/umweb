/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 calender.gltf 
Author: rikugo.studio (https://sketchfab.com/rikugo.studio)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/simple-calendar-023e3d2170f54b219d4d44bea2075f36
Title: Simple Calendar
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import PropTypes from "prop-types";

export default function Model({ isMobile }) {
  // const { nodes, materials } = useGLTF("/calender.gltf");
  const calender = useGLTF("/calender.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <spotLight
        position={[0, 0, 0]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={calender.scene}
        scale={isMobile ? 22 : 20}
        position={isMobile ? [0, -1.5, 0] : [0, -1, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
    // <group {...props} dispose={null}>
    //   <group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
    //     <group rotation={[Math.PI / 2, 0, 0]}>
    //       <mesh
    //         geometry={nodes.Object_4.geometry}
    //         material={materials.Papan}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_6.geometry}
    //         material={materials.Paper}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_8.geometry}
    //         material={materials.Tanggalan_1}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_10.geometry}
    //         material={materials.Tanggalan_1}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_12.geometry}
    //         material={materials.Tanggalan_2}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_14.geometry}
    //         material={materials.Tanggalan_2}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_16.geometry}
    //         material={materials.Tanggalan_2}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_18.geometry}
    //         material={materials.Tanggalan_2}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_20.geometry}
    //         material={materials.Tanggalan_2}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_22.geometry}
    //         material={materials.Tanggalan_2}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_24.geometry}
    //         material={materials.Tanggalan_2}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_26.geometry}
    //         material={materials.Tanggalan_2}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_28.geometry}
    //         material={materials.Tanggalan_2}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_30.geometry}
    //         material={materials.Tanggalan_1}
    //         position={[0, 0, 0.046]}
    //         rotation={[-0.308, 0, 0]}
    //       />
    //       <mesh
    //         geometry={nodes.Object_32.geometry}
    //         material={materials.Ring}
    //         position={[-0.045, 0.129, 0]}
    //         rotation={[0, 0, -Math.PI / 2]}
    //         scale={0.204}
    //       />
    //       <mesh
    //         geometry={nodes.Object_34.geometry}
    //         material={materials.Ring}
    //         position={[0.045, 0.129, 0]}
    //         rotation={[0, 0, -Math.PI / 2]}
    //         scale={0.204}
    //       />
    //     </group>
    //   </group>
    // </group>
  );
}

Model.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

useGLTF.preload("/calender.gltf");
