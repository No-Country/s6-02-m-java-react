import { useEffect, useState } from 'react'
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
  return (
    <div className='grid text-base text-white border-b-2 last:border-b-0 mt-2 first:mt-0 scrollbar-none'>
      <p className='text-start text-xl'>Titulo: </p>
      <div className='flex justify-between px-2 pb-2'>
        <p
          className='text-lg  cursor-pointer text-white uppercase'
          onClick={toogleDescription}>
          {title}
        </p>
        <button
          className='bg-Green rounded-xl px-4 py-1 text-black transition-all hover:text-white font-semibold uppercase text-lg'
          onClick={() => handleDeleteNote(notes.id)}>
          Eliminar
        </button>
      </div>
      <div className={`items-center  ${description ? 'grid' : 'hidden'}`}>
        <p className='text-2xl'>{content}</p>

        <div className='flex justify-evenly text-white'></div>
      </div>
    </div>
  )
}
