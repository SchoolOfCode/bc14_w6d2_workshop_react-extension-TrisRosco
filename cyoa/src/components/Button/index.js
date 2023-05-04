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
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{
        scale: 0.8,
        rotate: -2,
        boxShadow: "inset 7px 7px 1px rgba(0,0,0,0)",
      }}
    >
      {props.label}
    </motion.button>
  );
}

export default Button;
