import React, { useState } from 'react'


function useFilter(initialData) {
    const [checkedState, setCheckedState] = useState([]);


      const handleOnChange = ({ target }, name) => {
        if (target.checked) {
            setCheckedState([...checkedState, target.value])
        } else {
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