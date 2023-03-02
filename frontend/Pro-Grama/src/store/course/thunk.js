import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCourses = createAsyncThunk(
  'course/getCourses',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("https://pro-grama-production.up.railway.app/course/public")
      return data.response
    } catch (err) {
      return rejectWithValue('La contraseña o el email no coinciden')
    }
  }
)
