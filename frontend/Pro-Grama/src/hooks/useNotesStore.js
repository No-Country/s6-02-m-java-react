// import { useDispatch, useSelector } from 'react-redux'
// import {
//   onSetActiveNote,
//   onAddNewNote,
//   onUpdateNote,
//   onDeleteNote,
//   onOpenform,
//   onCloseform,
//   onOpenNote,
//   onCloseNote
// } from '../store/notes'
// export const useNotesStore = () => {
//   const dispatch = useDispatch()
//   const { notes, activeNote, formVisibleOnPage } = useSelector(
//     (state) => state.notes
//   )
//   const setActiveNote = async (note) => {
//     dispatch(onSetActiveNote(note))
//   }
//   const startSavingNote = async (note) => {
//     if (note.id) {
//       //actualizo
//       dispatch(onUpdateNote(note))
//     } else {
//       //agrego
//       dispatch(onAddNewNote({ ...note, id: new Date().getTime() }))
//     }
//   }
//   const startDeletingNote = () => {
//     dispatch(onDeleteNote())
//   }
//   const openForm = () => {
//     dispatch(onOpenform)
//   }
//   const closeForm = () => {
//     dispatch(onCloseform)
//   }
//   const openNote = () => {
//     dispatch(onOpenNote)
//   }
//   const closeNote = () => {
//     dispatch(onCloseNote())
//   }
//   return {
//     notes,
//     formVisibleOnPage,
//     activeNote,
//     startSavingNote,
//     startDeletingNote,
//     setActiveNote,
//     openForm,
//     closeForm,
//     openNote,
//     closeNote
//   }
// }
