/* eslint-disable @typescript-eslint/no-explicit-any */
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshBasicMaterial } from 'three'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'

type GLTFResult = GLTF & {
  nodes: any
  materials: any
}

const TopNeon = (props: { pos: any }) => {
  const light = useRef<MeshBasicMaterial>(null)
  const { pos } = props
  const { nodes } = useGLTF('/glb/Neon.glb') as GLTFResult

  useFrame((state) => {
    const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2
    if (light.current) {
      light.current.color.setRGB(1 + t * 10, 20, 20 + t * 100)
    }
  })

  return (
    <mesh
      position={pos}
      scale={0.000001}
      rotation={[Math.PI / 2, 0, 0]}
      geometry={nodes.neon.geometry}>
      <meshBasicMaterial
        ref={light}
        toneMapped={false}
      />
    </mesh>
  )
}

export default TopNeon
