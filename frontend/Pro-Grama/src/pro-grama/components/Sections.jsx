import React from 'react'
import { Link } from 'react-router-dom'
import { CardContainer } from './cardCourses/cardContainer'
import Header from './Header'
import ProgressCards from './ProgressCards/ProgressCards'
import ProgressCourses from './progressCourses/progressCourses'

const Sections = () => {
  return (
    <div className=' '>
      {/* <Header /> */}
      <div className='px-12'>
        {/* Primer Seccion de cuadrados, mover grid-cols para cambiar el estilo */}
        <h1 className='text-5xl my-2'>Bienvenido! @User!</h1>
        <span className='text-2xl mb-5'>¿Qué vamos a aprender hoy?</span>

        {/* Segunda Seccion de cuadrados, mover Flex para cambiar el estilo */}
        <h2 className='text-4xl py-6'>Cursos En Progreso</h2>
        <ProgressCards />
        {/* Segunda Seccion de cuadrados, mover Flex para cambiar el estilo */}

        {/* Tercer Seccion de cuadrados, mover grid-cols para cambiar el estilo */}
        <div className='grid grid-cols-1 gap-4 mb-4'>
        <ProgressCourses />
          
        </div>

        {/* Cuarta Seccion de cuadrados, mover Flex para cambiar el estilo */}
        <div className='flex justify-between items-center'>
          <h2 className='text-4xl py-6'>Cursos Disponibles</h2>
          <Link to="/courses">Ver todos</Link>
        </div>
        <div className='flex items-center justify-center mb-4 rounded-sm bg-gray-50 dark:bg-gray-800'>
          <CardContainer />
        </div>

        {/* Ultima Seccion de cuadrados, mover grid-cols para cambiar el estilo */}
        {/* <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Sections
