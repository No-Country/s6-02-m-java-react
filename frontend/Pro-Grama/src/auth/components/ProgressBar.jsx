import React from 'react'
import { useSelector } from 'react-redux'
import './styles.css'

export const ProgressBar = () => {
  const{page}=useSelector(state=>state.auth)
  return (
    <div class="container1">
        <div class="progress-container">
        <div class="progress" id="progress"></div>
        <div class={page === 1 ? "circle bg-Green" : "circle bg-GrayDark"}>1</div>
        <div class={page === 2 ? "circle bg-Green" : "circle bg-GrayDark"}>2</div>
        <div class={page === 3 ? "circle bg-Green" : "circle bg-GrayDark"}>3</div>
        </div>
   </div>
  )
}
