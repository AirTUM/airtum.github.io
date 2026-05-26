import { useRef, Suspense, Component } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Float, Stars, ContactShadows, Environment } from '@react-three/drei'
import * as THREE from 'three'

// ─── Real Lark model ──────────────────────────────────────────────────────────
function LarkModel() {
  const { scene } = useGLTF('/lark.glb')
  const ref = useRef()

  // Use vertex colours from GLB but override with a clean light-grey material
  // so it looks like the white/grey plastic of the real Flightory Lark
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true
      child.receiveShadow = true
      // Light grey — matches the real LW-PLA printed Lark
      child.material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0xdde4ec),
        roughness: 0.65,
        metalness: 0.05,
      })
    }
  })

  return <group ref={ref}><primitive object={scene} /></group>
}

// ─── Wireframe fallback ───────────────────────────────────────────────────────
function WireframeLark() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.25
  })
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[2.2, 0.4, 0.9]} />
        <meshBasicMaterial color="#0065BD" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh>
        <boxGeometry args={[5.2, 0.03, 0.55]} />
        <meshBasicMaterial color="#4da3ff" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh position={[-1.0, 0.22, 0]}>
        <boxGeometry args={[0.4, 0.55, 0.03]} />
        <meshBasicMaterial color="#0065BD" wireframe transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

// ─── Error boundary ───────────────────────────────────────────────────────────
class ModelBoundary extends Component {
  state = { err: false }
  static getDerivedStateFromError() { return { err: true } }
  render() { return this.state.err ? <WireframeLark /> : this.props.children }
}

// ─── Subtle grid floor ────────────────────────────────────────────────────────
function GridFloor() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current)
      ref.current.material.opacity = 0.03 + Math.sin(clock.getElapsedTime() * 0.3) * 0.01
  })
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]}>
      <planeGeometry args={[30, 30, 20, 20]} />
      <meshBasicMaterial color="#0065BD" wireframe transparent opacity={0.03} />
    </mesh>
  )
}

// ─── Scene ────────────────────────────────────────────────────────────────────
function SceneContent() {
  return (
    <>
      {/* Studio-style lighting for a light-grey plastic model */}
      <ambientLight intensity={0.7} color="#c8d8f0" />

      {/* Strong top-front key light — simulates the Flightory product photo look */}
      <directionalLight
        position={[2, 6, 5]}
        intensity={3.5}
        color="#ffffff"
        castShadow
      />

      {/* Soft fill from below-left */}
      <directionalLight position={[-4, -1, 2]} intensity={0.8} color="#d0e4ff" />

      {/* TUM blue rim light from behind */}
      <pointLight position={[0, 2, -5]} intensity={2} color="#0065BD" distance={12} />

      {/* NxtSpace warm accent from below-right */}
      <pointLight position={[4, -2, 3]} intensity={1.2} color="#e8a020" distance={10} />

      {/* Very sparse stars */}
      <Stars radius={120} depth={60} count={700} factor={2} saturation={0} fade speed={0.2} />

      {/* The Lark — gentle float, slight tilt like in-flight */}
      <Float speed={0.9} rotationIntensity={0.1} floatIntensity={0.45} floatingRange={[-0.08, 0.08]}>
        <ModelBoundary>
          <Suspense fallback={<WireframeLark />}>
            <LarkModel />
          </Suspense>
        </ModelBoundary>
      </Float>

      {/* Soft blue shadow beneath */}
      <ContactShadows
        position={[0, -2.2, 0]}
        opacity={0.18}
        scale={14}
        blur={3}
        far={4}
        color="#0065BD"
      />

      <GridFloor />
    </>
  )
}

class SceneBoundary extends Component {
  state = { err: false }
  static getDerivedStateFromError() { return { err: true } }
  render() { return this.state.err ? null : this.props.children }
}

export default function Scene() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <SceneBoundary>
        <Canvas
          camera={{ position: [0, 1.5, 7], fov: 48 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 1.5]}
          style={{ background: 'transparent' }}
        >
          <SceneContent />
        </Canvas>
      </SceneBoundary>
    </div>
  )
}
