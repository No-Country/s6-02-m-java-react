// import { Sidebar } from "../../pro-grama/components";

import { HeaderBSide } from "../../pro-grama/components";
import { ProgressBar } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setRegisterForm } from "../../store/auth/authSlice";
import { useState } from "react";


const initialForm ={
  email: "",
  name:"",
  lastName:""
}
const formValidations ={
  email:[(value)=>value.includes('@'), 'email must have @'],
  name: [(value)=>  value.length >=4, 'Name is required' ],
  lastName: [(value)=>  value.length >=4, 'Name is required' ],
}
export const Register = () => {
    const{onInputChange,formState, email,name,lastName, isFormValid,emailValid,nameValid,lastNameValid}=useForm(initialForm,formValidations)
     const[formSubmit, setFormSubmit]=useState(false)
   const dispatch = useDispatch()

    const handleSubmit = (e)=>{
      e.preventDefault();
      setFormSubmit(true)
      if(!isFormValid) return;
      dispatch(setRegisterForm(formState))
      dispatch(setPage())

    }
  return (
    <div className="bg-Blue">
      <HeaderBSide />
      <ProgressBar />
      <div className="flex flex-col justify-center items-center gap-8">
        <h3 className="font-bold text-3xl text-center text-white ">¡Hola! vamos a crear tu perfil</h3>
        <form className="w-[28rem] " onSubmit={handleSubmit}>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-white ">Email address:</label>
            <input type="email" name="email" value={email} onChange={onInputChange} id="email" class="bg-Blue border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
            {
              (!!emailValid && formSubmit) ? <span className="text-red-500">{emailValid}</span> : null
            }
          </div> 
          <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-white ">Nombre:</label>
            <input type="text" name="name" value={name} onChange={onInputChange} id="name" class="bg-Blue border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john doe" required />
            {
              (!!nameValid && formSubmit) ? <span className="text-red-500">{nameValid}</span> : null
            }
          </div>
          <div class="mb-6">
            <label for="apellido" class="block mb-2 text-sm font-medium text-white ">Apellido:</label>
            <input type="text" name="lastName" value={lastName} onChange={onInputChange} id="apellido" class="bg-Blue border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john doe" required />
            {
              (!!lastNameValid && formSubmit) ? <span className="text-red-500">{lastNameValid}</span> : null
            }
          </div>
          <div class="flex items-center mb-6">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-white rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-white accent-Green"/>
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-white ">Acepto Termino y condiciones</label>
          </div>
          <div className="flex justify-center items-center gap-9 mb-6">
              <a href="#" class="font-medium text-Green  hover:underline">Volver</a>
              <button type="submit" class="text-Green  w-[200px] hover:text-white border border-Green  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-Green dark:text-Green dark:hover:text-white dark:hover:bg-BlueDark dark:focus:ring-Green">Siguiente</button>
          </div>
          <div className="flex justify-center">
          <span className="text-white">Ya tenes Cuenta? <Link to='/auth/login' class=" text-white font-extrabold hover:underline">Iniciar Sesion</Link></span>
          </div>  
        </form>
      </div>
    </div>
  );
};
