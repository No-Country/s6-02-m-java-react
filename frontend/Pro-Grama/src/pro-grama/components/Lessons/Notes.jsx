import React, { useMemo, useRef, useState } from 'react'
import { TiPencil } from 'react-icons/ti'
import { FiBookOpen } from 'react-icons/fi'
import JoditEditor from 'jodit-react'
const Notes = () => {
  const [value, setValue] = useState('initialState')
  const editor = useRef(null)
  const contentChange = (content) => {
    onChange(content)
  }
  const config2 = {
    readonly: false,
    autofocus: true,
    tabIndex: 1,
    height: "200",
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    defaultActionOnPaste: 'insert_clear_html',

    placeholder: 'Escribe tus notas aqui...',
    beautyHTML: true,
    toolbarButtonSize: 'large',
    buttons: [
      '|',
      'bold',
      'italic',
      '|',
      'font',
      'fontsize',
      '|',
      'left',
      'center',
      'right',
      'justify'
    ]
  }
  const arrayNote = [
    {
      id: 1,
      title: 'declarar variable',
      desc: 'la variable esta declarada de manera de que permita',
      time: '12:01'
    },
    {
      id: 2,
      title: 'declarar variable',
      desc: 'la variable esta declarada de manera de que permita',
      time: '12:01'
    },
    {
      id: 3,
      title: 'declarar variable',
      desc: 'la variable esta declarada de manera de que permita',
      time: '12:01'
    },
    {
      id: 4,
      title: 'declarar variable',
      desc: 'la variable esta declarada de manera de que permita',
      time: '12:01'
    }
  ]
  return (
    <div>
      <div className=' bg-slate-500 rounded-xl text-lg p-1 h-80 mb-5'>
        <h2 className=' text-white '>Nueva nota</h2>

        <div>
          <div className='flex items-center text-white '>
            <p>1.1 Intorducción</p>
            <FiBookOpen />
          </div>
          <JoditEditor
            ref={editor}
            value={''}
            config={config2}
            tabIndex={1} // tabIndex of textarea
            onChange={contentChange}
          />
        </div>
      </div>
      <div className='bg-slate-500 rounded-xl text-lg p-1 text-white list-video'>
        <div className='flex justify-between p-5 items-center'>
          <h2>Mis Notas</h2>
          <div className='flex items-center'>
            <TiPencil />
            <p>Nueva nota</p>
          </div>
        </div>
        <div className='overflow-y-auto list-video_scroll scrollbar-none text-base'>
          {arrayNote.map((note) => (
            <>
              <div key={note.id} className='grid px-2 items-center m-3'>
                <div className='flex justify-between items-center gap-2 '>
                  <h5>{note.title}</h5>
                  <p>{note.time} min</p>
                </div>
                <div className='flex items-center gap-2 '>
                  <p>{note.desc}</p>
                </div>
              </div>
              <hr class='h-px mx-2 bg-gray-200 border-0 dark:bg-gray-100 last:h-0' />
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notes
