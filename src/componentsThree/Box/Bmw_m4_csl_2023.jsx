import GreenBox from './GreenBox'
import RedBox from './RedBox'
import { OrbitControls } from '@react-three/drei'
import { useAngle, useCarSpeed, useDirection, useShip } from '@/store/Controls'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'

export function Bmw_m4_csl_2023(props) {
  const { camera } = useThree()

  const ref = useRef()
  const speed = useCarSpeed((state) => state.speed)
  const angle = useAngle((state) => state.angle)
  const direction = {
    right: useDirection((state) => state.right),
    left: useDirection((state) => state.left)
  }

  const showShip = useShip((state) => state.selectedShip)

  const orbitRef = useRef()

  useFrame((_, delta) => {
    // refs.frontLeft.current.rotation.x += speed * delta;
    // refs.frontRight.current.rotation.x += speed * delta;
    // refs.backLeft.current.rotation.x += speed * delta;
    // refs.backRight.current.rotation.x += speed * delta;
    ref.current.position.z += speed * Math.cos(angle) * delta
    ref.current.position.x += speed * Math.sin(angle) * delta
    orbitRef.current.target.z += speed * Math.cos(angle) * delta
    orbitRef.current.target.x += speed * Math.sin(angle) * delta
    camera.position.z += speed * Math.cos(angle) * delta
    camera.position.x += speed * Math.sin(angle) * delta
    if (speed > 0 && direction.right) {
      ref.current.rotation.y -= Math.PI / 1800
    } else if (speed > 0 && direction.left) {
      ref.current.rotation.y += Math.PI / 1800
    }
  })

  const returnFunc = () => {
    if (showShip === 'selectedShipA') {
      return <RedBox />
    } else if (showShip === 'selectedShipB') {
      return <GreenBox />
    }
  }

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}>
      {/* <mesh scale={2}>
        <boxGeometry args={[3, 2, 1]} />
        <meshStandardMaterial />
      </mesh> */}
      {returnFunc()}
      <OrbitControls
        ref={orbitRef}
        enablePan={false}
        makeDefault
      />
    </group>
  )
}
