import React, { useEffect, useState } from 'react'
import { TiPencil } from 'react-icons/ti'
import { FiBookOpen, FiEdit3, FiSave } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { VscClose } from 'react-icons/vsc'
import { NotesMap } from './NotesMap'
import { addNoteThunk, fetchAllNotes } from '../../../../store/notes/thunks'

const ViewNotes = () => {
  const dispatch = useDispatch()
  const { notes } = useSelector((state) => state.notes)
  useEffect(() => {
    dispatch(fetchAllNotes())
  }, [dispatch])
  const [openForm, setOpenForm] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const toogleForm = (e) => {
    e.preventDefault()
    setOpenForm(!openForm)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = { title, content }

    // if (selectedNote) {
    //   dispatch(
    //     updateNote({
    //       id: selectedNote.id,
    //       title: title,
    //       content: content
    //     })
    //   )
    // } else {
    dispatch(addNoteThunk(data))
    // }
    setTitle('')
    setContent('')
  }
  return (
    <>
      <div className='bg-BlueLigth rounded-xl text-lg p-2  mb-5 mr-5 grid gap-2 text-white max-h-[474px] overflow-auto scrollbar-none'>
        <div className='flex justify-between m-2 items-center'>
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
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            cols='5'
            rows='1'
            className='bg-transparent resize-none outline-none py-1 px-3 h-60 border-b-2 border-t-2 text-white'
            placeholder='Escribe Tus Notas'
            id='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}></textarea>
          <div className='flex justify-center gap-2 my-3'>
            <button
              onClick={toogleForm}
              className='flex justify-center items-center text-sm gap-2 py-4 px-9 text-Green'>
              <VscClose size={40} /> Cancelar
            </button>
            <button
              type='submit'
              className='flex items-center content-center gap-2 p-4 bg-Green rounded-xl'>
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
