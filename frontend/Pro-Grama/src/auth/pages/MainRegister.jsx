import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Register } from './Register'
import { Register2 } from './Register2'
import { Register3 } from './Register3'

export const MainRegister = () => {
    const{page} = useSelector(state=>state.auth)
    

    if(page === 1){
        return(
            <Register />
        )
    }
   
   return(
     (page === 2) 
     ? <Register2 />
     : <Register3 />
   ) 

  }
