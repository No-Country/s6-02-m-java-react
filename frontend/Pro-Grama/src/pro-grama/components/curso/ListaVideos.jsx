import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import './curso.css'

const arrayCursos = [
  { id: 1, name: 'Introducción a Javascript 1', time: 32 },
  { id: 2, name: 'Introducción a Javascript 2', time: 32 },
  { id: 3, name: 'Introducción a Javascript 3', time: 32 },
  { id: 4, name: 'Introducción a Javascript 4', time: 32 },
  { id: 5, name: 'Introducción a Javascript 5', time: 32 },
  { id: 6, name: 'Introducción a Javascript 5', time: 32 },
  { id: 7, name: 'Introducción a Javascript 6', time: 32 },
  { id: 8, name: 'Introducción a Javascript 7', time: 31 },
  { id: 9, name: 'Introducción a Javascript 8', time: 31 },
  { id: 10, name: 'Introducción a Javascript 9', time: 22 },
  { id: 11, name: 'Introducción a Javascript 10', time: 35 },
  { id: 12, name: 'Introducción a Javascript 11', time: 37 },
  { id: 13, name: 'Introducción a Javascript 12', time: 39 },
  { id: 14, name: 'Introducción a Javascript 13', time: 32 }
]
export const ListaVideos = ({ lessons }) => {
  if (lessons) {
    return (
      <div>
        <div className='bg-[#0D2438] rounded-xl text-lg p-1 text-white list-video'>
          <div className='flex justify-between p-5 items-center'>
            <p>{lessons.length} Lecciones</p>
          <p>1-{lessons.length}</p>
          </div>
          <div className='overflow-y-auto list-video_scroll scrollbar-none text-base'>
          {lessons.map((curso, index) => (
            <>
              <div
                key={curso.index}
                className='flex justify-between px-2 items-center m-3'
              >
                <p className=' '>
                  {index + 1}. {curso.title}
                </p>
                <div className='flex items-center gap-2 '>
                  <BiTimeFive />
                  <p>{curso.duration} min</p>
                </div>
              </div>
              <hr class='h-px mx-2 bg-gray-200 border-0 dark:bg-gray-700 last:h-0' />
            </>
          ))}
        </div>
        </div>
      </div>
    )
  } else {
    return <span></span>
  }
}
