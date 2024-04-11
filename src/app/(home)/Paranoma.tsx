import gsap from 'gsap'
import { MeshBasicMaterial } from 'three'
import { memo, useEffect, useRef } from 'react'

import useDarkModeStore from '@/store/darkMode'
import { Environment } from '@react-three/drei'

const Paranoma = () => {
  const nightRef = useRef<MeshBasicMaterial>(null)

  const dayToNight = () => {
    gsap.to(nightRef.current, {
      overwrite: true,
      opacity: 1,
      duration: 2,
      ease: 'power2.out'
    })
  }

  const nightToDay = () => {
    gsap.to(nightRef.current, {
      overwrite: true,
      opacity: -0.2,
      duration: 2,
      ease: 'power2.out'
    })
  }

  const darkMode = useDarkModeStore((state) => state.darkMode)

  useEffect(() => {
    if (nightRef.current) {
      if (darkMode) dayToNight()
      else nightToDay()
    }
  }, [darkMode])
  return (
    <group>
      <Environment
        files={'/hdr/daySky.hdr'}
        background
      />
    </group>
  )
}

export default memo(Paranoma)
