import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNoteThunk, fetchAllNotes } from '../../../../store/notes/thunks'

export const NotesMap = ({ notes }) => {
  const { title, content, lesson } = notes
  
  
  const dispatch = useDispatch()
  const [description, setDescription] = useState(false)
  const toogleDescription = () => {
    setDescription(!description)
  }

  const handleDeleteNote = (id) => {
    dispatch(deleteNoteThunk(id))
  }
  const handleUpdateNote = (id) => {}
  //scrollbar-none
  return (
    <div className='grid text-base text-white '>
      <div className='flex p-2'>
        <p
          className='text-lg p-2 cursor-pointer text-white'
          onClick={toogleDescription}>
          {title}
        </p>
      </div>
      <div className={`items-center  ${description ? 'grid' : 'hidden'}`}>
        <div>
          <p className='text-lg'>{content}</p>
          <p className='text-lg text-gray-500'>
            nota creada en: {lesson.title}
          </p>
        </div>
        <div className='flex justify-evenly text-white'>
          <button onClick={() => handleDeleteNote(notes.id)}>Eliminar</button>
          <button>Actualizar</button>
        </div>
      </div>
    </div>
  )
}
