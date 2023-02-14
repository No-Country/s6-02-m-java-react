import React from 'react'
import './styles.css'

export const ProgressBar = () => {
  return (
    <div class="container1">
        <div class="progress-container">
        <div class="progress" id="progress"></div>
        <div class="circle active bg-slate-700">1</div>
        <div class="circle  bg-slate-700">2</div>
        <div class="circle  bg-slate-500">3</div>
        </div>
   </div>
  )
}
