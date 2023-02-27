import React, { useState } from 'react'
import { useForm } from '../../../auth/hooks/useForm'

const initialForm ={
    email: "",
    name:"",
    lastName:"",
    password:""
}
const formValidations = {
    email: [(value)=> value.includes('@'), 'email must have @'],
    name: [(value)=>  value.length >=4, 'Name is required' ],
    lastName: [(value)=>  value.length >=4, 'Name is required' ],
    password: [(value)=> value.length >= 6, 'Password must have more than 6 letters'],
  }
export const UpdateUser = () => {
    const{onInputChange,email,name,lastName,password, formState,emailValid,nameValid,lastNameValid,passwordValid, isFormValid}=useForm(initialForm, formValidations)
    const [formSubmit, setformSubmit] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setformSubmit(true)
        if(!isFormValid) return;
        console.log(formState)
    }
  return (
    <>
    <h3 className='text-center text-3xl font-bold'>Actualizar Cuenta</h3>
    <div className='flex justify-center items-center'>
     <form className='bg-slate-200 drop-shadow-lg w-[34rem] p-6 h-fit mt-3 mb-4 rounded-xl ' onSubmit={handleSubmit}>
     <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email address:</label>
            <input type="email" name='email' value={email} onChange={onInputChange} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
            {
                (!!emailValid && formSubmit)
                ? <span className='text-lg text-red-500'>{emailValid}</span>
                : null
            }
        </div>
        <div class="mb-6">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name:</label>
            <input type="text" name='name' value={name} onChange={onInputChange}  id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" required />
            {
                (!!nameValid && formSubmit)
                ? <span className='text-lg text-red-500'>{nameValid}</span>
                : null
            }
        </div> 
        <div class="mb-6">
            <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 ">Last Name:</label>
            <input type="text" name='lastName' value={lastName} onChange={onInputChange}   id="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" required />
            {
                (!!lastNameValid && formSubmit)
                ? <span className='text-lg text-red-500'>{lastNameValid}</span>
                : null
            }
        </div> 
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password:</label>
            <input type="password" name='password' value={password} onChange={onInputChange}   id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
            {
                (!!passwordValid && formSubmit)
                ? <span className='text-lg text-red-500'>{passwordValid}</span>
                : null
            }
        </div> 
        <div className='flex justify-center'>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Actualizar</button>
        </div> 
     </form>
     </div>
    </>
  )
}
