/* This example requires Tailwind CSS v2.0+ */
// eslint-disable-next-line no-restricted-imports
import { DarkSVG } from '../Svgs/DarkSVG'
// eslint-disable-next-line no-restricted-imports
import { LightSVG } from '../Svgs/LightSVG'
import { Switch } from '@headlessui/react'
import { SwitchButtonType } from '@/type/switchButton'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function SwitchButton(props: SwitchButtonType) {
  const { value, handleChange } = props
  const buttonA = () => {
    console.log('first')
  }
  const buttonB = () => {
    console.log('second')
  }

  return (
    <div className=" absolute right-4 top-4 block  space-x-4 text-white">
      <button
        onPointerDown={buttonA}
        className=" inline-flex  h-10  w-20 flex-shrink-0  cursor-pointer  rounded-full  border-2 p-1">
        button A
      </button>
      <button
        onPointerDown={buttonB}
        className="  inline-flex  h-10  w-20  flex-shrink-0  cursor-pointer  rounded-full  border-2 p-1">
        button B
      </button>
    </div>
  )
}
