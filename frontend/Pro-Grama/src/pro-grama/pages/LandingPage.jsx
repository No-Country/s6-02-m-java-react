import React from "react";
import { FiHelpCircle, FiStar, FiUser } from "react-icons/fi";
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
            <div className="flex py-4 px-4 justify-between">
              <Link to='/auth/login'>
              <span className="flex justify-between px-2">
                <FiStar className="text-2xl mx-2"/> Iniciar Sesion
              </span>
              </Link>
              <Link to='/auth/register'>
              <span className="flex justify-between px-2">
                <FiUser className="text-2xl mx-2"/> Iniciar Sesion
              </span>
              </Link>
              <Link to='/auth/register'>
              <span className="flex px-2 justify-center items-center rounded-full h-8 w-8 bg-gray-400">
                <FiHelpCircle className="text-2xl text-center"/>
              </span>
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
