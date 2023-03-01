import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { Filter } from ".";
import SearchedListCourses from "./SearchedListCourses";

function Search() {
    const [value, setValue] = useState('')
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return <div className="w-2/5 max-w-2/5 m-auto hidden lg:block sm:relative">
        <div className="flex">
            <input type="text"
                className="w-full relative p-2 rounded-lg border outline-white border-white bg-BlueMedium text-white"
                value={value}
                onChange={handleChange}
                placeholder='Buscar...'
            />
            <button
                className="input-icon text-white"
                onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <FiFilter />
            </button>
        </div>
        {isFilterOpen && <Filter setIsFilterOpen={setIsFilterOpen}/>}
        
        {(value && !isFilterOpen) && <SearchedListCourses courseName={value}/>}
    </div>
}

export default Search;
