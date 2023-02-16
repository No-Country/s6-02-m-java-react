import { SearchedCourse } from '.';
import data from '../../../helpers/datacourses.json'

function SearchedListCourses({ courseName = ''}) {

    const courses = (
        data.filter(course => course
            .name.toLowerCase()
            .includes(courseName)
            )
    )

    return <ul className="divide-y absolute w-max">
      {
        courses.map(course => <SearchedCourse course={course} />)
      }
    </ul>;
  }
  
  export default SearchedListCourses;
  