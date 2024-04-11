import GreenBox from './GreenBox'
import RedBox from './RedBox'
import gsap from 'gsap'
import { OrbitControls } from '@react-three/drei'
import { useAngle, useCarSpeed, useDirection, useShip } from '@/store/Controls'
import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

export function Bmw_m4_csl_2023(props) {
  const { camera } = useThree()

  const showShipA = () => {
    gsap.to(redRef.current, {
      ease: 'power2.out'
    })
  }

  const showShipB = () => {
    gsap.to(greenRef.current, {
      ease: 'power2.out'
    })
  }
  const ref = useRef()
  const speed = useCarSpeed((state) => state.speed)
  const angle = useAngle((state) => state.angle)
  const direction = {
    right: useDirection((state) => state.right),
    left: useDirection((state) => state.left)
  }

  const showShip = useShip((state) => state.selectedShip)

  const orbitRef = useRef()
  const redRef = useRef()
  const greenRef = useRef()

  useFrame((_, delta) => {
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
  useEffect(() => {
    if (showShip === 'selectedShipA') showShipA()
    if (showShip === 'selectedShipB') showShipB()
  }, [showShip])

  const returnFunc = () => {
    if (showShip === 'selectedShipA') {
      return <RedBox ref={redRef} />
    } else if (showShip === 'selectedShipB') {
      return <GreenBox ref={greenRef} />
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
