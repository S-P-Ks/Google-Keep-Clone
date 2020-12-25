import React from "react";
import Dustbin from "./dustbin.png";

function Note({ title, content, id, Delete }) {
  return (
    <div className="note" id={id}>
      <h2>{title}</h2>
      <br />
      <h4>{content}</h4>
      <img
        src={Dustbin}
        className="delete"
        alt="Delete"
        onClick={() => Delete(id)}
      />
    </div>
  );
}

export default Note;
