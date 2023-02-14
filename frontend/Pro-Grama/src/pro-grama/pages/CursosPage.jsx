import React from 'react'
import { Descripcion, ListaVideos } from '../components/curso'

export const CursosPage = () => {
  return (
    <div className='flex justify-between'>
      <Descripcion />
      <ListaVideos />
    </div>
  )
}
