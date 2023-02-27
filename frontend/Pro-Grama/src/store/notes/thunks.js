import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    isSaving: false,
    notes: [],
    error: null,
    loading: false
  },
  reducers: {
    savingNewNote: (state, action) => {
      state.isSaving = true
    },
    addNote: (state, action) => {
      state.push(action.payload)
      state.isSaving = false
    },
    updateNote: (state, action) => {},
    deleteNote: (state, action) => {}
  }
})
export const { addNote, updateNote, deleteNote } = notesSlice.actions
