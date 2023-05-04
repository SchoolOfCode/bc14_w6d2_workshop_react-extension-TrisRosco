import React, { useState } from "react";
import { motion } from "framer-motion";

function NarrativeImage(props) {
  const [showImage, setShowImage] = useState(false);

  const handleImageLoad = () => {
    setShowImage(true);
  };

  return (
    <div id="NarrativeImage">
      <motion.img
        key={props.image}
        src={props.image}
        alt="currentimage"
        style={{ filter: showImage ? "blur(0px)" : "blur(10px)" }}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7 }}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

export default NarrativeImage;
