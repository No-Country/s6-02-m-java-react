import React from "react";
import { Link } from "react-router-dom";
import { HeaderBSide } from "../components";
import HeaderLanding from "../components/LandingSections/HeaderLanding";
import UsersInfo from "../components/LandingSections/UsersInfo";
import Valores from "../components/LandingSections/Valores";
import WhyPro from "../components/LandingSections/WhyPro";

import CoursesPage from "./CoursesPage";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-BlueDark">
        <div>
          <div className="flex justify-between text-white">
            <HeaderBSide className="justify-start" />
            <div className="flex py-4 justify-between">
              <Link to='/auth/login'>
                <button className="flex px-4">Iniciar Sesion</button>
              </Link>
              <Link to='/auth/register'>
                <button className="flex px-4">Registrarse</button>
              </Link>
              <Link to='/auth/register'>
              <span className="px-4 rounded-full h-10 w-10 bg-gray-500"></span>
              </Link>
            </div>
          </div>
        </div>

        <HeaderLanding />

        <div className="min-h-fit p-10 text-white">
          <div>
            <h2 className="text-4xl text-center">Mira nuestros cursos</h2>
          </div>
          <div>
            <CoursesPage />
          </div>
        </div>

        <div className="min-h-screen bg-BlueDark text-white">
          <WhyPro />
        </div>

        <div className="min-h-screen text-white">
          <Valores />
        </div>

        <div className="min-h-screen text-white">
          <UsersInfo />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
