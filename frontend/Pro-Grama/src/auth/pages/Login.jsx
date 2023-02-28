import { Link } from "react-router-dom";
import { HeaderBSide } from "../../pro-grama/components";
import { BsEyeSlash } from "react-icons/bs";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useForm } from "../hooks/useForm";
import { useAuthStore } from "../../hooks/useAuthStore";
import ProGrama from '../../assets/Pro-grama.jpeg'
import { useState } from "react";
const initalForm ={
  email:"",
  password:""
}
const regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const formValidations ={
  email:[(value)=> regexemail.test(value), "put a validate email"],
  password:[(value)=> value.length > 5, "invalid password"]
}
export const Login = () => {
  const{onInputChange,formState,email,password , isFormValid, emailValid, passwordValid}=useForm(initalForm, formValidations)
  const[error, setError] = useState(false)
  const{startLogin}= useAuthStore()
  const handleSubmit = (e)=>{
    e.preventDefault();
    setError(true);
    if(!isFormValid)return;
    startLogin({email:email, password:password})
  }
  return (
    <div className="bg-BlueDark h-fit ">
      <HeaderBSide />

      {/* LEFT SIDE */}
      <div className="text-center bg-BlueDark w-[50%] h-[100vh]">
        <div className="m-auto py-36 p-28">
          <h2 className="text-4xl text-white flex justify-start mb-4 align-content-center">
            Te damos la bienvenida!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="flex justify-start mb-2 text-md font-medium text-white "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ejemplo@gmail.com"
                required
              />
              {
                error && !!emailValid && <span className="text-red-500"> {emailValid} </span>
              }
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="flex justify-start mb-2 text-md font-medium text-white"
              >
                Contraseña
              </label>

              {/* Eye icon  */}
              <BsEyeSlash className="absolute ml-[92%] mt-2 text-center flex items-center text-white text-2xl" />

              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="Ejemplo***"
              />
               {
                error && !!passwordValid   && <span className="text-red-500"> {passwordValid} </span>
              }
            </div>
            <div className="flex justify-between mb-6">
              <div className="flex items-center h-5">
                <input
                  id="helper-checkbox"
                  aria-describedby="helper-checkbox-text"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="remember"
                  className="flex justify-start text-sm ml-1 font-medium text-white"
                >
                  Recuerdame
                </label>
              </div>
              <label className="text-sm font-medium text-white">
                ¿Olvidaste tu contraseña?
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-Green hover:bg-GreenLight focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[100%] py-3 my-2 text-center  dark:hover:bg-green-800"
            >
              Iniciar Sesión
            </button>
            <button
              type="submit"
              className="text-Green bg-BlueDark hover:bg-GreenLight focus:ring-4 focus:outline-none border-Green focus:ring-blue-300 font-medium rounded-lg text-sm w-[100%] py-3 text-center  dark:hover:bg-green-800"
            >
              <span className="flex justify-center align-items-center text-Green">
                {" "}
                <AiFillGoogleCircle className="text-xl mr-2" /> Ingresar con
                Google
              </span>
            </button>
          </form>

          <div className="text-center text-white">
            ¿No tienes cuenta?{" "}
            <Link to="/auth/register" className="text-md text-white font-extrabold">
              Registrate
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="text-center absolute left-[50%] top-[5rem] bg-green-900 w-[50%] h-[90vh]">
        <img src={ProGrama} alt="Programa" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
