import React from "react";
import ReactPlayer from "react-player";
import { Button } from "flowbite-react";
import { GrPlay } from "react-icons/gr";
import { AiOutlineClockCircle } from "react-icons/ai";

/*importacion datos desde JSON*/
import data from "../../../helpers/infoCourseData.json";
import Notes from "./Notes/Notes";
import { useSelector } from "react-redux";

const LessonsCourses = () => {
  const { curso } = useSelector((state) => state.lessons);

  return (
    <div className="flex max-md:px-8 justify-between gap-8 max-lg:flex-wrap pb-24 ">
      <div className="flex-col w-8/12 max-lg:w-full">
        <div className="flex justify-between items-center py-4">
          <div className="text-white">
            <h2 className="text-3xl py-1">{`${curso?.course}`}</h2>
            <p className="py-1">{`Clase ${curso?.title}. `}</p>
            <p className="flex items-center gap-2 py-1">
              <AiOutlineClockCircle />
              {`${curso.duration} minutos`}
            </p>
          </div>
        </div>

        <div className="player-wrapper rounded-xl">
          <ReactPlayer
            url={curso.urlVideo}
            className="react-player rounded-xl"
            controls
            volume="0.5"
            width={"100%"}
            height={"100%"}
          />
        </div>
      </div>
      <div className="max-lg:w-full w-4/12">
        <Notes />
      </div>
    </div>
  );
};

export default LessonsCourses;
