import { configureStore } from '@reduxjs/toolkit'

import { notesSlice } from './notes'

import { authSlice } from './auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notes: notesSlice.reducer

  },
})