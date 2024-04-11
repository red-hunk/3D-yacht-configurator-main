/* This example requires Tailwind CSS v2.0+ */
// eslint-disable-next-line no-restricted-imports
// eslint-disable-next-line no-restricted-imports
import { useShip } from '@/store/Controls'

export default function SwitchButton() {
  const setSelectedShip = useShip((state) => state.setSelectedShip)

  return (
    <div className=" absolute right-4 top-4 block  space-x-4 text-white">
      <button
        onPointerDown={() => {
          setSelectedShip('selectedShipA'), console.log('ShipA')
        }}
        className=" inline-flex  h-10  w-20 flex-shrink-0  cursor-pointer  rounded-full  border-2 p-1">
        Ship A
      </button>
      <button
        onPointerDown={() => {
          setSelectedShip('selectedShipB'), console.log('ShipB')
        }}
        className="  inline-flex  h-10  w-20  flex-shrink-0  cursor-pointer  rounded-full  border-2 p-1">
        Ship B
      </button>
    </div>
  )
}
