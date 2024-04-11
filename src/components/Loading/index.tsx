'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

// eslint-disable-next-line import/no-unresolved
import ImageAnnotation from 'public/images/Annotation 2024-04-10 174319.png'
import { useProgress } from '@react-three/drei'

export default function Loading() {
  const { progress } = useProgress()
  const bg = useRef<HTMLDivElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const [hide, setHide] = useState(false)
  const fadeOut = () => {
    gsap.to(content.current, {
      duration: 1,
      ease: 'power1.out',
      opacity: 0,
      onComplete: () => {
        gsap.to(bg.current, {
          duration: 2,
          ease: 'power1.out',
          opacity: 0,
          onComplete: () => {
            setHide(true)
          }
        })
      }
    })
  }
  useEffect(() => {
    if (progress === 100) fadeOut()
  }, [progress])

  return hide ? null : (
    <div
      ref={bg}
      className="absolute left-0 top-0 z-[99999999] flex h-screen w-screen flex-col items-center justify-center bg-zinc-900 text-white">
      <div
        ref={content}
        className="flex flex-col items-center justify-center space-y-2">
        <Image
          src={ImageAnnotation}
          alt="Yatch"
          width={150}
          height={150}
          priority
        />
        <p className="px-12 text-sm tracking-wide">L O A D I N G</p>
      </div>
    </div>
  )
}
