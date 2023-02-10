import React from "react";
import { Progress } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

const progressCardsInfo = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "Lorem ipsum dolor sit",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    progress: 70,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    title: "Lorem ipsum dolor sit",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    progress: 69,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
    title: "Lorem ipsum dolor sit",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    progress: 76,
  },
];

const ProgressCards = () => {
  return (
    <div className="flex gap-4">
      {progressCardsInfo.map((cards) => (
        <div
          className="p-4 rounded-3xl flex gap-6 items-center bg-GrayLight"
          key={cards.id}>
          <img src={cards.image} className="inline-block w-24 rounded-full ring-white"></img>
          <div>
            <h4 className="text-xl text-start">{cards.title}</h4>
            <p className="text-sm text-start mt-1 mb-2">{cards.paragraph}</p>
            <Progress progress={cards.progress} color="dark"/>
          </div>
        </div>
      ))}
      <div className="flex items-center">
        <FontAwesomeIcon icon={faChevronRight} className="h-8"/>
      </div>
    </div>
  );
};

export default ProgressCards;
