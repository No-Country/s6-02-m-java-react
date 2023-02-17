import ImgDemo from "../../../assets/vue.png";
import { courses } from "../../../helpers";
import CardCourse from "./CardCourse";
const ProgressCourses = () => {
  return (
    <div className="bg-gray-300 flex flex-col items-start justify-between my-3 border border-gray-400 rounded-3xl px-4 py-6">
      <h2 className="text-3xl pb-4">Hoja de ruta</h2>
      {/* Container de Cards */}
      <div className="my-courses flex flex-wrap">
        {courses.map((course) => {
          return <CardCourse {...course} />;
        })}

        <div className="course flex items-center justify-center">
          {/* Instalar y usar Sweet Alert 2 */}
          <div
            className="info-course bg-gray-700 p-8 px-10 rounded-md flex flex-col justify-start hover:bg-gray-500 transition-all hover:cursor-pointer"
            onClick={() => {
              alert("Queres agregar un curso mas a tu ruta?");
            }}
          >
            <p className="text-4xl text-white">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCourses;
