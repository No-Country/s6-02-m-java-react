
function SearchedCourse({ course }) {
    return <li className="flex w-full gap-6 p-3 cursor-pointer bg-gray-200">
      <img
        className="w-20 h-16 object-contain"
        src={course.img}
        alt={`image of ${course.name}`}
      />
      <div className="flex flex-col justify-center">
        <div className="inline-flex gap-6 w-[16rem] justify-between rounded-lg">
          <h1 className="break-all text-left">{ course.name }</h1>
          <span className="bg-gray-400 rounded-full px-2 h-6">{ course.dificulty}</span>    
        </div> 
        <div className="inline-flex gap-3">
          <p>{ course.modules } módulos</p>
          <p>{ course.hours } horas</p>
        </div>
      </div>
    </li>;
  }
  
export default SearchedCourse;
  