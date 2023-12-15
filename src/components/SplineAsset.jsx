// import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

const SplineAsset = () => {
  return (
    <div style={{ width: "100%", height: "200px" }}>
      <Suspense fallback={<div style={{ fontSize: "2rem" }}>Loading...</div>}>
        <Spline scene="https://prod.spline.design/ogVCPWrdaPG4r2zy/scene.splinecode" />
      </Suspense>
    </div>
  );
};

export default SplineAsset;

/*
  Auto-generated by Spline
*/

// import useSpline from "@splinetool/r3f-spline";
// import { OrbitControls, OrthographicCamera, Preload } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";

// function Scene({ ...props }) {
//   const { nodes, materials } = useSpline(
//     "https://prod.spline.design/ogVCPWrdaPG4r2zy/scene.splinecode"
//   );
//   return (
//     <>
//       <color attach="background" args={["#eeeff0"]} />
//       <group {...props} dispose={null}>
//         <scene name="Scene 1">
//           <mesh
//             name="Rectangle"
//             geometry={nodes.Rectangle.geometry}
//             material={materials["Rectangle Material"]}
//             castShadow
//             receiveShadow
//             position={[0, 0, 1]}
//           />
//           <mesh
//             name="Text"
//             geometry={nodes.Text.geometry}
//             material={materials["Text Material"]}
//             castShadow
//             receiveShadow
//             position={[0, 4, 40]}
//             rotation={[0.2, 0, 0]}
//           />
//           <directionalLight
//             name="Directional Light"
//             castShadow
//             intensity={0.7}
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//             shadow-camera-near={-10000}
//             shadow-camera-far={100000}
//             shadow-camera-left={-1000}
//             shadow-camera-right={1000}
//             shadow-camera-top={1000}
//             shadow-camera-bottom={-1000}
//             position={[173.54, 88, 300]}
//             scale={[1, 1, 1.93]}
//           />
//           <OrthographicCamera
//             name="1"
//             makeDefault={true}
//             far={10000}
//             near={-50000}
//           />
//           <hemisphereLight
//             name="Default Ambient Light"
//             intensity={0.75}
//             color="#eaeaea"
//           />
//         </scene>
//       </group>
//     </>
//   );
// }

// const SplineAsset = () => {
//   <Canvas shadows flat linear>
//     <Suspense fallback={null}>
//       <OrbitControls
//         enableZoom={false}
//         maxPolarAngle={Math.PI / 2}
//         minPolarAngle={Math.PI / 2}
//       />
//       <Scene />
//     </Suspense>

//     <Preload all />
//   </Canvas>;
// };

// export default SplineAsset;