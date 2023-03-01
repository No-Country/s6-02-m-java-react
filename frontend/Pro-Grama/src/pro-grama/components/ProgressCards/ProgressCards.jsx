import React from "react";
import { Progress } from "flowbite-react";
import { Link } from "react-router-dom";

const progressCardsInfo = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU",
    title: "HTML",
    paragraph: "Clase 12: Maquetación",
    progress: 90,
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    title: "CSS",
    paragraph: "Clase 6: Display Grid",
    progress: 60,
  },
  {
    id: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    title: "JavaScript",
    paragraph: "Clase 3: Bucles",
    progress: 10,
  },
];

const ProgressCards = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-between py-2 my-4 rounded-lg">
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
      </div>
    </>
  );
};

export default ProgressCards;
