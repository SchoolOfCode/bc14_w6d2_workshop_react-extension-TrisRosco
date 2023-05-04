import React, { useState } from "react";
import { motion } from "framer-motion";

function NarrativeImage(props) {
  const [showImage, setShowImage] = useState(false);

  function playSound() {
    const audio = new Audio(props.sound);
    audio.play();
  }

  const handleImageLoad = () => {
    setShowImage(true);
    playSound();
  };

  return (
    <div id="NarrativeImage">
      <motion.img
        key={props.image}
        src={props.image}
        sound={props.sound}
        alt="currentimage"
        style={{ filter: showImage ? "blur(0px)" : "blur(10px)" }}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        onLoad={handleImageLoad}
        onError={(event) => (event.target.style.display = "none")}
      />
    </div>
  );
}

export default NarrativeImage;
