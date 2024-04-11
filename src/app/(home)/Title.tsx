'use client'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'

export default function Title() {
  const [hide, setHide] = useState(false)
  const blurText = (id: string, time: number) => {
    gsap.fromTo(
      '#' + id,
      {
        textShadow: '0 0 300px #fff'
      },
      {
        duration: 6,
        delay: time,
        ease: 'power1.out',
        textShadow: '0 0 0px #fff'
      }
    )
  }
  const hideText = (id: string, time: number) => {
    gsap.to('#' + id, {
      duration: 2,
      delay: time,
      ease: 'power1.out',
      opacity: 0,
      onComplete: () => {
        setHide(true)
      }
    })
  }
  useEffect(() => {
    blurText('t_we', 1)
    blurText('t_l', 2)
    blurText('t_com', 3)
    blurText('t_e', 1)
    blurText('t_spore', 2)
    blurText('t_world', 3)
    hideText('parent_title', 12)
  }, [])
  return hide ? null : (
    <p
      id="parent_title"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-center text-2xl text-transparent md:text-4xl">
      <span id="t_we">Y</span>
      <span id="t_l">A</span>
      <span id="t_com">T</span>
      <span id="t_e">C</span>
      <span id="t_spore">H</span>
      <span id="t_world">.com</span>
    </p>
  )
}
