'use client'
import { useEffect } from 'react'
import { useAngle, useCarSpeed } from '@/store/Controls'
import Image from 'next/image'

interface KeyConfig extends KeyMap {
  keys?: string[]
}

interface KeyMap {
  fn: (pressed: boolean) => void
  up?: boolean
  pressed?: boolean
}

function useKeys(keyConfig: KeyConfig[]) {
  useEffect(() => {
    const keyMap = keyConfig.reduce<{ [key: string]: KeyMap }>((out, { keys, fn, up = true }) => {
      keys && keys.forEach((key) => (out[key] = { fn, pressed: false, up }))
      return out
    }, {})

    const downHandler = ({ key, target }: KeyboardEvent) => {
      if (!keyMap[key] || (target as HTMLElement).nodeName === 'INPUT') return
      const { fn, pressed, up } = keyMap[key]
      keyMap[key].pressed = true
      if (up || !pressed) fn(true)
    }

    const upHandler = ({ key, target }: KeyboardEvent) => {
      if (!keyMap[key] || (target as HTMLElement).nodeName === 'INPUT') return
      const { fn, up } = keyMap[key]
      keyMap[key].pressed = false
      if (up) fn(false)
    }

    window.addEventListener('keydown', downHandler, { passive: true })
    // window.addEventListener('keyup', upHandler, { passive: true })

    return () => {
      window.removeEventListener('keydown', downHandler)
      // window.removeEventListener('keyup', upHandler)
    }
  }, [keyConfig])
}

export function Keyboard() {
  const incrementSpeed = useCarSpeed((state) => state.increment)
  const decrementSpeed = useCarSpeed((state) => state.decrement)
  const speed = useCarSpeed((state) => state.speed)
  const angle = useAngle((state) => state.angle)
  const incrementAngle = useAngle((state) => state.increment)
  const decrementAngle = useAngle((state) => state.decrement)

  useKeys([
    { keys: ['ArrowUp', 'w', 'W'], fn: () => (speed > 2.0 ? null : incrementSpeed()) },
    { keys: ['ArrowDown', 's', 'S'], fn: () => (speed < 0.0 ? null : decrementSpeed()) },
    { keys: ['ArrowLeft', 'a', 'A'], fn: () => (angle === 3 ? null : incrementAngle()) },
    { keys: ['ArrowRight', 'd', 'D'], fn: () => (angle === -3 ? null : decrementAngle()) }
  ])

  return (
    <div className="absolute bottom-5 left-2 translate-x-1 translate-y-1">
      <Image
        src="/images/icoCtrls.png"
        alt="Yatch"
        width={500}
        height={50}
        priority
      />
      <div className="flex space-x-1 text-center font-sans text-[7px] text-slate-200">
        <p className=" pr-1 pt-1">YATCH CONTROLS</p>
        <p className=" pr-1 pt-1">DRAG CAMERA</p>
        <p className=" pr-1 pt-1">SCROLL ZOOM</p>
      </div>
    </div>
  )
}
