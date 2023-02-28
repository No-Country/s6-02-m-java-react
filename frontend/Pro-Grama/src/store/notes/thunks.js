import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
const authToken = localStorage.getItem('token')

export const addNoteThunk = createAsyncThunk(
  'notes/addNote',
  async (noteData, { rejectWithValue, getState }) => {
    const token = localStorage.getItem('token') // token previamente declarado
    const url = `https://pro-grama-production.up.railway.app/note/create` // URL de la API para agregar una nota
    try {
      const response = await axios.post(url, noteData, {
        headers: { Authorization: `Bearer ${token}` } // incluye el token en los encabezados de la solicitud
      })
      console.log(response)
      return response.data // devuelve la respuesta de la API (los datos de la nota creada)
    } catch (error) {
      return rejectWithValue(error.response.data) // maneja cualquier error de la API
    }
  }
)
//el back debe de proporcionar le id para el delete y el update
export const updateNoteThunk = createAsyncThunk(
  'notes/updateNote',
  async ({ id, noteData }, { rejectWithValue, getState }) => {
    const token = localStorage.getItem('token')
    const url = `https://pro-grama-production.up.railway.app/note/${id}` // URL de la API para actualizar una nota existente
    try {
      const response = await axios.patch(url, noteData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(response)
      return response.data // devuelve la respuesta de la API (los datos de la nota actualizada)
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
export const fetchNotesThunk = createAsyncThunk(
  'notes/fetchNotes',
  async (_, { rejectWithValue, getState }) => {
    const token = localStorage.getItem('token')
    const url = `https://pro-grama-production.up.railway.app/note/my-notes` // URL de la API para obtener todas las notas
    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(response)
      return response.data // devuelve la respuesta de la API (todas las notas)
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
export const deleteNoteThunk = createAsyncThunk(
  'notes/deleteNote',
  async (id, { rejectWithValue, getState }) => {
    const token = localStorage.getItem('token')
    const url = `https://pro-grama-production.up.railway.app/note/${id}` // URL de la API para eliminar una nota existente
    try {
      const response = await axios.delete(url, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(response)
      return id // devuelve el ID de la nota eliminada
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)