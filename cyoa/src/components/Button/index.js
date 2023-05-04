import React from "react";
import { motion } from "framer-motion";

function Button(props) {
  function playSound() {
    const audio = new Audio(props.sound);
    audio.play();
  }

  return (
    <motion.button
      className="Button"
      onClick={() => {
        props.onClick();
        playSound();
      }}
      whileHover={{ scale: 1.2, rotate: 1 }}
      whileTap={{
        scale: 0.8,
        rotate: -2,
        borderRadius: "30px",
      }}
    >
      {props.label}
    </motion.button>
  );
}

export default Button;
