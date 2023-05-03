import React from "react";

function NarrativeImage(props) {
  return (
    <div id="NarrativeImage">
      <img src={props.image} alt="currentimage" />
    </div>
  );
}

export default NarrativeImage;
