import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { VscSignIn } from "react-icons/vsc";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";

const SidebarItems = () => {
  return (
    <ul className="space-y-2 py-5 px-2 text-start items-center navbar flex flex-col">
      <li>
        <Link
          to="/"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <AiFillHome className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="px-3 hidden">Inicio</span>
        </Link>
      </li>

      <li>
        <Link
          to="/Courses"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FiLayout className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap hidden">Cursos</span>
        </Link>
      </li>

      <li>
        <Link
          to="/CourseDetail"
          className="flex items-center  p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FaChalkboardTeacher className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap hidden">
            Leccion Actual
          </span>
        </Link>
      </li>

      <li>
        <Link
          to="/"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <CgProfile className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap hidden">Perfil</span>
        </Link>
      </li>

      <li>
        <Link
          to="/auth/register"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <VscSignIn className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap hidden">
            Registrarse
          </span>
        </Link>
      </li>

      <li>
        <Link
          to="/auth/login"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <BiLogIn className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap hidden">
            Iniciar Sesion
          </span>
        </Link>
      </li>

      <li>
        <Link
          to="/CourseLessons"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <RxDashboard className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="px-3 hidden">Notas</span>
        </Link>
      </li>
      <li>
        <Link
          to="/Home"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <BiLogIn className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap hidden">
            LandingPage
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default SidebarItems;
