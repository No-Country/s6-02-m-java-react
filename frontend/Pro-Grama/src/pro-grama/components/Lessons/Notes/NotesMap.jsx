import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNoteThunk, fetchNotesThunk } from '../../../../store/notes/thunks'

export const NotesMap = ({ note }) => {
  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatchh()

  useEffect(() => {
    dispatch(fetchNotesThunk())
  }, [dispatch])

  const handleDeleteNote = (id) => {
    dispatch(deleteNoteThunk(id))
  }
  return (
    <div
      key={note.id}
      className='grid grid-cols-1 gap-2 scrollbar-none text-base'>
      <div className='flex justify-between items-center'>
        <p className='text-lg cursor-pointer' onClick={onSelect}>
          {note.title}
        </p>
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-lg'>{note.content}</p>
      </div>
      <div>
        <button onClick={() => handleDeleteNote(note.id)}>Eliminar</button>
      </div>
    </div>
  )
}
