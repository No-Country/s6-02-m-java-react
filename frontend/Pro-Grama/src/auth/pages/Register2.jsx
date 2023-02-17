import React from 'react'
import { HeaderBSide } from '../../pro-grama/components'
import { ProgressBar } from '../components'
import { Link } from 'react-router-dom'

export const Register2 = () => {
  return (
    <>
    <HeaderBSide />
    <ProgressBar/>
    <div className="flex flex-col justify-center items-center gap-8">
        <h3 className="font-bold text-3xl text-start ">Elige tus credenciales</h3>
        <form className="w-[28rem] ">
          <div class="mb-6">
            <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Nombre de usuario:</label>
            <input type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" required />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Contraseña:</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" required />
            <div class="flex items-center mb-1 mt-2">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 rounded-xl text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">Minimo 8 caracteres</label>
            </div>
            <div class="flex items-center mb-1">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">incluir al menos una minuscula y mayuscula</label>
            </div>
            <div class="flex items-center">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">incluir al menos un numero</label>
            </div>
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirmar Contraseña:</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john doe" required />
          </div>
          
          <div className="flex justify-center items-center gap-9 mb-6">
              <Link to='/auth/register' class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Volver</Link>
              <button type="button" class="text-blue-700 w-[200px] hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Siguiente</button>
          </div>
        </form>
      </div>
    </>
  )
}
