import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/index.js";
import NarrativeBlock from "./components/NarrativeBlock/index.js";
import narrativeData from "./components/NarrativeData/index.js";
import dungeonbackground from "./dungeonbackground.jpg";

// function to change the narrative text when a button is clicked

function App() {
  const [currentNarrative, setCurrentNarrative] = useState(1);
  const [button1, setButton1] = useState(
    narrativeData[currentNarrative].options[0].text
  );
  const [button2, setButton2] = useState(
    narrativeData[currentNarrative].options[1].text
  );

  function changeNarrative(optionIndex) {
    const option = narrativeData[currentNarrative].options[optionIndex];
    setCurrentNarrative(option.nextNarrative);
    setButton1(narrativeData[option.nextNarrative].options[0].text);
    setButton2(narrativeData[option.nextNarrative].options[1].text);
  }
  return (
    <div className="App">
      <NarrativeBlock text={narrativeData[currentNarrative].text} />
      <Button label={button1} onClick={() => changeNarrative(0)} />
      <Button label={button2} onClick={() => changeNarrative(1)} />
    </div>
  );
}

export default App;
