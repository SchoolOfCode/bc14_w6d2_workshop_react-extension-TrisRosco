import React from "react";
import { motion } from "framer-motion";

function Button(props) {
  return (
    <motion.button
      className="Button"
      onClick={props.onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      {props.label}
    </motion.button>
  );
}

export default Button;
