import { useState } from "react";
import SearchedListCourses from "./SearchedListCourses";

function Search() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-1/2 max-w-sm m-auto hidden sm:relative">
      <input
        type="text"
        className="w-full p-2 rounded-lg border outline-slate-500 border-slate-500"
        value={value}
        onChange={handleChange}
        placeholder="Buscar..."
      />
      {value && <SearchedListCourses courseName={value} />}
    </div>
  );
}

export default Search;
