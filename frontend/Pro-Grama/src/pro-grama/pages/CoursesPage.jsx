import { CoursesData } from "../../helpers";
import { AiOutlineHeart, AiOutlineUnorderedList } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import axios from "axios";
import { useState, useEffect } from "react";
import CourseImg from "../../assets/curso-js.jpeg";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [language, setLanguage] = useState("todos");

  // Peticion del URL del Curso

  const [data, setData] = useState([]);
  const [listCourses, setListCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://pro-grama-production.up.railway.app/course/public")
      .then((res) => setListCourses(res.data.response));
  }, []);
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  const courses = () => {
    const result = CoursesData.filter(
      (course) => course.technology.toLowerCase() === language.toLowerCase()
    );
    if (language === "todos") return CoursesData;
    return result;
  };

  return (
    <div className="min-h-screen">
      <div className="flex gap-6 justify-between items-center mb-12">
        <h1 className="text-5xl my-2 ml-10 text-white">Todos los cursos</h1>
      </div>
      <div className="grid gap-6 w-full grid-cols-1 sm:grid-cols-2 justify-items-center md:justify-items-start md:grid-cols-courses justify-center">
        {listCourses.length ? (
          listCourses.map((course) => (
            <div
              className="flex flex-col max-w-sm border-2 rounded-xl border-gray-500"
              key={course.id}
            >
              <img
                className="h-52 object-cover rounded-t-lg aspect-video"
                src={
                  course.imageUrl === "image_url" ? CourseImg : course.imageUrl
                }
                alt={`Imagen del curso ${course.title}`}
              />
              <div className="description-course px-4 py-5 flex flex-col justify-start">
                <div className="title-fav flex flex-row items-center justify-between  pb-4">
                  <Link to={`/CourseDetail/${course.id}`}><h1 className="text-xl text-white">{course.title}</h1></Link>
                  <AiOutlineHeart className="text-xl text-white" />
                </div>
                <div className="details flex flex-row justify-between items-center">
                  <div className="lessons flex flex-row items-center">
                    <AiOutlineUnorderedList className="text-white" />
                    <p className="text-sm px-2 font-normal text-white">
                      {course.lessons.length} Lecciones
                    </p>
                  </div>
                  <div className="hours flex flex-row items-center">
                    <BiTimeFive className="text-white" />
                    <p className="text-sm px-2 font-normal text-white">
                      {course.totalDuration} Horas
                    </p>
                  </div>
                  <p className="level text-xs text-gray-800 font-bold bg-gray-400 p-1 px-2 rounded-xl">
                    {course.difficulty}
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
  );
}

export default CoursesPage;
