import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Environment,
  useGLTF,
  Float,
  Stars,
  OrbitControls,
  MeshDistortMaterial,
  Sparkles,
} from '@react-three/drei'
import * as THREE from 'three'

// Glowing wireframe fallback shown while model loads
function WireframeFallback() {
  const meshRef = useRef()
  const innerRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.3
      meshRef.current.rotation.y = t * 0.5
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.2
      innerRef.current.rotation.y = t * 0.4
      innerRef.current.rotation.z = t * 0.1
    }
  })

  return (
    <group>
      {/* Outer wireframe box */}
      <mesh ref={meshRef}>
        <boxGeometry args={[2.5, 0.6, 1.4]} />
        <meshBasicMaterial color="#00f5ff" wireframe opacity={0.6} transparent />
      </mesh>
      {/* Inner distorted sphere */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.8, 2]} />
        <MeshDistortMaterial
          color="#0080ff"
          wireframe
          distort={0.4}
          speed={2}
          opacity={0.4}
          transparent
        />
      </mesh>
      {/* Wing-like planes */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[4, 0.05, 0.5]} />
        <meshBasicMaterial color="#ff00ff" wireframe opacity={0.4} transparent />
      </mesh>
    </group>
  )
}

// The actual drone model component
function DroneModel() {
  const { scene } = useGLTF('/lark.glb')
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle bobbing
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.15
      // Slow auto-rotation
      groupRef.current.rotation.y += 0.003
    }
  })

  // Apply emissive glow to all meshes in the model
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      if (child.material) {
        child.material.envMapIntensity = 2
      }
    }
  })

  return (
    <group ref={groupRef} scale={[1.5, 1.5, 1.5]}>
      <primitive object={scene} />
    </group>
  )
}

// Floating particles that look like sensor data points
function DataParticles() {
  const count = 80
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5
  }

  const pointsRef = useRef()
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00f5ff"
        size={0.04}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Animated grid plane
function GridPlane() {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.material.opacity =
        0.08 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.03
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]}>
      <planeGeometry args={[40, 40, 30, 30]} />
      <meshBasicMaterial
        color="#00f5ff"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  )
}

// Orbiting ring
function OrbitRing({ radius = 3, speed = 0.4, color = '#00f5ff', tilt = 0.3 }) {
  const ringRef = useRef()
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * speed
    }
  })

  return (
    <mesh ref={ringRef} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.008, 8, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.35} />
    </mesh>
  )
}

// Main scene content
function SceneContent() {
  return (
    <>
      {/* Ambient environment */}
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-3, 2, 2]} intensity={2} color="#00f5ff" distance={10} />
      <pointLight position={[3, -2, -2]} intensity={1.5} color="#ff00ff" distance={8} />

      {/* Stars background */}
      <Stars
        radius={80}
        depth={50}
        count={3000}
        factor={3}
        saturation={0.5}
        fade
        speed={0.5}
      />

      {/* Sparkles around the drone */}
      <Sparkles
        count={60}
        scale={6}
        size={1.5}
        speed={0.4}
        color="#00f5ff"
        opacity={0.5}
      />

      {/* Floating drone with fallback */}
      <Float
        speed={1.5}
        rotationIntensity={0.3}
        floatIntensity={0.8}
        floatingRange={[-0.2, 0.2]}
      >
        <Suspense fallback={<WireframeFallback />}>
          <DroneModel />
        </Suspense>
      </Float>

      {/* Decorative elements */}
      <OrbitRing radius={3.5} speed={0.3} color="#00f5ff" tilt={0.4} />
      <OrbitRing radius={4.5} speed={-0.2} color="#ff00ff" tilt={-0.3} />
      <OrbitRing radius={2.8} speed={0.5} color="#0080ff" tilt={1.2} />

      {/* Data particles */}
      <DataParticles />

      {/* Grid floor */}
      <GridPlane />
    </>
  )
}

export default function Scene() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 1, 7], fov: 55 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}
