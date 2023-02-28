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
            <div className="flex py-4 px-8 justify-between items-center">
              <div className="flex justify-between items-center gap-8">
                <Link to="/auth/login">
                  <span className="flex justify-center items-center px-8 py-2 border border-Green rounded-md text-Green">
                    <FiStar className="text-xl mx-2" /> Registrarse
                  </span>
                </Link>
                <Link to="/auth/register">
                  <span className="flex justify-center items-center px-8 py-2 border border-Green rounded-md text-BlueDark bg-Green">
                    <FiUser className="text-2xl mx-2" /> Iniciar Sesión
                  </span>
                </Link>
                <Link to="/">
                  <span className="flex justify-center items-center rounded-full h-10 w-10 bg-[#343434]">
                    <FiHelpCircle className="text-2xl text-center text-Green" />
                  </span>
                </Link>
              </div>
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
