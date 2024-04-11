/* This example requires Tailwind CSS v2.0+ */
// eslint-disable-next-line no-restricted-imports
// eslint-disable-next-line no-restricted-imports
import { useShip } from '@/store/Controls'

export default function SwitchButton() {
  const setSelectedShip = useShip((state) => state.setSelectedShip)
  const selectedShip = useShip((state) => state.selectedShip)
  return (
    <div className=" absolute right-8  translate-y-40 space-y-4 text-white">
      <button
        onPointerDown={() => {
          setSelectedShip('selectedShipA'), console.log('ShipA')
        }}
        style={{ transform: `scale(${selectedShip === 'selectedShipA' ? 1.3 : 1})`, transition: `0.5s` }}
        className=" block  h-10  w-20 flex-shrink-0  cursor-pointer  rounded-full p-1">
        <img
          src="/images/Ship22.png"
          alt="Ship22"
        />
      </button>
      <button
        onPointerDown={() => {
          setSelectedShip('selectedShipB'), console.log('ShipB')
        }}
        style={{ transform: `scale(${selectedShip === 'selectedShipB' ? 1.3 : 1})`, transition: `0.5s` }}
        className=" block h-10  w-20  flex-shrink-0  cursor-pointer  rounded-full  p-1">
        <img
          src="/images/Ship11.png"
          alt="Ship11"
        />
      </button>
      <button
        onPointerDown={() => {
          setSelectedShip('wait'), console.log('wait')
        }}
        className=" block  h-10  w-20  flex-shrink-0  cursor-pointer  rounded-full  border-2 p-1">
        Ship C
      </button>
    </div>
  )
}
