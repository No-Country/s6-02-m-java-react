import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNoteThunk, fetchAllNotes } from '../../store/notes/thunks'
import Modal from 'react-modal'
const NotesPage = () => {
  const dispatch = useDispatch()
  const { notes } = useSelector((state) => state.notes)
  const [view, setIsView] = useState(false)
  const [viewLesson, setIsViewLesson] = useState(false)
  useEffect(() => {
    dispatch(fetchAllNotes())
  }, [])

  const handleDeleteNote = (id) => {
    dispatch(deleteNoteThunk(id))
  }

  return (
    <div className='grid justify-items-center'>
      {notes.length === 0 ? (
        <div className='bg-BlueLight rounded-xl text-lg my-4  text-white grid items-center justify-items-center w-4/5 p-3'>
          <p className='text-3xl p-5'>No Hay Notas</p>
        </div>
      ) : (
        notes.map((note) => (
          <div
            className='bg-BlueLight rounded-xl text-lg my-4  text-white grid items-center justify-items-center w-4/5 p-3'
            key={note.id}>
            <div className='m-2 text-center grid text-2xl content-center gap-2'>
              <p className='cursor-pointer'>Titulo: {note.title}</p>
              <div>
                <h2>Tu Nota:</h2>
                <p className='mb-2'> {note.content}</p>
                <p>Creaste esta nota en: {note.lesson.title}</p>
              </div>
            </div>

            <button
              type='button'
              onClick={() => handleDeleteNote(note.id)}
              className='bg-Green rounded-xl px-6 py-4 my-4 text-xl w-2/6 font-semibold text-black hover:text-white  transition-all'>
              Borrar
            </button>
          </div>
        ))
      )}
    </div>
  )
}
export default NotesPage
