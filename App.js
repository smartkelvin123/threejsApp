import React, { Suspense, useRef, useState, useLayoutEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber/native";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "expo-three";

function Box(props) {
  const meshRef = useRef(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (active) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Shoe() {
  const [base, normal, rough] = useLoader(TextureLoader, [
    require("./assets/Airmax/textures/BaseColor.jpg"),
    require("./assets/Airmax/textures/Normal.jpg"),
    require("./assets/Airmax/textures/Roughness.png"),
  ]);
  const material = useLoader(MTLLoader, "./assets/Airmax/shoe.mtl");
  const obj = useLoader(
    OBJLoader,
    require("./assets/Airmax/shoe.obj"),
    (loader) => {
      material.preload();
      loader.setMaterials(material);
    }
  );

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = base;
        child.material.normalMap = normal;
        child.material.roughnessMap = rough;
      }
    });
  }, [obj]);

  return (
    <mesh rotation={[1, 0, 0]}>
      <primitive object={obj} scale={10} />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Suspense fallback={null}>
        <Shoe />
      </Suspense>

      {/* <Box position={[0, -1, 0]} />
      <Box position={[0, 0, 0]} />
      <Box position={[0, 1, 0]} />
      <Box position={[0, 2, 0]} /> */}
    </Canvas>
  );
}
