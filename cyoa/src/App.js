import React from "react";
import { useState, useEffect, useReducer } from "react";
import "./App.css";
import Button from "./components/Button/index.js";
import NarrativeBlock from "./components/NarrativeBlock/index.js";
import NarrativeImage from "./components/NarrativeImage/index.js";
import narrativeData from "./components/NarrativeData/index.js";

function App() {
  const [currentNarrative, setCurrentNarrative] = useState(1);
  const [options, setOptions] = useState([]);
  const [sounds, setSounds] = useState([]);
  const [currentImage, setCurrentImage] = useState(
    narrativeData[currentNarrative].image
  );

  function changeNarrative(optionIndex) {
    const option = narrativeData[currentNarrative].options[optionIndex];
    setCurrentNarrative(option.nextNarrative);
  }

  useEffect(() => {
    setCurrentImage(narrativeData[currentNarrative].image);
    setOptions([
      narrativeData[currentNarrative].options[0].text,
      narrativeData[currentNarrative].options[1].text,
    ]);
    setSounds([
      narrativeData[currentNarrative].options[0].sound,
      narrativeData[currentNarrative].options[1].sound,
    ]);
  }, [currentNarrative]);

  return (
    <div className="App">
      <NarrativeBlock text={narrativeData[currentNarrative].text} />
      <div className="button-container">
        <Button
          label={options[0]}
          sound={sounds[0]}
          onClick={() => changeNarrative(0)}
        />
        <Button
          label={options[1]}
          sound={sounds[1]}
          onClick={() => changeNarrative(1)}
        />
      </div>
      <NarrativeImage image={currentImage} />
    </div>
  );
}

export default App;
