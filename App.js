import { Canvas } from "@react-three/fiber/native";

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh position={[-1, -1, 0]}>
        <torusKnotGeometry />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </Canvas>
  );
}

// import React, { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber/native";

// function Box(props) {
//   const meshRef = useRef(null);
//   const [hovered, setHover] = useState(false);
//   const [active, setActive] = useState(false);
//   useFrame((state, delta) => (meshRef.current.rotation.x += 0.01));
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
//     </mesh>
//   );
// }

// export default function App() {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Box position={[-1.2, 0, 0]} />
//       <Box position={[1.2, 0, 0]} />
//     </Canvas>
//   );
// }
