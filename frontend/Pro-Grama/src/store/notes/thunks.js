import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
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
    const { urlVideo } = getState().lessons
    noteData.lessonId = urlVideo
    try {
      const response = await axios.post(url, noteData, config)
      return response.data // devuelve la respuesta de la API (los datos de la nota creada)
    } catch (error) {
      return rejectWithValue(error.response.data) // maneja cualquier error de la API
    }
  }
)

export const updateNoteThunk = createAsyncThunk(
  'notes/updateNote',
  async ({ id, noteData }, { rejectWithValue, getState }) => {
    const url = `https://pro-grama-production.up.railway.app/note/${id}` // URL de la API para actualizar una nota existente
    try {
      const response = await axios.patch(url, noteData, config)
      console.log(response)
      return response.data // devuelve la respuesta de la API (los datos de la nota actualizada)
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
export const fetchAllNotes = createAsyncThunk(
  'notes/fetchAllNotes',
  async (_, thunkAPI) => {
    const url = `https://pro-grama-production.up.railway.app/note/my-notes` // URL de la API para obtener todas las notas
    try {
      const response = await axios.get(url, config) // pasamos la configuración con el token
      return response.data.response
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data) // manejo del error
    }
  }
)

//Todo Problemas de Cors
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
