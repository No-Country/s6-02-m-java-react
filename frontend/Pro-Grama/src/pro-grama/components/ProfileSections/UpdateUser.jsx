import React, { useState } from 'react'
import { useForm } from '../../../auth/hooks/useForm'
import { AiFillSave } from 'react-icons/ai'
import { faX } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'
import { useAuthStore } from '../../../hooks/useAuthStore'

const initialForm ={
    newPassword:"",
    confirmPassword: "",
}
let passwordRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/
const formValidations = {
    email: [(value)=> value.includes('@'), 'email must have @'],
    name: [(value)=>  value.length >=4, 'Name is required' ],
    lastname: [(value)=>  value.length >=4, 'Name is required' ],
    password: [(value)=> value.length >= 8, 'Password must have more than 6 letters'],
    // newPassword: [(value)=> passwordRegex.test(value), 'Password must at least have 8 characters and special character and uppercase'],
    // confirmPassword:[(value)=> value.length >= 8, 'Password must have more than 6 letters']
  }
  const passwordValidations ={
    newPassword: [(value)=> passwordRegex.test(value), 'Password must at least have 8 characters and special character and uppercase'],
     confirmPassword:[(value)=> value.length >= 8, 'Password must have more than 6 letters']
  }


export const UpdateUser = ({handleChange}) => {
   
    const [formSubmit, setformSubmit] = useState(false)
    const{profile}=useSelector(state=> state.auth)
    const{onInputChange,email,name,lastname,password,formState,emailValid,nameValid,lastnameValid,passwordValid, 
        isFormValid}=useForm(profile, formValidations)
     const{onInputChange:onPasswordChange, newPassword, newPasswordValid, confirmPassword, formState:passwordState, isFormValid:isPasswordsValid}= useForm(initialForm,passwordValidations)   
    // console.log(profile)
    const{startUpdatingProfile}= useAuthStore()
    const[open, setOpen] = useState(false)
     const handleOpen = ()=>{
        setOpen(!open)
     }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setformSubmit(true)
        if(!open){
            if(!isFormValid) return;
            startUpdatingProfile({name:name,lastname:lastname,email:email,password:password})
            console.log("funciono")
            return;
        }
        if(!isFormValid || !isPasswordsValid) return;
        if(newPassword !== confirmPassword){
            return Swal.fire('Validation error', 'passwords must match', 'error')
        }
         startUpdatingProfile({name:name, lastname:lastname, email:email, password:newPassword})
        console.log({...formState, ...passwordState})
    }
  return (
    <>
    <div className='mt-5 w-full flex justify-between items-center p-5 '>
    <div className=" flex">
          <div className="rounded-full h-20 w-20 bg-gray-400" />
          <div className="row text-3xl px-4 text-white">
            {profile?.name} {profile?.lastname}
            <div className="col  text-lg text-white">
              Modifica los datos de tu perfil
            </div>
          </div>
        </div>
        <div >
        <button type="button" onClick={handleChange} class="focus:outline-none w-[15rem] text-Green bg-Blue hover:bg-Blue focus:ring-4 border-2 border-Green font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2   dark:focus:ring-green-800"> 
            <div className='flex justify-center items-center gap-5'>
            <FontAwesomeIcon icon={faX} className="text-lg text-Green"  />
             <span className='text-lg text-green'>Cancel</span>
            </div>
            </button>
        </div>
    </div>
    <br />
    <hr />
    <div className='flex justify-center items-center'>
     <form className='  p-6 h-fit mt-3 w-[40rem] mb-4 flex flex-col ' onSubmit={handleSubmit}>
     <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-white ">Email address:</label>
            <input type="email" name='email' value={email} onChange={onInputChange} id="email" class="bg-Blue border self-start border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required />
            {
                (!!emailValid && formSubmit)
                ? <span className='text-lg text-red-500'>{emailValid}</span>
                : null
            }
        </div>
        <div className='flex justify-between gap-4'>
        <div class="mb-6 w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-white ">Name:</label>
            <input type="text" name='name' value={name} onChange={onInputChange}  id="name" class="bg-Blue border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john doe" required />
            {
                (!!nameValid && formSubmit)
                ? <span className='text-lg text-red-500'>{nameValid}</span>
                : null
            }
        </div> 
        <div class="mb-6 w-full">
            <label for="lastName" class="block mb-2 text-sm font-medium text-white ">Last Name:</label>
            <input type="text" name='lastname' value={lastname} onChange={onInputChange}   id="lastName" class="bg-Blue border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  placeholder="john doe" required />
            {
                (!!lastnameValid && formSubmit)
                ? <span className='text-lg text-red-500'>{lastnameValid}</span>
                : null
            }
        </div> 
        </div>
        <div className='flex  items-center gap-3' >
        <div class="mb-6 w-[18.5rem] ">
            <label for="password" class="block mb-2 text-sm font-medium text-white ">Password:</label>
            <input type="password" name='password' value={password} onChange={onInputChange}   id="password" class="bg-Blue border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
            {
                (!!passwordValid && formSubmit)
                ? <span className='text-lg text-red-500'>{passwordValid}</span>
                : null
            }
        </div>
        <button type="button" onClick={handleOpen}  class="text-Green mt-3 w-[200px] h-fit hover:text-white border border-Green hover:bg-Blue focus:ring-4 focus:outline-none focus:ring-Green font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2   dark:hover:text-white  dark:focus:ring-blue-800">Cambiar contraseña</button>
        </div>
        <div className={ open ? 'flex justify-between gap-4' : 'hidden'}>
        <div class="mb-6 w-full ">
            <label for="newPassword" class="block mb-2 text-sm font-medium text-white "> New Password:</label>
            <input type="password" name='newPassword' value={newPassword} onChange={onPasswordChange}   id="newPassword" class="bg-Blue border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  />
            {
                (!!newPasswordValid && formSubmit)
                ? <span className='text-lg text-red-500'>{newPasswordValid}</span>
                : null
            }
        </div>
        <div class="mb-6 w-full ">
            <label for="confirmPassword" class="block mb-2 text-sm font-medium text-white ">ConfirmPassword:</label>
            <input type="password" name='confirmPassword' value={confirmPassword} onChange={onPasswordChange}   id="password" class="bg-Blue border border-white text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-white dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
        </div>
        </div>
        <div className='flex justify-end mt-6'>
        <button type="submit" class="text-white  bg-Green hover:bg-Blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none dark:focus:ring-blue-800">
         <div className='flex items-center justify-center'>  
        <AiFillSave className='text-center text-lg font-extrabold' />
         <span className='font-extrabold'>Guardar cambios</span>  
         </div>  
         </button>
        </div> 
     </form>
     </div>
    </>
  )
}
