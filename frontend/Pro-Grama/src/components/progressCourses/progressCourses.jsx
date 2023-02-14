import ImgDemo from '../../assets/vue.png'

const ProgressCourses = () => {
  return (
    <div className='bg-gray-800 flex flex-row items-center justify-between my-3'>
      <div className='my-courses flex p-4'>
        <div className='course flex items-center justify-center'>
          <div className='info-course bg-blue-500 py-4 px-8 rounded-md flex flex-col justify-start'>
            <img src={ImgDemo} className='h-12 w-12 rounded-full p-2' alt='' />
            <h2>Esto</h2>
          </div>
          <div className='line-course h-0.5 w-10 bg-red-500 flex items-center justify-end'>
            <div className='ball h-3 w-3 bg-red-500 rounded-full'></div>
          </div>
        </div>
        <div className='course flex items-center justify-center'>
          <div className='info-course bg-blue-500 py-4 px-8 rounded-md flex flex-col justify-start'>
            <img src={ImgDemo} className='h-12 w-12 rounded-full p-2' alt='' />
            <h2>Esto</h2>
          </div>
          <div className='line-course h-0.5 w-10 bg-red-500 flex items-center justify-end'>
            <div className='ball h-3 w-3 bg-red-500 rounded-full'></div>
          </div>
        </div>
        <div className='course flex items-center justify-center'>
          <div className='info-course bg-blue-500 py-4 px-8 rounded-md flex flex-col justify-start'>
            <img src={ImgDemo} className='h-12 w-12 rounded-full p-2' alt='' />
            <h2>Esto</h2>
          </div>
          <div className='line-course h-0.5 w-10 bg-red-500 flex items-center justify-end'>
            <div className='ball h-3 w-3 bg-red-500 rounded-full'></div>
          </div>
        </div>
        <div className='course flex items-center justify-center'>
          <div className='info-course bg-blue-500 py-4 px-8 rounded-md flex flex-col justify-start'>
            <img src={ImgDemo} className='h-12 w-12 rounded-full p-2' alt='' />
            <h2>Esto</h2>
          </div>
        </div>
        <div className='course flex items-center justify-center mx-6'>
          <div
            className='info-course bg-blue-500 p-8 px-10 rounded-md flex flex-col justify-start hover:bg-blue-400 transition-all hover:cursor-pointer'
            onClick={() => {
              alert('Queres agregar un curso mas a tu ruta?')
            }}
          >
            <p className='text-4xl text-white'>+</p>
          </div>
        </div>
      </div>
      <div className='arrow p-6 mx-4 bg-red-500'>
        <p className='text-white text-3xl'>D</p>
      </div>
    </div>
  )
}

export default ProgressCourses
