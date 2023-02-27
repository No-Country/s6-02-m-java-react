import React from "react";
import { FiHelpCircle, FiStar, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import HeaderBSide from "../HeaderBSide";

const Navigation = () => {
  return (
    <div>
      <div className="flex w-full justify-between text-white">
        <HeaderBSide className="justify-start" />
        <div className="flex justify-between items-center">
          <div className="mx-10 w-fit flex justify-between items-center gap-10">
            <Link to="/auth/register">
              <span className="flex justify-center items-center px-8 py-2 border border-Green rounded-md text-Green">
                <FiStar className="text-xl mx-2" /> Registrarse
              </span>
            </Link>
            <Link to="/auth/login">
              <span className="flex justify-center items-center px-8 py-0 md:py-2 border border-Green rounded-md text-BlueDark bg-Green">
                <FiUser className="flex text-center mx-2" />
                Iniciar Sesión
              </span>
            </Link>
            <Link to="/faqs">
              <span className="flex justify-center items-center rounded-full h-10 w-10 bg-Blue">
                <FiHelpCircle className="text-2xl text-center text-Green" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
