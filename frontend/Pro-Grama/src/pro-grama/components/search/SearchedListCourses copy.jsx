import { SearchedCourse } from '.';
import { CoursesData } from '../../../helpers'

function SearchedListCourses({ courseName = ''}) {

    const courses = (
      CoursesData.filter(course => course
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
  