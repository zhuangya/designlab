import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

import "./testpage.css"

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  useFrame(() => (mesh.current.rotation.x += 0.01))
  useFrame(() => (mesh.current.rotation.y += 0.02))

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1, 1, 1] : [0.5, 0.5, 0.5]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial attach="material" color={hovered ? 'yellow' : 'orange'} />
    </mesh>
  )
}

function Circle(props) {
  const mesh = useRef()
  useFrame(() => (mesh.current.rotation.x += 0.01))
  useFrame(() => (mesh.current.rotation.y += -0.02))
  return (
    <mesh
      {...props}
      ref={mesh}
      >
      <tetrahedronBufferGeometry attach="geometry" args={[0.25]}/>
      <meshStandardMaterial attach="material" color={"hotpink"} />
    </mesh>
  )
}

function Torus(props) {
  const mesh = useRef()
  useFrame(() => (mesh.current.rotation.x += -0.01))
  useFrame(() => (mesh.current.rotation.y += -0.02))
  return (
    <mesh
      {...props}
      ref={mesh}
      >
      <torusBufferGeometry attach="geometry" args={[0.15, 0.05, 0.05 , 100]} />
      <meshStandardMaterial attach="material" color={"aqua"} />
    </mesh>
  )
}

export default function App() {
  return (
    <div className="view">
      <Canvas colorManagement camera={{ position: [0, 0, 24], fov: 20 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        
        <Box position={[-2.5, 2.5, 0]} />
        <Circle position={[-1.5, 2.5, 0]} />
        <Torus position={[-0.5, 2.5, 0]} />
        <Box position={[0.5, 2.5, 0]} />
        <Circle position={[1.5, 2.5, 0]} />
        <Torus position={[2.5, 2.5, 0]} />
        {/* --- */}
        <Circle position={[-2.5, 1.5, 0]} />
        <Torus position={[-1.5, 1.5, 0]} />
        <Box position={[-0.5, 1.5, 0]} />
        <Circle position={[0.5, 1.5, 0]} />
        <Torus position={[1.5, 1.5, 0]} />
        <Box position={[2.5, 1.5, 0]} />
        {/* --- */}
        <Torus position={[-2.5, 0.5, 0]} />
        <Box position={[-1.5, 0.5, 0]} />
        <Circle position={[-0.5, 0.5, 0]} />
        <Torus position={[0.5, 0.5, 0]} />
        <Box position={[1.5, 0.5, 0]} />
        <Circle position={[2.5, 0.5, 0]} />
        {/* --- */}

        <Box position={[-2.5, -0.5, 0]} />
        <Circle position={[-1.5, -0.5, 0]} />
        <Torus position={[-0.5, -0.5, 0]} />
        <Box position={[0.5, -0.5, 0]} />
        <Circle position={[1.5, -0.5, 0]} />
        <Torus position={[2.5, -0.5, 0]} />
        {/* --- */}
        <Circle position={[-2.5, -1.5, 0]} />
        <Torus position={[-1.5, -1.5, 0]} />
        <Box position={[-0.5, -1.5, 0]} />
        <Circle position={[0.5, -1.5, 0]} />
        <Torus position={[1.5, -1.5, 0]} />
        <Box position={[2.5, -1.5, 0]} />
        {/* --- */}
        <Torus position={[-2.5, -2.5, 0]} />
        <Box position={[-1.5, -2.5, 0]} />
        <Circle position={[-0.5, -2.5, 0]} />
        <Torus position={[0.5, -2.5, 0]} />
        <Box position={[1.5, -2.5, 0]} />
        <Circle position={[2.5, -2.5, 0]} />


      </Canvas>
    </div>
  )
}