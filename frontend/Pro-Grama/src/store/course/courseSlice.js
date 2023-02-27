import { createSlice } from '@reduxjs/toolkit';
import { CoursesData } from '../../helpers';

const initialState = {
    courses: CoursesData,
    filteredCourses: []
}

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    filterCourse: (state, action) => {
      state.filteredCourses = action.payload
      },
      setCourses: (state, action) => {
        state.filteredCourses = []
    }
    },
    
})

export const { filterCourse, setCourses } = courseSlice.actions;
export default courseSlice