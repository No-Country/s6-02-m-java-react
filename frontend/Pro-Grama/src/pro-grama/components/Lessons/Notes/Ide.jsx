import React, { useState } from "react";
import { FiCode } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";
import "./styles.css";
export const Ide = () => {

  const [view, setView] = useState(false);
  const handleIde = () => {
    setView(!view);
  };

  return (
    <>
      <div className='bg-BlueLigth rounded-xl text-lg p-4  mb-5 mr-5 grid gap-2 relative text-white'>
        <h2>Practica desde nuestro IDE</h2>
        <p>Sin tener que salir de la clase</p>
        <button
          className='w-24 px-4 py-5 text-sm bg-Green rounded-md text-black'
          onClick={handleIde}>
          Practicar
        </button>
        {view && (
          <div className=' my-3 absolute mt-36 right-0'>
            <div className='bg-BlueLigth flex items-center justify-between p-3 '>
              <div className='flex items-center gap-2'>

                <FiCode size={24} />
                <p className="text-2xl">Live Code</p>
              </div>
              <VscClose
                size={26}
                className=' font-semibold cursor-pointer'
                onClick={handleIde}
              />
            </div>
            <iframe

              src='https://codesandbox.io/embed/react-new?codemirror=1&highlights=6,7,8,9'
              className='ide right-0 '
              allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
              sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'></iframe>

          </div>
        )}
      </div>
    </>
  );
};
