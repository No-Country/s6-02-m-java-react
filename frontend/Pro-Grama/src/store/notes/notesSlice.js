import { createSlice } from '@reduxjs/toolkit'

export const notesSlice = createSlice({
  name: 'notes',
  initialState: { title: '', content: '' },
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload)
    },
    removeNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload)
    },
    updateNote: (state, action) => {
      const { id, title, content } = action.payload
      const noteIndex = state.findIndex((note) => note.id === id)
      if (noteIndex !== -1) {
        state[noteIndex] = { id, title, content }
      }
    },
    selectNote: (state, action) => {
      const noteId = action.payload
      state.selectedNote = state.notes.find((note) => note.id === noteId)
    }
  }
})

export const { addNote, removeNote, updateNote, selectNote } = notesSlice.actions
