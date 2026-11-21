import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Text } from '@react-three/fiber'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/portfolio'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!canvasRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvasRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      setMouse({ x, y })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    canvasRef.current.addEventListener('mousemove', handleMouseMove)
    canvasRef.current.addEventListener('mouseenter', handleMouseEnter)
    canvasRef.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      canvasRef.current.removeEventListener('mousemove', handleMouseMove)
      canvasRef.current.removeEventListener('mouseenter', handleMouseEnter)
      canvasRef.current.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [canvasRef.current])

  return (
    <section
      className="relative min-h-[calc(100vh_-_80px)] bg-dark-1000 overflow-hidden"
      style={{ minHeight: 'calc(100vh - 80px)' }}
    >
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true }}
        shadows={false}
        className="hero-canvas"
        onCreated={({ gl }) => {
          gl.clearColor(10, 10, 10, 1)
        }}
      >
        <primitive
          object="planeGeometry"
          args={[{ size: 30, widthSegments: 30, heightSegments: 30 }]}
          position={[0, 0, -0.1]}
          rotation={[-Math.PI / 2, 0, 0]}
          material={{
            color: '#1a1a1a',
            transparent: true,
            opacity: 0.8,
            side: 'double',
          }}
        />

        {Array.from({ length: 50 }).map((_, i) => (
          <sphere
            key={i}
            args={[0.05 + Math.random() * 0.1]}
            position={[
              (Math.random() - 0.5) * 4,
              (Math.random() - 0.5) * 4,
              -3 + Math.random() * 2,
            ]}
            color={['#5a6feb', '#a855f7'][Math.floor(Math.random() * 2)]}
            transparent
            opacity={0.6 + Math.random() * 0.3}
          >
            <meshStandardMaterial
              emissive={[0.1, 0.1, 0.1]}
              emissiveIntensity={0.5}
            />
          </sphere>
        ))}

        <group
          rotation={[
            mouse.x * 0.3,
            mouse.y * 0.3,
            isHovering ? 0.01 : 0,
          ]}
        >
          <torusGeometry
            args={[1.5, 0.4, 32, 32]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <meshStandardMaterial
            color="#5a6feb"
            metalness={0.3}
            roughness={0.4}
            emissive={[10, 10, 20]}
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
          />
        </group>

        {Array.from({ length: 3 }).map((_, i) => (
          <mesh key={i}>
            <sphereGeometry args={[1.2 + i * 0.8]} />
            <meshStandardMaterial
              color={['#5a6feb', '#a855f7', '#00d4aa'][i]}
              transparent
              opacity={0.15 + i * 0.05}
              metalness={0.7}
              roughness={0.1}
            />
          </mesh>
        ))}

        <Text
          position={[-1.5, 1.8, -1.5]}
          scale={0.8}
          align="center"
          content="DEVASISH"
          font="/fonts/Inter.json"
          color="#ffffff"
          depth={0.3}
        />

        <mesh position={[0, -2.5, -3]}>
          <boxGeometry args={[4, 0.3, 4]} />
          <meshStandardMaterial
            color="#00d4aa"
            transparent
            opacity={0.9}
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>
        <Text
          position={[0, -2.5, -2.75]}
          scale={0.5}
          align="center"
          content="Open to Internships, Freelance Projects & Collaborations."
          font="/fonts/Inter.json"
          color="#0a0a0a"
          depth={0.2}
        />

        {isHovering && <OrbitControls autoRotate={true} damping={0.3} />}
      </Canvas>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-20"
      >
        <div className="text-center max-w-5xl w-full">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gradient mb-6 animate-fade-in"
          >
            Turning Ideas Into Impactful Digital Experiences.
          </h1>

          <p
            className="text-lg sm:text-xl text-white/60 max-w-2xl mb-8 animate-fade-in animate-delay-200"
          >
            I'm Devasish — an aspiring digital marketer and business enthusiast passionate about building brands, understanding consumers and creating meaningful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
            <button className="btn-primary">
              <span>Explore My Work</span>
            </button>
            <button className="btn-ghost">
              <span>Let's Connect</span>
            </button>
          </div>

          <div className="mt-12 text-white/50 text-sm animate-fade-in animate-delay-400">
            {personalInfo.availability}
          </div>
        </div>
      </div>
    </section>
  )
}