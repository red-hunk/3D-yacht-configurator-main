import { Suspense, useRef } from 'react'
import { extend, useFrame, useLoader } from '@react-three/fiber'

import { PlaneGeometry, RepeatWrapping, TextureLoader, Vector3 } from 'three'
import { Water } from 'three/examples/jsm/objects/Water.js'

type Props = {
  scale: number
  pos: Array<number>
}

extend({ Water })

function Ocean({ scale, pos }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>()
  const waterNormals = useLoader(TextureLoader, '/assets/waternormals.jpeg')

  waterNormals.wrapS = waterNormals.wrapT = RepeatWrapping
  const geom = new PlaneGeometry(10, 10)
  const config = {
    textureWidth: 512,
    textureHeight: 512,
    waterNormals: waterNormals,
    sunDirection: new Vector3(),
    sunColor: 0x000000,
    waterColor: 0x000000,
    distortionScale: 4,
    fog: false,
    format: undefined
  }
  useFrame((state, delta) => {
    ref.current.material.uniforms.size.value = 8
    ref.current.material.uniforms.time.value += delta / 2
  })
  const src = new Water(geom, config)
  return (
    <Suspense fallback={null}>
      <primitive
        object={src}
        ref={ref}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        position={[pos[0], pos[1], pos[2]]}
        scale={scale}
      />
    </Suspense>
  )
}

export default Ocean
