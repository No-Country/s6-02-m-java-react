// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addNote, removeNote, updateNote } from './notesSlice'

// const NoteForm = () => {
//   const dispatch = useDispatch()
//   const notes = useSelector((state) => state.notes)
//   const [note, setNote] = useState({ id: '', title: '', content: '' })

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setNote({ ...note, [name]: value })
//   }

//   const handleAddNote = (e) => {
//     e.preventDefault()
//     dispatch(addNote(note))
//     setNote({ id: '', title: '', content: '' })
//   }

//   const handleRemoveNote = (id) => {
//     dispatch(removeNote(id))
//   }

//   const handleUpdateNote = (e) => {
//     e.preventDefault()
//     dispatch(updateNote(note))
//     setNote({ id: '', title: '', content: '' })
//   }

//   const handleEditNote = (id) => {
//     const selectedNote = notes.find((note) => note.id === id)
//     setNote(selectedNote)
//   }

//   return (
//     <div>
//       <form onSubmit={note.id ? handleUpdateNote : handleAddNote}>
//         <label>
//           Title:
//           <input
//             type='text'
//             name='title'
//             value={note.title}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Content:
//           <textarea
//             name='content'
//             value={note.content}
//             onChange={handleInputChange}></textarea>
//         </label>
//         <button type='submit'>{note.id ? 'Update' : 'Add'}</button>
//       </form>
//       <ul>
//         {notes.map((note) => (
//           <li key={note.id}>
//             <h3>{note.title}</h3>
//             <p>{note.content}</p>
//             <button onClick={() => handleRemoveNote(note.id)}>Remove</button>
//             <button onClick={() => handleEditNote(note.id)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default NoteForm
