import React, { useState } from 'react'
import { FiBookOpen, FiSave } from 'react-icons/fi'
import { VscClose } from 'react-icons/vsc'
const Form = ({ setNotes, notes, hiden, sethiden }) => {
  const [desc, setDesc] = useState('')
  const [error, setError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (desc === '') return setError(true)
    const objNotes = {
      desc
    }
    setNotes([objNotes, ...notes])
    setDesc('')
  }
  const handleReset = (e) => {
    e.preventDefault()
    sethiden(!hiden)
    setDesc('')
    setError(false)
  }

  return (
    <div className='bg-slate-300 rounded-xl text-lg p-4  mb-5 mr-5 grid gap-2'>
      <h2 className=' text-black '>Nueva nota</h2>

      <div className='flex items-center text-black gap-2'>
        <FiBookOpen size={24} />
        <p>1.1 Intorducción</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className={` text-gray-900  bg-white transition-shadow ${
          hiden ? ' hidden' : 'grid '
        } `}>
        <textarea
          name='desc'
          id='desc'
          cols='5'
          rows='1'
          className='bg-transparent resize-none outline-none py-1 px-3 h-60 border-b-2'
          placeholder='Escribe Tus Notas'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}></textarea>
        <div className='flex justify-center gap-2 my-3'>
          <button
            onClick={handleReset}
            className='flex justify-center items-center gap-2 py-4 px-9 bg-red-500'>
            <VscClose size={14} /> Cancelar
          </button>
          <button
            type='submit'
            className='flex items-center content-center  gap-2 py-4 px-9 bg-red-500'>
            <FiSave size={40} />
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
export default Form
