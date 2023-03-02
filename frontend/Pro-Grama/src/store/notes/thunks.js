import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addNote } from './notesSlice'

const token = localStorage.getItem('token')
const config = {
  headers: {
    Authorization: `Bearer ${token}` // agregamos el token en el header de la petición
  }
}
export const addNoteThunk = createAsyncThunk(
  'notes/addNote',
  async (noteData, { rejectWithValue, getState }) => {
    const url = `https://pro-grama-production.up.railway.app/note/create` // URL de la API para agregar una nota
    const { id } = getState().lessons.curso
    noteData.lessonId = id
    try {
      const response = await axios.post(url, noteData, config)
      return response.data
      // return dispatch(addNote(response.data)) // devuelve la respuesta de la API (los datos de la nota creada)
    } catch (error) {
      return rejectWithValue(error.response.data) // maneja cualquier error de la API
    }
  }
)

export const fetchAllNotes = createAsyncThunk(
  'notes/fetchAllNotes',
  async (_, thunkAPI) => {
    const url = `https://pro-grama-production.up.railway.app/note/my-notes` // URL de la API para obtener todas las notas
    try {
      const response = await axios.get(url, config) 
      return response.data.response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data) // manejo del error
    }
  }
)

export const deleteNoteThunk = createAsyncThunk(
  'notes/deleteNote',
  async (id, { rejectWithValue, getState }) => {
    const url = `https://pro-grama-production.up.railway.app/note/${id}` // URL de la API para eliminar una nota existente
    try {
      const response = await axios.delete(url, config)
      console.log(response)
      return id // devuelve el ID de la nota eliminada
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
