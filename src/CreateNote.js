import React, { useEffect, useState } from "react";

function CreateNote({ addItems }) {
  const [note, setnote] = useState({
    title: "",
    content: "",
  });

  const InputElement = (e) => {
    const { name, value } = e.target;

    setnote((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };

  console.log(note);

  return (
    <div className="createnote">
      <form action="" on>
        <input
          type="text"
          value={note.title}
          name="title"
          onChange={InputElement}
          placeholder="Title"
          autoComplete="off"
        />
        <br />
        <textarea
          rows=""
          columns=""
          name="content"
          onChange={InputElement}
          value={note.content}
          placeholder="Enter the Note"
        ></textarea>
        <button type="button" onClick={() => addItems(note)}>
          click
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
