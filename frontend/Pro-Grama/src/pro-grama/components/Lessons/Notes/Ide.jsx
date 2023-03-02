import { useState } from 'react'
import { FiCode } from 'react-icons/fi'
import { VscClose } from 'react-icons/vsc'
export const Ide = () => {
  const [view, setView] = useState(false)
  const handleIde = () => {
    setView(!view)
  }

  return (
    <>
      <div className='bg-BlueLight rounded-xl  p-4 mb-5 mr-5  gap-2  text-white hidden lg:grid text-xl'>
        <h2>Practica desde nuestro IDE</h2>
        <p>Sin tener que salir de la clase</p>
        <button
          className='p-4 rounded-md bg-Green text-black font-semibold uppercase text-lg hover:text-BlueLink transition-colors'
          onClick={handleIde}>
          Practicar
        </button>
        {view && (
          <div className='lg:absolute mt-36 right-0 w-[90%] text-black mr-9'>
            <div className='bg-white flex items-center justify-between p-3 '>
              <div className='flex items-center gap-2'>
                <FiCode size={24} />
                <p className='text-2xl'>Live Code</p>
              </div>
              <VscClose
                size={24}
                className='cursor-pointer'
                onClick={handleIde}
              />
            </div>

            <iframe
              src='https://codesandbox.io/embed/react-new?codemirror=1&highlights=6,7,8,9'
              className='w-full h-96'
              allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
              sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'></iframe>
          </div>
        )}
      </div>
    </>
  )
}
