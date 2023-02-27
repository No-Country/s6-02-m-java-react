import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { areas, dificulty, hours, CoursesData } from "../../../helpers";
import { filterCourse, setCourses } from "../../../store/course";
import useFilter from "../../hooks/useFilter";

function Filter({ setIsFilterOpen }) {
  const { courses } = useSelector((state) => state.course);
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formatDificulty = dificulty.map((d) => d.value);
  const { data: dataD, handleOnChange: handleOnChangeD } =
    useFilter(formatDificulty);
  const { data: dataA, handleOnChange: handleOnChangeA } = useFilter(areas);
  const { data: dataH, handleOnChange: handleOnChangeH } = useFilter(hours);

  const formatHour = (hour) => {
    let newHour = hour.split(","),
      start = newHour[0],
      end = newHour[1];

    return `${start}Hr ${end ? `- ${end}Hr ` : "+"}`;
  };

  const findTime = (time, hour) => {
    let newHour = time.split(","),
      start = Number(newHour[0]),
      end = Number(newHour[1]);
    return hour > start && hour < end;
  };

  const handleFilter = () => {
    const arr = courses.filter(
      (course) =>
        dataD.find((data) => data == course.dificulty) &&
        dataA.find((data) => data == course.area) &&
        dataH.find((data) => findTime(data, course.hours))
    );
    
    if (!arr.length) {
      Swal.fire({
        text: "Ooops no hay coincidencia",
        confirmButtonColor: "#6BFF81",
      });
      return;
    }

    dispatch(filterCourse(arr));
    setIsFilterOpen((open) => !open);
    if (pathname !== "/landing") navigate("/courses");
  };

  return (
    <div className="absolute flex w-full flex-wrap rounded-lg mt-2 gap-4 p-2 bg-BlueMedium text-white">
      <div>
        <h2>Dificulta</h2>
        <hr className="my-2 h-px border-none bg-gray-500" />
        <ul className="flex flex-col">
          {dificulty.map(({ label, value }, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={index}
                name="dificulty"
                value={value}
                onChange={(e) => handleOnChangeD(e, e.target.name)}
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
                name="area"
                value={area}
                onChange={(e) => handleOnChangeA(e, e.target.name)}
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
          {hours.map((hour, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={index}
                name="hours"
                value={hour}
                onChange={(e) => handleOnChangeH(e, e.target.name)}
              />
              <label className="mx-1" htmlFor={index}>
                {formatHour(hour)}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button
        className="rounded-md w-full max-w-[150px] ml-auto h-8 self-end bg-Green text-BlueDark"
        onClick={handleFilter}
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
