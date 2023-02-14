import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlay } from 'react-icons/fi'
import { BiTimeFive } from 'react-icons/bi'

const arrayCursos = [
  { id: 1, name: 'Introducción a Javascript 1', time: 32 },
  { id: 2, name: 'Introducción a Javascript 2', time: 32 },
  { id: 3, name: 'Introducción a Javascript 3', time: 32 },
  { id: 4, name: 'Introducción a Javascript 4', time: 32 },
  { id: 5, name: 'Introducción a Javascript 5', time: 32 },
  { id: 6, name: 'Introducción a Javascript 5', time: 32 },
  { id: 7, name: 'Introducción a Javascript 5', time: 32 }
]
export const ListaVideos = () => {
  return (
    <div className='m-10 w-96 '>
      <div className=' flex place-content-end mb-2'>
        <Link
          className=' gap-2 flex items-center text-white bg-gray-500 font-medium rounded-lg text-sm px-5 py-2  '
          to=''>
          <FiPlay />
          Comenzar Curso
        </Link>
      </div>

      <div className='bg-slate-500   rounded-sm text-lg max-h-96 p-1 text-white'>
        <div className='flex justify-between p-5 items-center'>
          <p>{arrayCursos.length} Lecciones</p>
          <p>1-{arrayCursos.length}</p>
        </div>
        <div className='overflow-y-auto  h-80 scrollbar-none text-base'>
          {arrayCursos.map((curso, index) => (
            <>
              <div
                key={curso.id}
                className='flex justify-between px-2 items-center m-3'>
                <p className=' '>
                  {index + 1}. {curso.name}
                </p>
                <div className='flex items-center gap-2 '>
                  <BiTimeFive />
                  <p>{curso.time} min</p>
                </div>
              </div>
              <hr class='h-px mx-2 bg-gray-200 border-0 dark:bg-gray-700 last:h-0' />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
