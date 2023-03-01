import React, { useState } from 'react'
import { TiPencil } from 'react-icons/ti'
import { FiBookOpen } from 'react-icons/fi'
import ViewNotes from './ViewNotes'
import { Ide } from './Ide'

const Notes = () => {
  return (
    <>
      <Ide />
      <ViewNotes />
    </>
  )
}

export default Notes
