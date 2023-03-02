import React, { useState } from 'react'
import { HeaderBSide } from '../../pro-grama/components'
import { ProgressBar } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../hooks/useForm'
import { setPage, setRegisterForm } from '../../store/auth/authSlice'
import { FaCheck } from 'react-icons/fa'
const initial={
  userName:"",
  password: "",
  confirmPassword:"",
}
let passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/
const formValidations ={
  userName:[(value)=>  value.length >=4, 'userName is required' ],
  password:[(value)=> passwordRegex.test(value), 'Password must at least have 8 characters and special character and uppercase'],
  confirmPassword:[(value)=>  value.length >=8, 'Password must at least have 8 characters and special character and uppercase']
}
export const Register2 = () => {
   const{registerForm}= useSelector(state=> state.auth)  
  const{onInputChange, formState, password, confirmPassword, userName, isFormValid,userNameValid, passwordValid,confirmPasswordValid}=useForm(initial, formValidations)
  const [formSubmit, setFormSubmit] = useState(false)
  let form = registerForm;
  form ={
    ...form,
    password
  }
  // console.log(form)
    
    const dispatch= useDispatch();


  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormSubmit(true)
    if(!isFormValid) return;
    dispatch(setRegisterForm(form))
    dispatch(setPage());
  }
  return (
    <div className='bg-Blue p-2'>
    <HeaderBSide />
    <ProgressBar/>
    <div className="flex flex-col justify-center items-center gap-8 p-10 lg:p-0">
        <h3 className="font-bold text-2xl  lg:text-3xl text-start text-white ">Elige tus credenciales</h3>
        <form className=" w-fit  lg:w-[28rem] ">
          <div class="mb-6">
            <label for="text" class="block mb-2 text-sm font-medium text-white ">Nombre de usuario:</label>
            <input type="text" id="text" name='userName' value={userName} onChange={onInputChange} class="bg-Blue border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john doe" required />
            {
              !!userNameValid && formSubmit && <span className='text-red-500'>{userNameValid}</span>
            }
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-white ">Contraseña:</label>
            <input type="password" name="password" value={password} onChange={onInputChange} id="password" class="bg-Blue border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john doe" required />
            {
              !!passwordValid && formSubmit && <span className='text-red-500'>{passwordValid}</span>
            }
            <div class="flex items-center mb-1 mt-2">
                <FaCheck className='text-white' />
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-white">Minimo 8 caracteres</label>
            </div>
            <div class="flex items-center mb-1">
                <FaCheck className='text-white' />
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-white ">incluir al menos una minuscula y mayuscula</label>
            </div>
            <div class="flex items-center">
            <FaCheck className='text-white' />
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-white ">incluir al menos un numero</label>
            </div>
          </div>
          <div class="mb-6">
            <label for="confirmPassword" class="block mb-2 text-sm font-medium text-white ">Confirmar Contraseña:</label>
            <input type="password" name='confirmPassword' value={confirmPassword} onChange={onInputChange} id="confirmPassword" class="bg-Blue border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john doe" required />
          </div>
          
          <div className="flex justify-center items-center gap-9 mb-6">
              <Link to='/auth/register' class="font-medium text-Green hover:underline">Volver</Link>
              <button type="button" onClick={handleSubmit} class="text-Green w-[200px] hover:text-white border border-Green hover:bg-BlueDark focus:ring-4 focus:outline-none focus:ring-Green font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2   dark:hover:text-white  dark:focus:ring-blue-800">Siguiente</button>
          </div>
        </form>
      </div>
    </div>
  )
}
