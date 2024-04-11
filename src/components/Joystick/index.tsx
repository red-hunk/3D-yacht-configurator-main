'use client'
import { Joystick } from 'react-joystick-component'
import { useAngle, useCarSpeed, useDirection } from '@/store/Controls'
import { IJoystickUpdateEvent } from 'react-joystick-component/build/lib/Joystick'

function TouchJoystick() {
  const incrementSpeed = useCarSpeed((state) => state.increment)
  const decrementSpeed = useCarSpeed((state) => state.decrement)
  const incrementAngle = useAngle((state) => state.increment)
  const decrementAngle = useAngle((state) => state.decrement)
  const speed = useCarSpeed((state) => state.speed)

  const setDirection = useDirection((state) => state.setDirection)

  function handleMove(event: IJoystickUpdateEvent) {
    if (event.direction === 'FORWARD' && speed < 3) {
      incrementSpeed()
      setDirection(true, 'forward')
      // setDirection(false, 'backward')
      // setDirection(false, 'right')
      // setDirection(false, 'left')
    } else if (event.direction === 'BACKWARD' && speed > 0) {
      decrementSpeed()
      // setDirection(false, 'forward')
      setDirection(true, 'backward')
      // setDirection(false, 'right')
      // setDirection(false, 'left')
    } else if (event.direction === 'RIGHT') {
      decrementAngle()
      // setDirection(false, 'forward')
      // setDirection(false, 'backward')
      setDirection(true, 'right')
      // setDirection(false, 'left')
    } else if (event.direction === 'LEFT') {
      incrementAngle()
      // setDirection(false, 'forward')
      // setDirection(false, 'backward')
      // setDirection(false, 'right')
      setDirection(true, 'left')
    }
  }

  function handleStop(event: IJoystickUpdateEvent) {
    setDirection(false, 'forward')
    setDirection(false, 'backward')
    setDirection(false, 'right')
    setDirection(false, 'left')
  }

  return (
    <Joystick
      size={200}
      baseImage="/images/baseImage4.png"
      stickImage="/images/centerImage5.png"
      move={handleMove}
      stop={handleStop}
    />
  )
}

export default TouchJoystick
