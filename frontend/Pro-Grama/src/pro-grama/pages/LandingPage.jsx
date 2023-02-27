import React from "react";
import HeaderLanding from "../components/LandingSections/HeaderLanding";
import Navigation from "../components/LandingSections/Navigation";
import UsersInfo from "../components/LandingSections/UsersInfo";
import Valores from "../components/LandingSections/Valores";
import WhyPro from "../components/LandingSections/WhyPro";

import CoursesPage from "./CoursesPage";

const LandingPage = () => {
  return (
    <div className="bg-BlueDark">
      <div className="w-fit bg-BlueDark">
        <Navigation />
        <HeaderLanding />

        <div className="min-h-fit bg-Blue p-10 text-white">
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

        <div className="min-h-screen w-full text-white">
          <Valores />
        </div>

        <div className="min-h-screen  text-white">
          <UsersInfo />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
