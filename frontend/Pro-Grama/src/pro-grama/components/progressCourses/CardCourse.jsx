const CardCourse = ({ name, img }) => {
  return (
    <div className='course flex items-center justify-center'>
      <div className='info-course bg-gray-100 border border-gray-400 py-4 px-8 rounded-md flex flex-col justify-start items-center'>
        <img src={img} className='h-12 w-12 rounded-full' alt='' />
        <h2 className="uppercase py-2 text-sm">{name}</h2>
      </div>
      <div className='line-course h-0.5 w-10 bg-gray-400 flex items-center justify-end'>
        <div className='ball h-2 w-2 bg-gray-400 rounded-full'></div>
      </div>
    </div>
  )
}

export default CardCourse
