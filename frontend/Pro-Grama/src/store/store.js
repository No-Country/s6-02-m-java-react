import { configureStore } from '@reduxjs/toolkit'

import { notesSlice } from './notes'

import { authSlice } from './auth/authSlice'
import { courseSlice } from './course/courseSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notes: notesSlice.reducer,
    course: courseSlice.reducer,

  },
})
