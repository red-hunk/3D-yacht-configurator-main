'use client'
import { Canvas } from '@react-three/fiber'
import { Stats } from '@react-three/drei'
import { Suspense } from 'react'

import Scene from '@/app/(home)/Scene'
import SwitchButton from '@/components/SwitchButton'

export const Home = () => (
  <>
    <div className="absolute left-0 top-0 h-screen w-screen">
      <Suspense fallback={null}>
        <Canvas
          performance={{ min: 0.5 }}
          camera={{
            position: [-1.08, 3.62, 10.78],
            near: 0.01
          }}
          shadows>
          <fog
            attach="fog"
            args={['black', 1, 20]}
          />
          <Scene />
        </Canvas>
      </Suspense>
    </div>
    <Stats />

    <SwitchButton />
  </>
)
