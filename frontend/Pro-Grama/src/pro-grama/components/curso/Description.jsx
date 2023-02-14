import React, { useEffect, useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineClockCircle,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { GrPlay } from "react-icons/gr";
import { Button } from "flowbite-react";
import ReactPlayer from "react-player";
import "./curso.css";
import { Link } from "react-router-dom";
import { ListaVideos } from "./ListaVideos";

const courseJsData = {
  title: "Javascript",
  lessons: 50,
  hours: 32,
  level: "Avanzado",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro illum blanditiis, debitis vero accusamus dolor nesciunt enim quos rem impedit quae! Obcaecati, alias. Saepe, delectus voluptas quam ipsum recusandae consequatur!",
  video: "https://www.youtube.com/watch?v=rbuYtrNUxg4&ab_channel=Fazt",
};

export const Description = () => {
  const [hearthPress, setHearthPress] = useState(true);

  const handleHearth = () => {
    setHearthPress(!hearthPress);
  };

  return (
    <>
      <div className="flex items-center max-md:px-8 px-32 my-6 justify-between max-md:flex-col">
        <div
          className="flex justify-between items-center  w-8/12 max-md:w-full "
         
        >
          <h2 className="text-3xl">{`Curso de ${courseJsData.title}`}</h2>
          <Button color="white" onClick={handleHearth}>
            {hearthPress ? (
              <AiOutlineHeart className="w-8 h-8" />
            ) : (
              <AiFillHeart className="w-8 h-8" />
            )}
          </Button>
        </div>
        <div className="flex justify-end">
          <Button
            className="h-8 text-black hover:bg-slate-300  max-md:w-full max-md:mt-4"
            style={{ backgroundColor: "grey" }}
          >
            <GrPlay className="mr-2" />
            Comenzar curso
          </Button>
        </div>
      </div>
      <div className="flex px-32 max-md:px-8 justify-between gap-8 max-lg:flex-wrap">
        <div className="flex-col w-8/12 max-lg:w-full  ">
          <div className="player-wrapper rounded-xl">
            <ReactPlayer
              url={courseJsData.video}
              className="react-player rounded-xl"
              controls
              
              volume="0.5"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="flex justify-between p-4" >
            <p className="py-4 flex items-center gap-2">
              {" "}
              <AiOutlineUnorderedList /> {`${courseJsData.lessons} lecciones`}
            </p>
            <p className="py-4 flex items-center gap-2">
              {" "}
              <AiOutlineClockCircle /> {`${courseJsData.hours} horas`}
            </p>
            <p className="bg-slate-200 rounded-full py-2 px-4 self-center">
              {courseJsData.level}
            </p>
          </div>
          <div>
            <p>{courseJsData.description}</p>
          </div>
          <Button color="gray" className="h-8 mt-6">
            <AiOutlinePlus className="mr-2" />
            Agregar a la hoja de ruta
          </Button>
        </div>
        <div className="max-lg:w-full w-4/12">
          <ListaVideos />
        </div>
      </div>
    </>
  );
};

//reactplayer: dentro del componente para instroducir un archivo local: url=(require('./videos/video.mp4'))
//controls para dar la posibilidad de hacer la reproduccion -- playing para tener que
//eventos se pueden poner eventos onPlay / onPause / on Ended
