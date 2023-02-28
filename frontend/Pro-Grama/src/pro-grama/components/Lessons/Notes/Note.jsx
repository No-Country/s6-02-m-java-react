import React from "react";

const Note = ({ note }) => {
  return (
    <>
      <div key={note.title} className="grid px-2 items-center m-3">
        <div className="flex justify-between items-center gap-2 ">
          <h5>{note.title}</h5>
        </div>
        <div className="flex items-center gap-2 ">
          <p>{note.title}</p>
        </div>
      </div>
      <hr className="h-px mx-2 bg-gray-200 border-0 dark:bg-gray-100 last:h-0" />
    </>
  );
};

export default Note;
