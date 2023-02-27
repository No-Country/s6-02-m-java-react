import { configureStore } from '@reduxjs/toolkit'
import { courseSlice } from './slices/course'

export const store = configureStore({
  reducer: {
    course: courseSlice.reducer,
  },
})