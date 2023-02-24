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
          <HeaderBSide />
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
