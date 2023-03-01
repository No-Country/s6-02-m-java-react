import { courses } from "../../../helpers";
import CardCourse from "./CardCourse";
const ProgressCourses = () => {
  return (
    <div className="bg-BlueDark flex flex-col justify-center  my-3 border border-Blue gray-400 rounded-3xl px-4 py-6">
      <h2 className="text-3xl pb-4">Hoja de Ruta Recomenda</h2>
      {/* Container de Cards */}
      <div className="my-courses flex flex-wrap gap-8 sm:gap-8">
        {courses.map((course) => {
          return <CardCourse {...course} />;
        })}
      </div>
    </div>
  );
};

export default ProgressCourses;
