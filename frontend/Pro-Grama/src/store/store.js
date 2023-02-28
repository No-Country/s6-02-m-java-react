import { configureStore } from '@reduxjs/toolkit'
import { notesSlice } from './notes'


export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer
  },
})