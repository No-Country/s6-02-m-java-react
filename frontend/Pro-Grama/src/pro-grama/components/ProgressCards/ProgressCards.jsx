import React from "react";
import { Progress } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const progressCardsInfo = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "HTML",
    paragraph: "Clase 1: Introduccion",
    progress: 70,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "CSS",
    paragraph: "Clase 6: Display Grid",
    progress: 69,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    title: "JavaScript",
    paragraph: "Clase 3: Bucles",
    progress: 40,
  },
];

const ProgressCards = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-between py-2 my-4 rounded-lg ">
        {progressCardsInfo.map((cards) => (
          <>
            <Link to="/CourseDetail">
              <div
                className="w-[24rem] rounded-3xl flex gap-0 items-center border border-gray-300"
                key={cards.id}
              >
                <div className="flex justify-start">
                  <img
                    src={cards.image}
                    className="w-[6.5rem] h-fit rounded-l-3xl ring-white"
                  />
                  <div className="items-center px-4 py-4">
                    <h4 className="text-xl text-start">{cards.title}</h4>
                    <p className="text-sm text-start mt-1 mb-2">
                      {cards.paragraph}
                    </p>
                    <Progress progress={cards.progress} color="dark" />
                  </div>
                </div>
              </div>
            </Link>
          </>
        ))}
        {/* <div className="flex items-center">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="h-8 dark:text-gray-500 px-4"
          />
        </div> */}
      </div>
    </>
  );
};

export default ProgressCards;
