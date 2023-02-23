import React, { useEffect, useState } from 'react'

function useFilter(initialData, filterBy) {
    const [checkedState, setCheckedState] = useState([]);
    const [data, setData] = useState([]);
  
      useEffect(() => {
        const filteredDATA = () => {
          let arr = []
          checkedState.forEach((dif, index) => {
            if (filterBy !== 'hours') {
              arr = [...arr, ...initialData.filter(course => course[`${filterBy}`] === dif)]     
            } else {
              // console.log(checkedState)
              let hour = dif.split(',')
              arr = [...arr, ...initialData.filter(course => 
                course[`${filterBy}`] > hour[0] && course[`${filterBy}`] < hour[1])]
              // console.log(arr, hour)
            }
            return arr
          })
            console.log(arr)
          checkedState.length > 0?
          setData(arr)
          :  setData([])
          }
      
        filteredDATA()
        return () => filteredDATA()
      }, [checkedState])

      const handleOnChange = (e) => {
        if (e.target.checked) {
          setCheckedState([...checkedState, e.target.value]);
        } else {
            setCheckedState(
            checkedState.filter((filterTag) => filterTag !== e.target.value)
          );
        }
      };
    return {
        handleOnChange,
        data
    }
}

export default useFilter