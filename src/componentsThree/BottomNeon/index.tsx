/* eslint-disable @typescript-eslint/no-explicit-any */
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { applyProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

type GLTFResult = GLTF & {
  nodes: any
  materials: any
}

export const BottomNeon = (props: { pos: any }) => {
  const { pos } = props
  const { nodes, materials } = useGLTF('/glb/bottomNeon.glb') as GLTFResult
  useMemo(() => {
    applyProps(materials['basic'], { emissiveIntensity: 20 })
  }, [])
  return (
    <mesh
      position={pos}
      scale={0.01}
      rotation={[Math.PI / 1, 0, 0]}
      geometry={nodes.object.geometry}
      material={materials['basic']}
    />
  )
}
