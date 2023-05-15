import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/index.js";
import NarrativeBlock from "./components/NarrativeBlock/index.js";
import NarrativeImage from "./components/NarrativeImage/index.js";
import narrativeData from "./components/NarrativeData/index.js";
import footstep from "./assets/footstep.wav";
import door from "./assets/door.wav";
import bgm from "./assets/bgm.mp3";

function App() {
  const [currentNarrative, setCurrentNarrative] = useState(1);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentSound, setCurrentSound] = useState([]);
  const [currentImage, setCurrentImage] = useState(
    narrativeData[currentNarrative].image
  );

  function playBGM() {
    const audio = new Audio(bgm);
    audio.play();
  }

  function playSound() {
    const doorfx = new Audio(door);
    const footstepfx = new Audio(footstep);
    if (currentSound === "door") {
      doorfx.play();
    }
    if (currentSound === "footstep") {
      footstepfx.play();
    }
  }

  function changeNarrative(optionIndex) {
    const option = narrativeData[currentNarrative].options[optionIndex];
    setCurrentNarrative(option.nextNarrative);
  }

  useEffect(() => {
    playBGM();
  }, []);

  useEffect(() => {
    setCurrentSound(narrativeData[currentNarrative].sound);
    setCurrentImage(narrativeData[currentNarrative].image);
    setCurrentOptions([
      narrativeData[currentNarrative].options[0].text,
      narrativeData[currentNarrative].options[1].text,
    ]);
    playSound();
  }, [currentNarrative]);

  return (
    <div className="App">
      <NarrativeBlock text={narrativeData[currentNarrative].text} />
      <div className="button-container">
        <Button
          label={currentOptions[0]}
          onClick={() => {
            changeNarrative(0);
          }}
        />
        <Button
          label={currentOptions[1]}
          onClick={() => {
            changeNarrative(1);
          }}
        />
      </div>
      <div className="image-container">
        <NarrativeImage image={currentImage} sound={currentSound} />
      </div>
    </div>
  );
}

export default App;
