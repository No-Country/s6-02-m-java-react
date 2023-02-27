import { useState } from "react";
import { languages } from "../../helpers";
import { AiOutlineHeart, AiOutlineUnorderedList } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../../store/course";


function CoursesPage() {
  const { courses: CoursesData, filteredCourses } = useSelector(
    (state) => state.course
    )
  const dispatch = useDispatch();
  const [language, setLanguage] = useState("todos");


  // Peticion del URL del Curso

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://pro-grama-production.up.railway.app/course")
  //     .then((res) => console.log(res.data));
      
  // }, []);

  const handleChange = (e) => {
    dispatch(setCourses())
    setLanguage(e.target.value);
  };

  const courses = () => {

    if (filteredCourses.length) return filteredCourses
    const result = CoursesData.filter(
      (course) => course.tags.toLowerCase() === language.toLowerCase()
    )
    if (language === "todos" && !filteredCourses.length){
      return CoursesData
    }
    return result
  };

  return (
    <div>
      <div className="flex gap-6 justify-between items-center text-white mb-12">
        <h1 className="text-5xl my-2 ml-10">Todos los cursos</h1>
        <select className="bg-BlueMedium text-white p-2 rounded-lg border outline-white border-white" name="select" onChange={handleChange} defaultValue='todos'>
          <option value="todos">
            Todos
          </option>
          {languages.map((language) => (
            <option
              className='hover:bg-white'
              key={language}
              value={language}
            >{language}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 justify-items-center md:justify-items-start md:grid-cols-courses justify-center">
        {courses().length ? (
          courses().map((course) => (
            <div
              className="flex flex-col max-w-sm border-2 text-white rounded-xl border-gray-500"
              key={course.name}
            >
              <img
                className="h-52 object-cover rounded-t-lg aspect-video"
                src={course.img}
                alt={`Imagen del curso ${course.name}`}
              />
              <div className="description-course px-4 py-5 flex flex-col justify-start">
                <div className="title-fav flex flex-row items-center justify-between  pb-4">
                  <h1 className="text-xl">{course.name}</h1>
                  <AiOutlineHeart className="text-xl" />
                </div>
                <div className="details flex flex-row justify-between items-center">
                  <div className="lessons flex flex-row items-center">
                    <AiOutlineUnorderedList />
                    <p className="text-sm px-2 font-normal">
                      {course.modules} Lecciones
                    </p>
                  </div>
                  <div className="hours flex flex-row items-center">
                    <BiTimeFive />
                    <p className="text-sm px-2 font-normal">
                      {course.hours} Horas
                    </p>
                  </div>
                  <p className="level text-xs text-gray-800 font-bold bg-gray-400 p-1 px-2 rounded-xl">
                    {course.dificulty}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No se encontraron cursos de {language}</p>
        )}
      </div>
    </div>
  );
}

export default CoursesPage;
