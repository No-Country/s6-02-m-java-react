import React, { useState } from "react";
import { TiPencil } from "react-icons/ti";
import { FiBookOpen } from "react-icons/fi";
import Form from "./Form";
import ViewNotes from "./ViewNotes";
import { Ide } from "./Ide";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [hiden, setHiden] = useState(true);
  return (
    <>
      <Ide />
      <ViewNotes notes={notes} sethiden={setHiden} hiden={hiden} />
      <Form
        setNotes={setNotes}
        notes={notes}
        hiden={hiden}
        sethiden={setHiden}
      />
    </>
  );
};

export default Notes;
