import { createSlice } from '@reduxjs/toolkit';

export const lessonsSlice = createSlice({
    name: 'lessons',
    initialState: {
        curso: {}
    },
    reducers: {
         setCurso: (state, {payload})=>{
            state.curso = payload
         }
 }})  


export const { setCurso } = lessonsSlice.actions;