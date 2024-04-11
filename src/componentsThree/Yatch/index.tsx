/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useLayoutEffect, useMemo } from 'react'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { applyProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

type GLTFResult = GLTF & {
  nodes: any
  materials: any
}

export default function Yacht() {
  const { scene, materials } = useGLTF('/glb/Yacht11.glb') as GLTFResult

  useMemo(() => {
    applyProps(materials['Yacht_window_01'], {
      color: 'lightblue',
      roughness: 0,
      metalness: 1
    })
    applyProps(materials['Yacht_Deck'], {
      roughness: 1,
      metalness: 1
    })
    applyProps(materials['Yacht_Metallic'], {
      color: 'white',
      roughness: 0,
      metalness: 1
    })
    applyProps(materials['Yacht_Hull'], {
      color: 'white',
      roughness: 0,
      metalness: 0
    })
    applyProps(materials['Yacht_water'], {
      opacity: 0.8,
      transparent: true
    })
    applyProps(materials['Yacht_window'], {
      color: 'lightblue',
      roughness: 0,
      metalness: 1
    })
    applyProps(materials['Yacht_bottom_line'], {
      color: '#7EB2FC',
      roughness: 0,
      metalness: 0
    })
    applyProps(materials['Yacht_lamp'], {
      color: 'white',
      emissiveIntensity: 100
    })
    applyProps(materials['Yacht_Flag'], { color: 'pink' })
  }, [])

  useLayoutEffect(() => {
    if (scene) {
      scene.traverse((child: any) => {
        if (child?.isMesh) {
          applyProps(child, {
            castShadow: true,
            receiveShadow: true
          })
        }
      })
    }
  }, [scene])

  return (
    <primitive
      object={scene.clone()}
      scale={0.01}
    />
  )
}
