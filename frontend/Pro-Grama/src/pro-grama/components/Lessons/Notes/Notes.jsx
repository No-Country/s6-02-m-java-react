import React, { useEffect, useState } from 'react'
import { TiPencil } from 'react-icons/ti'
import { FiBookOpen } from 'react-icons/fi'
import ViewNotes from './ViewNotes'
import { Ide } from './Ide'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllNotes } from '../../../../store/notes/thunks'

const Notes = () => {
  return (
    <>
      <ViewNotes />
      <Ide />
    </>
  )
}

export default Notes
