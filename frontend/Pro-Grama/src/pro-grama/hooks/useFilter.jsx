import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

function useFilter(initialData) {
    const { courses } = useSelector(
    (state) => state.course
    )
    const [checkedState, setCheckedState] = useState([]);
    const [data, setData] = useState([]);
  
      // useEffect(() => {

      //   const filteredDATA = () => {
      //     let arr = []
         
      //     checkedState.forEach((dif, index) => {
      //       if (filterBy !== 'hours') {
      //         arr = [...arr, ...data.filter(course => course[`${filterBy}`] === dif)]    
      //       } else {
      //         let hour = dif.split(','),
      //         start = Number(hour[0]),
      //          end = Number(hour[1])

              
      //         arr = [...arr, ...data.filter(course => 
      //           {
      //             // console.log(course[`${filterBy}`] > start && course[`${filterBy}`] < end, start, end, course[`${filterBy}`])
      //             return (course[`${filterBy}`] > start && course[`${filterBy}`] < end) 
      //           }           
      //     )]
          
      //       }
      //       return arr
      //     })
      //     checkedState.length> 0? setData(arr) : null
    
      //     arr = []
      //     }
        
      //   filteredDATA()
      //   return () => filteredDATA()
      // }, [checkedState])

      // useEffect(() =>{
      //   if(!data.length) {setData(courses)}
      // }, [data])


      const isInData = (id) => (
        data.find(course => course.id === id)
      )

      const handleOnChange = ({ target }, name) => {
        if (target.checked) {
            // const arr = [...data, ...courses.filter(course => (course[name] === target.value && !isInData(course.id)))]
            // setData(arr)
            setCheckedState([...checkedState, target.value])
        } else {
          // const arr = data?.filter(course => course[name] !== target.value)
          // setData(arr)
          setCheckedState(
            checkedState.filter(course => course !== target.value)
            )
        }
      }
    const returnData =  checkedState.length? checkedState: initialData
    return {
      handleOnChange,
      data: returnData
    }
}

export default useFilter