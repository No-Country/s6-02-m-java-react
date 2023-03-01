import React from 'react'
import { courses } from '../../../helpers'
import { Card } from './card'
export const CardContainer = () => {
  return (
    <>
    <div className='flex justify-between flex-wrap p-2 gap-16 '>
       {
          courses.map(course=>{
            return(
                <Card key={course.name} {...course} />
            )
          })
       }
    </div>
    </>
  )
}
