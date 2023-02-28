import React, { useState } from "react";
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
import Sidebar from "../Sidebar";

/*importacion datos desde JSON*/
import data from "../../../helpers/infoCourseData.json";

export const Description = () => {
  const [hearthPress, setHearthPress] = useState(true);

  const handleHearth = () => {
    setHearthPress(!hearthPress);
  };

  return (
    <>
      {/* <Sidebar/> */}
      <div className="flex items-center max-md:px-8 my-6 justify-between max-md:flex-col px-12">
        <div className="flex justify-between items-center  w-8/12 max-md:w-full">
          <h2 className="text-4xl text-white">{`Curso de ${data.title}`}</h2>
          <Button color="white" onClick={handleHearth}>
            {hearthPress ? (
              <AiOutlineHeart className="w-8 h-8 fill-Green"  />
            ) : (
              <AiFillHeart className="w-8 h-8 fill-Green" />
            )}
          </Button>
        </div>
        <div className="flex justify-end">
          <Button
            className="h-8 text-black max-md:w-full max-md:mt-4 bg-[#6BFF81] hover:bg-[#BCF0C0]" 
          >
            <GrPlay className="mr-2" />
            Comenzar curso
          </Button>
        </div>
      </div> 
      <div className="flex max-md:px-8 justify-between gap-8 max-lg:flex-wrap px-12">
        <div className="flex-col w-8/12 max-lg:w-full">
          {/*imagen provisoria para poder trabajar*/}
          <img className="rounded-xl" src={data.image}></img>
          <div className="flex justify-between px-4 py-2 my-8 rounded-xl bg-[#0D2438]">
            <p className="py-4 flex items-center gap-2 text-white">
              {" "}
              <AiOutlineUnorderedList fill="white" /> {`${data.lessons} lecciones`}
            </p>
            <p className="py-4 flex items-center gap-2 text-white">
              {" "}
              <AiOutlineClockCircle fill="white" /> {`${data.hours} horas`}
            </p>
            <p className="bg-[LightGreen] rounded-full py-2 px-4 self-center">
              {data.level}
            </p>
          </div>
          <div>
            <p className="text-white">{data.description}</p>
          </div>
          <Button color="gray" className="h-8 mt-6 text-Green border-Green bg-transparent hover:bg-Green hover:text-Blue mb-16">
            <AiOutlinePlus className="mr-2 " />
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

