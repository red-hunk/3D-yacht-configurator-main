'use client'
import Ocean from '@/templateforThree/Ocean'
import Paranoma from './Paranoma'
import TopNeon from '@/componentsThree/TopNeon'
import Yatch from '@/componentsThree/Yatch'
import gsap from 'gsap'
import { AmbientLight } from 'three'
import { Bloom, EffectComposer, N8AO, SMAA, SSAO } from '@react-three/postprocessing'
import { BottomNeon } from '@/componentsThree/BottomNeon'
import { CircleNeon } from '@/componentsThree/CircleNeon'
import { Float, OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import useDarkModeStore from '@/store/darkMode'
import { Car_Bmw_2023 } from '@/componentsThree/Box'

export default function Scene() {
  const darkModeValue = useDarkModeStore((state) => state.darkMode)

  const lightRef = useRef<AmbientLight>(null)

  const dayToNight = () => {
    gsap.to(lightRef.current, {
      overwrite: true,
      intensity: 1,
      duration: 2,
      ease: 'power2.out'
    })
  }

  const nightToDay = () => {
    gsap.to(lightRef.current, {
      overwrite: true,
      intensity: 0,
      duration: 2,
      ease: 'power2.out'
    })
  }

  useEffect(() => {
    if (lightRef.current) {
      if (darkModeValue) nightToDay()
      else dayToNight()
    }
  }, [darkModeValue])

  return (
    <>
      <group>
        <ambientLight ref={lightRef} />
        <OrbitControls
          makeDefault
          maxPolarAngle={Math.PI / 2.1}
        />
        <Float
          speed={5}
          rotationIntensity={0.1}
          floatIntensity={0.1}
          floatingRange={[-0.6, -0.3]}>
          {/* <Yatch /> */}
          <Car_Bmw_2023 />
          <group visible={darkModeValue}>
            <TopNeon pos={[0, 0.03, 0]} />
            <BottomNeon pos={[0, -0.01, 0]} />
            <CircleNeon pos={[0, -0.01, 0]} />
          </group>
        </Float>
        <Paranoma />
        <Ocean
          scale={100}
          pos={[0, 0, 0]}
        />
      </group>
      <EffectComposer enableNormalPass>
        <Bloom
          mipmapBlur={darkModeValue}
          luminanceThreshold={0.8}
          intensity={darkModeValue ? 1 : 0}
        />
        <N8AO
          halfRes
          color="black"
          aoRadius={2}
          intensity={1}
          aoSamples={6}
          denoiseSamples={4}
        />
        <SMAA />
        <SSAO
          minRadiusScale={1000}
          intensity={30}
          radius={1000}
          // luminanceInfluence={1}
          bias={0.0035}
          worldDistanceThreshold={0}
          worldDistanceFalloff={0}
          worldProximityThreshold={0}
          worldProximityFalloff={0}
        />
      </EffectComposer>
    </>
  )
}
