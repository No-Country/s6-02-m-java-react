import React from "react";
import { CardContainer } from "./cardCourses/cardContainer";
import Header from "./Header";
import ProgressCards from "./ProgressCards/ProgressCards";

const Sections = () => {
  return (
    <div className="sm:min-w-screen sm:min-h-screen sm:absolute right-auto sm:left-[16rem] top-0 bottom-0 border-red-500 border-dashed ">
      <div className=" dark:border-gray-700">
        {/* Primer Seccion de cuadrados, mover grid-cols para cambiar el estilo */}
        <Header />
        <h1 className="text-5xl py-4 my-4">Bienvenido!</h1>

        {/* Segunda Seccion de cuadrados, mover Flex para cambiar el estilo */}
        <h2 className="text-4xl py-4 my-4">Progreso</h2>
        <div className="flex items-center justify-center h-48 sm:mb-4 rounded-sm bg-gray-300 ">
          <ProgressCards />
        </div>

        {/* Tercer Seccion de cuadrados, mover grid-cols para cambiar el estilo */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded-sm bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
        </div>

        {/* Cuarta Seccion de cuadrados, mover Flex para cambiar el estilo */}
        <h2 className="text-4xl py-4 my-4">Cursos Disponibles</h2>
        <div className="flex items-center justify-center mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
          <CardContainer />
        </div>

        {/* Ultima Seccion de cuadrados, mover grid-cols para cambiar el estilo */}
        {/* <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sections;
