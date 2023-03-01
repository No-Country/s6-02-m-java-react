const CardCourse = ({ name, img }) => {
  return (
    <div className="course flex items-center justify-center">
      <div className="info-course bg-Blue border border-gray-400 py-4 px-8 rounded-md flex flex-col justify-center items-center w-[12rem] sm:w-[16rem]">
        <img src={img} className="h-16 w-16 rounded-full" alt="" />
        <div className="text-center text-md">
          <h2 className="py-2 text-white">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
