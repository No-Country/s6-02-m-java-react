import { useState, useEffect } from "react";
import { areas, dificulty, hours, CoursesData } from "../../../helpers";
import useFilter from "../../hooks/useFilter";
import SearchedListCourses from "./SearchedListCourses";

function Filter() {
  const [filters, setFilters] = useState([])
  const { data:dataD, handleOnChange } = useFilter(CoursesData, 'dificulty')
  const { data:dataA, handleOnChange: handleOnChangeArea } = useFilter(CoursesData, 'area')
  const { data:dataT, handleOnChange: handleOnChangeTime } = useFilter(CoursesData, 'hours')

    useEffect(() => {
      if (dataA.length || dataD.length || dataT.length) {
        setFilters([...dataA, ...dataD, ...dataT])
      } else {
        setFilters([])
      }
      
    }, [dataA, dataD, dataT])
  
  const isEnd = (end) => (end ? `- ${end}Hr` : "+");

  return (
    <div className="absolute flex bg-white w-full flex-wrap rounded-lg mt-2 gap-4 p-2">
      <div>
        <h2>Dificulta</h2>
        <hr className="my-2 h-px border-none bg-gray-500" />
        <ul className="flex flex-col">
          {dificulty.map(({ label, value }, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={index}
                name={value}
                value={value}
                onChange={handleOnChange}
              />
              <label className="mx-1" htmlFor={index}>
                {label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Área</h2>
        <hr className="my-2 h-px border-none bg-gray-500" />
        <ul className="flex flex-col">
          {areas.map((area, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={index}
                name={area}
                value={area}
                onChange={handleOnChangeArea}
              />
              <label className="mx-1" htmlFor={index}>
                {area}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Tiempo</h2>
        <hr className="my-2 h-px border-none bg-gray-500" />
        <ul className="flex flex-col">
          {hours.map(({ start, end }, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={index}
                name={`${start} - ${end}`}
                value={`${start},${end}`}
                onChange={handleOnChangeTime}
              />
              <label className="mx-1" htmlFor={index}>{`${start}Hr ${isEnd(
                end
              )}`}</label>
            </li>
          ))}
        </ul>
      </div>
      <button className="btn-filter w-full max-w-[200px] ml-auto">Filtrar</button>
    </div>
  );
}

export default Filter;
