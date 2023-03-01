import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurso } from '../../store/lessons/lessonSlice'

import LessonsCourses from '../components/Lessons/LessonsCourses'
import Notes from '../components/Lessons/Notes/Notes'

const LessonsPage = () => {
  const dispatch = useDispatch();
  const curso = JSON.parse(localStorage.getItem('lesson'));
  useEffect(()=>{
    if(curso){
      dispatch(setCurso(curso))
    }
  },[])
  return (
    <>
      <LessonsCourses />
      {/* <Notes /> */}
    </>
  )
}

export default LessonsPage
