import Loading from '@/components/Loading'
import Title from './Title'
import TouchJoystick from '@/components/Joystick'
import { Home } from './_components/Home'
import { Keyboard } from '@/components/Controls'

export default async function HomePage() {
  return (
    <>
      <div className=" select-none bg-zinc-900">
        <Title />
        <Loading />
        <Home />
        <div className=" absolute bottom-4 left-10 translate-y-1">
          <TouchJoystick />
          <Keyboard />
        </div>
      </div>
    </>
  )
}
