import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  useFrame(() => (mesh.current.rotation.x += 0.005));
  useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [0.5, 0.5, 0.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "yellow" : "orange"}
        roughness={0.5}
      />
    </mesh>
  );
}
function Triangle(props) {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x += 0.005));
  useFrame(() => (mesh.current.rotation.y += -0.01));
  return (
    <mesh {...props} ref={mesh}>
      <tetrahedronBufferGeometry attach="geometry" args={[0.8]} />
      <meshStandardMaterial
        attach="material"
        color={"hotpink"}
        roughness={0.5}
      />
    </mesh>
  );
}
function Torus(props) {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x += -0.005));
  useFrame(() => (mesh.current.rotation.y += -0.01));
  return (
    <mesh {...props} ref={mesh}>
      <torusBufferGeometry attach="geometry" args={[0.5, 0.16, 0.16, 100]} />
      <meshStandardMaterial attach="material" color={"#00B1AC"} roughness={0.5} />
    </mesh>
  );
}
export default function App() {
  return (
    <>
      <style>
        {`
        .view {
          position: absolute;
          width: 100%;
          height: 100%;
          right: 0;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 10;
        }
      `}
      </style>
      <div className="view">
        <Canvas colorManagement camera={{ position: [0, 0, 7], fov: 48 }}>
          <fog attach="fog" args={[0xfaff00, 0, 90]} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.4, 2.2, 0]} />
          <Torus position={[1.4, 0, 0]} />
          <Triangle position={[-1.4, -2.2, 0]} />
        </Canvas>
      </div>
    </>
  );
}
