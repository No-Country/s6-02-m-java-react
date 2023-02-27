import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking' ,
        token:"",
        registerForm:{},
        page: 1,
        profile:{}
    },
    reducers: {
        setProfile:(state, {payload})=>{
            state.profile  = payload
        },
         setRegisterForm: (state,{payload} ) => {
             state.registerForm = payload
         },
         setPage: (state, {payload})=>{
            state.page = state.page + 1
         },
         setToken:(state, {payload})=>{
            state.status = 'authorized'
            state.token = payload
         },
         onlogout : (state, {payload})=>{
            state.status = 'not-authorized'
            state.token = ""
            state.page = 1
            state.profile ={};
         }

     }
});


export const { setRegisterForm, setPage, setToken, onlogout, setProfile } = authSlice.actions;