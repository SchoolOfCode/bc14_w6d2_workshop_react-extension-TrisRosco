import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button/index.js";
import NarrativeBlock from "./components/NarrativeBlock/index.js";
import narrativeData from "./components/NarrativeData/index.js";

// function to change the narrative text when a button is clicked

function App() {
  const [narrative, setNarrative] = useState(1);

  const HandleNarrative = (event) => {
    setNarrative(event.target.value);
  };

  return (
    <div className="App">
      <NarrativeBlock text={narrativeData[1].text} />
      <Button
        label={narrativeData[1].options[0].text}
        onClick={HandleNarrative}
        value={narrativeData[1].options[0].nextNarrative}
      />
      <Button
        label={narrativeData[1].options[1].text}
        onClick={HandleNarrative}
        value={narrativeData[1].options[1].nextNarrative}
      />
    </div>
  );
}

export default App;
