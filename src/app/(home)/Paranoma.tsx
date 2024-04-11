import gsap from 'gsap'
import { MeshBasicMaterial } from 'three'
import { memo, useEffect, useRef } from 'react'

import { Environment } from '@react-three/drei'
import useDarkModeStore from '@/store/darkMode'

const Paranoma = () => {
  const darkMode = useDarkModeStore((state) => state.darkMode)

  return (
    <group>
      <Environment
        files={darkMode ? '/hdr/env.hdr' : '/hdr/daySky.hdr'}
        background
      />
    </group>
  )
}

export default memo(Paranoma)
