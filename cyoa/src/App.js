import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/index.js";
import NarrativeBlock from "./components/NarrativeBlock/index.js";
import NarrativeImage from "./components/NarrativeImage/index.js";
import narrativeData from "./components/NarrativeData/index.js";
import footstep from "./assets/footstep.wav";
import bgm from "./assets/bgm.mp3";

function App() {
  //let currentImage2 = narrativeData[0].image;
  const [currentNarrative, setCurrentNarrative] = useState(1);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentSounds, setCurrentSounds] = useState([]);
  const [currentImage, setCurrentImage] = useState(
    narrativeData[currentNarrative].image
  );

  function playSound() {
    const audio = new Audio(footstep);
    audio.play();
  }

  function playBGM() {
    const audio = new Audio(bgm);
    audio.play();
  }

  function changeNarrative(optionIndex) {
    const option = narrativeData[currentNarrative].options[optionIndex];
    setCurrentNarrative(option.nextNarrative);
  }

  useEffect(() => {
    playBGM();
  }, []);

  useEffect(() => {
    setCurrentImage(narrativeData[currentNarrative].image);
    //currentImage2 = narrativeData[currentNarrative].image;
    setCurrentOptions([
      narrativeData[currentNarrative].options[0].text,
      narrativeData[currentNarrative].options[1].text,
    ]);
    setCurrentSounds([
      narrativeData[currentNarrative].options[0].sound,
      narrativeData[currentNarrative].options[1].sound,
    ]);
    playSound();
  }, [currentNarrative]);

  return (
    <div className="App">
      <NarrativeBlock text={narrativeData[currentNarrative].text} />
      <div className="button-container">
        <Button
          label={currentOptions[0]}
          sound={currentSounds[0]}
          onClick={() => changeNarrative(0)}
        />
        <Button
          label={currentOptions[1]}
          sound={currentSounds[1]}
          onClick={() => changeNarrative(1)}
        />
      </div>
      <div className="image-container">
        <NarrativeImage image={currentImage} />
      </div>
    </div>
  );
}

export default App;
