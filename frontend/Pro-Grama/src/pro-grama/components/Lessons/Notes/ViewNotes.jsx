import React from 'react'
import { TiPencil } from 'react-icons/ti'
import { FiBookOpen } from 'react-icons/fi'
const ViewNotes = ({ notes, sethiden, hiden }) => {
  const handleEdit = () => {}
  const handleDelete = () => {
    
  }
  const hidden = () => {
    sethiden(!hiden)
  }
  return (
    <div className='bg-slate-300 rounded-xl text-lg p-4  mb-5 mr-5 grid gap-2'>
      <div className='flex justify-between p-5 items-center'>
        <h2>Mis Notas</h2>
        <div className='flex items-center cursor-pointer' onClick={hidden}>
          <TiPencil />
          <p>Nueva nota</p>
        </div>
      </div>
      <div className='scrollbar-none text-base'>
        {notes.map((note, index) => (
          <div key={index} className='flex items-center justify-between'>
            <p className='text-white'>
              {note.desc} min {note.desc}
            </p>
            <div className='items-center flex gap-2'>
              <button onClick={handleEdit}>Editar</button>
              <button onClick={handleDelete}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <div className='grid text-center'>
        {notes.length === 0 && (
          <p className='text-black text-lg items-center'>No hay notas</p>
        )}
      </div>
    </div>
  )
}

export default ViewNotes
