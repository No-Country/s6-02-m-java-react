import React from "react";
import {
  FiArrowDown,
  FiArrowDownLeft,
  FiCode,
  FiFileText,
  FiTrendingUp,
} from "react-icons/fi";

const WhyPro = () => {
  return (
    <>
      <div className="text-center border border-green-900 border-dashed">
        <h2 className="text-4xl py-16">¿Por qué elegir Pro-Grama?</h2>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center xl:h-screen text-center items-center gap-2 py-6">
          <div>
            <div>
              <FiTrendingUp className="object-cover rounded-lg w-[19.5rem] h-fit mx-auto text-Green " />
            </div>
            <div className="py-4 text-3xl text-center">
              <p>Crea tu ruta</p>
            </div>
            <div className="text-2xl">
              <p>
                Crea una ruta de cursos para poder ayudarte a focalizarte en tu
                crecimiento profesional.
              </p>
            </div>
          </div>
          <div>
            <div>
              <FiFileText className="object-cover rounded-lg w-[19.5rem] h-fit mx-auto text-Green " />
            </div>
            <div className="py-4 text-3xl text-center">
              <p>Toma tus notas</p>
            </div>
            <div className="text-2xl">
              <p>
                Puedes tomar notas de cada clase, para que no te olvides de lo
                más importante.
              </p>
            </div>
          </div>
          <div>
            <div>
              <FiCode className="object-cover rounded-lg w-[19.5rem] h-fit mx-auto text-Green " />
            </div>
            <div className="py-4 text-3xl text-center">
              <p>Prueba tu codigo</p>
            </div>
            <div className="text-2xl">
              <p>
                Ahorra tiempo y asegúrate que el código que estás probando
                funcione apropiadamente antes de salir de tu curso.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button class="relative overflow-hidden text-md font-medium text-BlueDark rounded-lg  bg-Green hover:text-GrayDark dark:text-white focus:ring-4 focus:outline-none focus:ring-GreenLight dark:focus:ring-Green">
            <span className="flex px-16 py-2.5 text-BlueDark">
              <FiArrowDownLeft className="text-2xl" />
              Comienza Ya
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default WhyPro;
