import React from "react";
import { BiTimeFive } from "react-icons/bi";
import "./curso.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUrlVideo } from "../../../store/lessons/lessonSlice";

export const ListaVideos = ({ lessons }) => {
  const dispatch = useDispatch();

  lessons.sort((a, b) => a.id - b.id)
  if (lessons) {
    return (
      <div>
        <div className="bg-Blue rounded-xl text-lg p-1 text-white list-video">
          <div className="flex justify-between p-5 items-center">
            <p>{lessons.length} Lecciones</p>
            <p>1-{lessons.length}</p>
          </div>
          <div className="overflow-y-auto list-video_scroll scrollbar-none text-base">
            {lessons.map((curso, index) => {
              return (
                <>
                  <div
                    key={curso.index}
                    className="flex justify-between px-2 items-center m-3"
                  >
                    <Link
                      className=" "
                      onClick={() => dispatch(setUrlVideo(curso?.urlVideo))}
                      to="/CourseLessons"
                      href={curso?.urlVideo}
                    >
                      {curso.title}
                    </Link>
                    <div className="flex items-center gap-2 ">
                      <BiTimeFive />
                      <p>{curso.duration} min</p>
                    </div>
                  </div>
                  <hr class="h-px mx-2 bg-gray-200 border-0 dark:bg-gray-700 last:h-0" />
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <span></span>;
  }
};
