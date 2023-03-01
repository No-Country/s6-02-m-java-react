import { createSlice } from '@reduxjs/toolkit';
import { CoursesData } from '../../helpers';
import { getCourses } from './thunk';

const initialState = {
    courses: [],
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
  extraReducers: (builder) => {
    builder.addCase(getCourses.fulfilled, (state, action) => {
      state.courses = action.payload
    })
  }
})

export const { filterCourse, setCourses } = courseSlice.actions;
export default courseSlice