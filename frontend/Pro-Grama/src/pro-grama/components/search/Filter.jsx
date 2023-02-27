import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { areas, dificulty, hours, CoursesData } from "../../../helpers";
import { filterCourse, setCourses } from "../../../store/slices/course";
import useFilter from "../../hooks/useFilter";


function Filter({ setIsFilterOpen }) {
  const { courses } = useSelector((state) => state.course);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formatDificulty = dificulty.map((d) => d.value)
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

      dispatch(filterCourse(arr));
      setIsFilterOpen((open) => !open);
      navigate("/courses");
  };

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
        className="btn-filter w-full max-w-[150px] ml-auto h-8 self-end"
        onClick={handleFilter}
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
