import React from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./cardCourses/cardContainer";
import Header from "./Header";
import ProgressCards from "./ProgressCards/ProgressCards";
import ProgressCourses from "./progressCourses/progressCourses";

const Sections = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="bg-Blue px-12 text-GrayLight">
        {/* Primer Seccion de cuadrados, mover grid-cols para cambiar el estilo */}
        <h1 className="text-5xl my-2">Bienvenido! @User!</h1>
        <span className="text-2xl mb-5">¿Qué vamos a aprender hoy?</span>

        {/* Segunda Seccion de cuadrados, mover Flex para cambiar el estilo */}
        <h2 className="text-4xl py-6">Cursos En Progreso</h2>
        <ProgressCards />
        {/* Segunda Seccion de cuadrados, mover Flex para cambiar el estilo */}

        {/* Tercer Seccion de cuadrados, mover grid-cols para cambiar el estilo */}
        <div className="grid grid-cols-1 gap-4 mb-4">
          <ProgressCourses />
        </div>

        {/* Cuarta Seccion de cuadrados, mover Flex para cambiar el estilo */}
        <div className="flex justify-between items-center">
          <h2 className="text-4xl py-6">Cursos Disponibles</h2>
          <Link to="/courses">Ver todos</Link>
        </div>
        <div className="flex items-center justify-center mb-4 rounded-sm bg-Blue">
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

export default Sections;
