// Block that contains the current narrative text

import React from "react";

function NarrativeBlock(props) {
  return (
    <div className="NarrativeBlock">
      <p>{props.text}</p>
      <img src={props.image} alt="currentimage" />
    </div>
  );
}

export default NarrativeBlock;
