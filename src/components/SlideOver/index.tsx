import AreaList from '@/assets/data.json'
import Image from 'next/image'
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { SlideOverType } from '@/type/slideOver'

export default function SlideOver(props: SlideOverType) {
  const { index, handleClose } = props
  const [prevData, setPrevData] = useState({ name: '', content: '', url: '' })

  useEffect(() => {
    if (index > 0) setPrevData(AreaList[index - 1])
  }, [index])

  return (
    <Transition.Root
      show={Boolean(index)}
      as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0  z-[99999999] overflow-hidden"
        onClose={handleClose}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2
                        id="slide-over-heading"
                        className="text-lg font-medium text-gray-900">
                        {prevData?.name}
                      </h2>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                          onClick={handleClose}>
                          <AiOutlineClose
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Main */}
                  <div>
                    <Image
                      src={prevData?.url}
                      alt={prevData?.name}
                      width={500}
                      height={300}
                    />
                    <div className="px-2 py-7">
                      <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                        <p>{prevData?.content}</p>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
