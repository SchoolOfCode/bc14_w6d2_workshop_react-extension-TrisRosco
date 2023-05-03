import React from "react";
import { useState, useEffect, useReducer } from "react";
import "./App.css";
import Button from "./components/Button/index.js";
import NarrativeBlock from "./components/NarrativeBlock/index.js";
import NarrativeImage from "./components/NarrativeImage/index.js";
import narrativeData from "./components/NarrativeData/index.js";
import footstep from "./assets/footstep.wav";

function App() {
  const [currentNarrative, setCurrentNarrative] = useState(1);
  const [button1, setButton1] = useState(
    narrativeData[currentNarrative].options[0].text
  );
  const [button2, setButton2] = useState(
    narrativeData[currentNarrative].options[1].text
  );
  const [button1Sound, setButton1Sound] = useState(
    narrativeData[currentNarrative].options[0].sound
  );
  const [button2Sound, setButton2Sound] = useState(
    narrativeData[currentNarrative].options[1].sound
  );

  const [currentImage, setCurrentImage] = useState(
    narrativeData[currentNarrative].image
  );

  function changeNarrative(optionIndex) {
    const option = narrativeData[currentNarrative].options[optionIndex];
    setCurrentNarrative(option.nextNarrative);
    setButton1(narrativeData[option.nextNarrative].options[0].text);
    setButton2(narrativeData[option.nextNarrative].options[1].text);
    setCurrentImage(narrativeData[option.nextNarrative].image);
    setButton1Sound(narrativeData[option.nextNarrative].options[0].sound);
    setButton2Sound(narrativeData[option.nextNarrative].options[1].sound);
  }

  useEffect(() => {
    const audio = new Audio();
    audio.play();
  }, [button1Sound]);

  return (
    <div className="App">
      <NarrativeBlock text={narrativeData[currentNarrative].text} />
      <div className="button-container">
        <Button
          label={button1}
          sound={button1Sound}
          onClick={() => changeNarrative(0)}
        />
        <Button
          label={button2}
          sound={button2Sound}
          onClick={() => changeNarrative(1)}
        />
        <button
          onClick={() => {
            const audio = new Audio(footstep);
            audio.play();
          }}
        >
          touch me
        </button>
      </div>
      <NarrativeImage image={currentImage} />
    </div>
  );
}

export default App;
