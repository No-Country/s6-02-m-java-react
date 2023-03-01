import { createSlice } from '@reduxjs/toolkit'
import { deleteNoteThunk, fetchAllNotes } from './thunks'

export const notesSlice = createSlice({
  name: 'notes',
  initialState: { notes: [], status: null, error: null },
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
    }, 
    clearNotes: (state) => {
      state.notes = []
    },
   
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNotes.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAllNotes.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.notes = action.payload
      })
      .addCase(fetchAllNotes.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(deleteNoteThunk.fulfilled, (state, action) => {
        // Eliminar la nota de la lista de notas del estado
        const noteId = action.payload
        state.notes = state.notes.filter((note) => note.id !== noteId)
      })
      .addCase(deleteNoteThunk.rejected, (state, action) => {
        // Manejar errores si la eliminación de la nota falla
        state.error = action.payload
      })
  }
})
export const { addNote, removeNote, updateNote, selectNote } =
  notesSlice.actions
