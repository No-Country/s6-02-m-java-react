// import { Sidebar } from "../../pro-grama/components";

import { HeaderBSide } from "../../pro-grama/components";
import { ProgressBar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setRegisterForm } from "../../store/auth/authSlice";


const initialForm ={
  email: "",
  name:"",
  lastName:""
}
export const Register = () => {
    const{onInputChange,formState, email,name,lastName}=useForm(initialForm)
     
   const dispatch = useDispatch()

    const handleSubmit = (e)=>{
      e.preventDefault();
      dispatch(setRegisterForm(formState))
      dispatch(setPage())

    }
  return (
    <>
      <HeaderBSide />
      <ProgressBar />
      <div className="flex flex-col justify-center items-center gap-8">
        <h3 className="font-bold text-3xl text-center ">¡Hola! vamos a crear tu perfil</h3>
        <form className="w-[28rem] " onSubmit={handleSubmit}>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email address:</label>
            <input type="email" name="email" value={email} onChange={onInputChange} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
          </div> 
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Nombre:</label>
            <input type="text" name="name" value={name} onChange={onInputChange} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" required />
          </div>
          <div class="mb-6">
            <label for="apellido" class="block mb-2 text-sm font-medium text-gray-900 ">Apellido:</label>
            <input type="text" name="lastName" value={lastName} onChange={onInputChange} id="apellido" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" required />
          </div>
          <div class="flex items-center mb-6">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">Acepto Termino y condiciones</label>
          </div>
          <div className="flex justify-center items-center gap-9 mb-6">
              <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Volver</a>
              <button type="submit" class="text-blue-700 w-[200px] hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Siguiente</button>
          </div>
          <div className="flex justify-center">
          <span>Ya tenes Cuenta? <Link to='/auth/login' class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Iniciar Sesion</Link></span>
          </div>  
        </form>
      </div>
    </>
  );
};
