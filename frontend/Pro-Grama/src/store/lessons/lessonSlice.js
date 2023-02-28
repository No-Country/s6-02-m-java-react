import { createSlice } from '@reduxjs/toolkit';

export const lessonsSlice = createSlice({
    name: 'lessons',
    initialState: {
        urlVideo: ""
    },
    reducers: {
         setUrlVideo: (state, {payload})=>{
            state.urlVideo = payload
         }
 }})  


export const { setUrlVideo } = lessonsSlice.actions;