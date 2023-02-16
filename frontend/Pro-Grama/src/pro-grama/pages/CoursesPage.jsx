import React, { useState } from 'react'
import { CoursesData, languages } from '../../helpers'
import { AiOutlineHeart, AiOutlineUnorderedList } from 'react-icons/ai'
import { BiTimeFive } from 'react-icons/bi'

function CoursesPage () {
  const [language, setLanguage] = useState('todos')

  const handleChange = e => {
    setLanguage(e.target.value)
  }

  const courses = () => {
    const result = CoursesData.filter(
      course => course.technology.toLowerCase() === language.toLowerCase()
    )
    if (language === 'todos') return CoursesData
    return result
  }

  return (
    <div>
      <div className='flex gap-6 justify-between items-center mb-12'>
      <h1 className='text-5xl my-2 ml-10'>Todos los cursos</h1>
        <select name='select' onChange={handleChange}>
          <option value='todos' selected>
            Todos
          </option>
          {languages.map(language => (
            <option value={language}>{language}</option>
          ))}
        </select>
      </div>
      <div className='grid gap-6 w-full grid-cols-1 sm:grid-cols-2 justify-items-center md:justify-items-start md:grid-cols-courses justify-center'>
        {courses().length ? (
          courses().map(course => (
            <div
              className='flex flex-col max-w-sm border-2 rounded-xl border-gray-500'
              key={course.name}
            >
              <img
                className='h-52 object-cover rounded-t-lg aspect-video'
                src={course.img}
                alt={`Imagen del curso ${course.name}`}
              />
              <div className='description-course px-4 py-5 flex flex-col justify-start'>
                <div className='title-fav flex flex-row items-center justify-between  pb-4'>
                  <h1 className='text-xl'>{course.name}</h1>
                  <AiOutlineHeart className='text-xl' />
                </div>
                <div className='details flex flex-row justify-between items-center'>
                  <div className='lessons flex flex-row items-center'>
                    <AiOutlineUnorderedList />
                    <p className='text-sm px-2 font-normal'>
                      {course.modules} Lecciones
                    </p>
                  </div>
                  <div className='hours flex flex-row items-center'>
                    <BiTimeFive />
                    <p className='text-sm px-2 font-normal'>
                      {course.hours} Horas
                    </p>
                  </div>
                  <p className='level text-xs text-gray-800 font-bold bg-gray-400 p-1 px-2 rounded-xl'>
                    {course.dificulty}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron cursos de {language}</p>
        )}
      </div>
    </div>
  )
}

export default CoursesPage
