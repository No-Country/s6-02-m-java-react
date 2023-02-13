import React, { useState } from "react";
import { CoursesData, languages } from "../../helpers";

function CoursesPage() {

    const [language, setLanguage] = useState('todos')
    
    const handleChange = (e) => {
        setLanguage(e.target.value)
    }

    const courses = () => {
        const result = CoursesData.filter(course => course
            .technology.toLowerCase() === language.toLowerCase()
        )
        if (language === 'todos') return CoursesData
        return result
    }

  return (
    <div>
      <div className="flex gap-6 justify-between items-center mb-12">
        <h1 className="text-5xl my-2">Todos los cursos</h1>
        <select name="select" onChange={handleChange}>
          <option value="todos" selected>
            Todos
          </option>
          {languages.map((language) => (
            <option value={language}>{language}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 justify-items-center md:grid-cols-courses justify-center">
       { courses().length? courses().map((course) => 
       
        <div className="flex flex-col gap-6 max-w-sm" key={course.name}>
          <img
            className='h-52 w-full object-cover'
            src={course.img} alt={`Imagen del curso ${course.name}`}
          /> 
          <h1>{course.name}</h1>
        </div>
       ): <p>No se encontraron cursos de {language}</p>
       }
      </div>
    </div>
  );
}

export default CoursesPage;
