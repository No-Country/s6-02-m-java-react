import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNoteThunk, fetchAllNotes } from '../../../../store/notes/thunks'
import { VscClose } from 'react-icons/vsc'
import { FiBookOpen, FiEdit3, FiSave } from 'react-icons/fi'
import { NotesMap } from './NotesMap'

const ViewNotes = () => {
  const dispatch = useDispatch()
  const { notes } = useSelector((state) => state.notes)
  const [openForm, setOpenForm] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    dispatch(fetchAllNotes())
  }, [])
  const toogleForm = (e) => {
    e.preventDefault()
    setContent('')
    setTitle('')
    setOpenForm(!openForm)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = { title, content }
    await dispatch(addNoteThunk(data))
    await dispatch(fetchAllNotes())
    setOpenForm(!openForm)
    setContent('')
    setTitle('')
  }
  return (
    <>
      <div className='bg-BlueLight rounded-xl text-lg p-2 mt-8   mb-5 mr-5 grid gap-2 text-white max-h-[474px] overflow-auto scrollbar-none'>
        <div className='flex justify-between m-2 items-center text-2xl'>
          <h2>Mis Notas</h2>
          <div
            className='flex items-center cursor-pointer text-Green'
            onClick={toogleForm}>
            <FiEdit3 size={24} />
            <p>Nueva nota</p>
          </div>
        </div>
        <div className='scrollbar-none text-base '>
          <div
            className={`grid text-center text-white ${
              openForm ? 'hidden' : 'grid'
            }`}>
            {notes.length === 0 ? (
              <p className=' text-lg items-center'>No hay notas</p>
            ) : (
              notes.map((note) => <NotesMap key={note.id} notes={note} />)
            )}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={` text-gray-900    
              ${openForm ? 'grid' : 'hidden'}
          `}>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='bg-transparent px-3 pb-2 appearance-none  focus:outline-none focus:shadow-outline text-white'
            placeholder='Ecribe un Titulo'
          />
          <textarea
            cols='5'
            rows='1'
            className='bg-transparent resize-none outline-none py-1 px-3 h-60 md:h-52 h-40 border-b-2 border-t-2 text-white'
            placeholder='Escribe Tus Notas'
            value={content}
            onChange={(e) => setContent(e.target.value)}></textarea>
          <div className='grid justify-center gap-2 my-3 lg:grid md:flex 2xl:flex items-center md:content-center'>
            <button
              onClick={toogleForm}
              className='flex justify-center items-center text-sm gap-2 py-4 px-9 text-Green'>
              <VscClose size={40} /> Cancelar
            </button>
            <button
              type='submit'
              className='flex items-center justify-center gap-2 p-4 bg-Green rounded-xl md:p-2 md:px-4 '>
              <FiSave size={40} />
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ViewNotes
