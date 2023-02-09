import React from 'react'
import { courses } from '../../helpers'
import { Card } from './card'
export const CardContainer = () => {
  return (
    <>
     <h2 class='font-semibold text-center underline mt-5 text-3xl'>Cursos</h2>
    <div className='flex justify-between flex-wrap p-4 '>
       {
          courses.map(course=>{
            return(
                <Card {...course} />
            )
          })
       }
    </div>
    </>
  )
}
