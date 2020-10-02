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
  useFrame(() => (mesh.current.rotation.x += 0.01));
  useFrame(() => (mesh.current.rotation.y += 0.02));
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[0.6, 0.6, 0.6]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "#C58800" : "orange"}
        roughness={0.5}
      />
    </mesh>
  );
}
function Triangle(props) {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.x += 0.01));
  useFrame(() => (mesh.current.rotation.y += -0.02));
  return (
    <mesh {...props} ref={mesh}>
      <tetrahedronBufferGeometry attach="geometry" args={[0.5]} />
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
  useFrame(() => (mesh.current.rotation.x += -0.01));
  useFrame(() => (mesh.current.rotation.y += -0.02));
  return (
    <mesh {...props} ref={mesh}>
      <torusBufferGeometry attach="geometry" args={[0.3, 0.1, 0.1, 100]} />
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
        <Canvas colorManagement camera={{ position: [0, 0, 8], fov: 50 }}>
          <fog attach="fog" args={[0xfaff00, 0, 90]} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[0, 1.8, 0]} />
          <Torus position={[0, 0, 0]} />
          <Triangle position={[0, -1.6, 0]} />
        </Canvas>
      </div>
    </>
  );
}
