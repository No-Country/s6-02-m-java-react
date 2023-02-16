import React from 'react'
import ReactPlayer from 'react-player'
import { Button } from 'flowbite-react'
import { GrPlay } from 'react-icons/gr'
import { AiOutlineClockCircle } from 'react-icons/ai'

/*importacion datos desde JSON*/
import data from '../../../helpers/infoCourseData.json'
import Notes from './notes'

const LessonsCourses = () => {
  return (
    <div className='flex px-32 max-md:px-8 justify-between gap-8 max-lg:flex-wrap'>
      <div className='flex-col w-8/12 max-lg:w-full'>
        <div className='flex justify-between items-center py-4'>
          <div>
            <h2 className='text-3xl py-1'>{`Curso de ${data.title}`}</h2>
            <p className='py-1'>{`Clase ${data.lessonsClasses[9].id}. ${data.lessonsClasses[9].name}`}</p>
            <p className='flex items-center gap-2 py-1'>
              <AiOutlineClockCircle />
              {`${data.lessonsClasses[9].time} minutos`}
            </p>
          </div>
          <div>
            <Button
              className='h-8 text-black hover:bg-slate-300  max-md:w-full max-md:mt-4'
              style={{ backgroundColor: 'grey' }}>
              <GrPlay className='mr-2' />
              Comenzar curso
            </Button>
          </div>
        </div>

        <div className='player-wrapper rounded-xl'>
          <ReactPlayer
            url={data.lessonsClasses[9].video}
            className='react-player rounded-xl'
            controls
            volume='0.5'
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
      <div className='max-lg:w-full w-4/12'>
        <Notes />
      </div>
    </div>
  )
}

export default LessonsCourses
