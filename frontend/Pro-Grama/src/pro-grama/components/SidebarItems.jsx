import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { VscSignIn } from "react-icons/vsc";
import { BiNotepad } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GrCircleQuestion } from "react-icons/gr";
import { useAuthStore } from "../../hooks/useAuthStore";

const SidebarItems = () => {
  const{startLogout}= useAuthStore();
  return (
    <ul className="space-y-3 py-5 px-3 text-start navbar">
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
          to="/ProfilePage"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <CgProfile className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap hidden">Perfil</span>
        </Link>
      </li>

      <li onClick={startLogout}>
        <Link
          to="/"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <VscSignIn className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="flex-1 ml-3 whitespace-nowrap hidden">LogOut</span>
        </Link>
      </li>
      <li>
        <Link
          to="/CourseLessons"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <BiNotepad className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          <span className="px-3 hidden">Notas</span>
        </Link>
      </li>
      <li>
        <Link
          to="/faqs"
          className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <GrCircleQuestion
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white "
            id="strokeHelp"
          />
          <span className="flex-1 ml-3 whitespace-nowrap hidden">Ayuda</span>
        </Link>
      </li>
    </ul>
  );
};

export default SidebarItems;
