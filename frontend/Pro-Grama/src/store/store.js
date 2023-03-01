import { configureStore } from '@reduxjs/toolkit'

import { notesSlice } from './notes'

import { authSlice } from './auth/authSlice'
import { lessonsSlice } from './lessons/lessonSlice'
import { courseSlice } from './course/courseSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notes: notesSlice.reducer,
    lessons: lessonsSlice.reducer,
    course: courseSlice.reducer,

  },
})
