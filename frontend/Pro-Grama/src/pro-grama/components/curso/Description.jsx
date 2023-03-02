import React, { useState, useEffect } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineClockCircle,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { GrPlay } from "react-icons/gr";
import { Button } from "flowbite-react";
import "./curso.css";
import { ListaVideos } from "./ListaVideos";
import axios from "axios";
/*importacion datos desde JSON*/
import CourseImg from "../../../assets/curso-js.jpeg";
import { useParams } from "react-router-dom";

export const Description = () => {
  const [hearthPress, setHearthPress] = useState(true);

  let { id } = useParams();

  const handleHearth = () => {
    setHearthPress(!hearthPress);
  };
  const [course, setCourse] = useState([]);

  const getCourse = async () => {
    // try {
    const token = localStorage.getItem("token");
    let response = await axios.get(
      `https://pro-grama-production.up.railway.app/course/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    // console.log(response.data.response)
    setCourse(response.data.response);
    // return true
    // } catch (err) {
    //   console.log(err)
    //   return false
    // }
  };
  useEffect(() => {
    getCourse();
  }, [id]);

  if (course.length === 0) {
    return (
      <>
        <div className="flex justify-center align-content-center py-20">
          <h2 className="text-white text-4xl">No hay Leccion en Progreso</h2>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex max-md:px-8 my-6 max-md:flex-col px-12">
        <div className="flex justify-between items-center w-full max-md:w-full">
          <h2 className="text-2xl text-white">{`${course.title}`}</h2>
          <div className="flex justify-end">
            <Button color="white" onClick={handleHearth}>
              {hearthPress ? (
                <AiOutlineHeart className="w-8 h-8 fill-Green" />
              ) : (
                <AiFillHeart className="w-8 h-8 fill-Green" />
              )}
            </Button>
            <Button className="h-8 text-black max-md:w-full max-md:mt-4 bg-Green dark:bg-Green dark:hover:bg-GreenLight">
              <GrPlay className="mr-2" />
              Comenzar curso
            </Button>
          </div>
        </div>
      </div>
      <div className="flex max-md:px-8 justify-between gap-8 max-lg:flex-wrap px-12">
        <div className="flex-col w-8/12 max-lg:w-full">
          {/*imagen provisoria para poder trabajar*/}
          <img
            className="rounded-xl w-full lg:w-full lg:h-[38rem] object-cover"
            src={course.imageUrl === "image_url" ? CourseImg : course.imageUrl}
          ></img>
          <div className="flex justify-between px-4 py-2 my-8 rounded-xl bg-[#0D2438]">
            <p className="py-4 flex items-center gap-2 text-white">
              {" "}
              <AiOutlineUnorderedList fill="white" />
              {`${course.lessons.length} Lecciones`}
            </p>
            <p className="py-4 flex items-center gap-2 text-white">
              {" "}
              <AiOutlineClockCircle fill="white" />{" "}
              {`${course.totalDuration} horas`}
            </p>
            <p className="bg-[LightGreen] rounded-lg py-2 px-4 self-center">
              {course.difficulty}
            </p>
          </div>
          <div>
            <p className="text-white">{course.description}</p>
          </div>
          <Button
            color="gray"
            className="h-8 mt-6 text-Green border-Green bg-transparent hover:bg-Green hover:text-Blue mb-16"
          >
            <AiOutlinePlus className="mr-2 " />
            Agregar a la hoja de ruta
          </Button>
        </div>
        <div className="max-lg:w-full w-4/12">
          <ListaVideos title={course?.title} lessons={course?.lessons} />
        </div>
      </div>
    </>
  );
};
