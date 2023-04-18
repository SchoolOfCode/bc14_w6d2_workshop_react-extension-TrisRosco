// contains the data for the story that is then passed to the NarrativeBlock component
import React from "react";

let narrativeData = {
  1: {
    text: "You are in a dark room. There is a door to your left and right. Which one do you take?",
    options: [
      {
        text: "Left",
        nextNarrative: 2,
      },
      {
        text: "Right",
        nextNarrative: 3,
      },
    ],
  },
  2: {
    text: "You are in a cellar with a single candle. There is a door to your left and right. Which one do you take?",
    options: [
      {
        text: "Left Door",
        nextNarrative: 5,
      },
      { text: "Right Door", nextNarrative: 4 },
    ],
  },

  3: {
    text: "You are in a small chamber, it appears you have reached a dead end.",
    options: [
      {
        text: "Go back",
        nextNarrative: 1,
      },
    ],
  },

  4: {
    text: "You are in a small chamber, it appears you have reached a dead end.",
    options: [
      {
        text: "Go back",
        nextNarrative: 2,
      },
    ],
  },

  5: {
    text: "You are in dimly lit, damp room. A small goblin approaches you. He asks you for a coin. What do you do?",

    options: [
      {
        text: "Give him a coin",
        nextNarrative: 6,
      },
      {
        text: "Refuse",
        nextNarrative: 7,
      },
    ],
  },

  6: {
    text: "The goblin thanks you and leaves. You are left alone in the room. There is a door to your left and right. Which one do you take?",
    options: [
      {
        text: "Left",
        nextNarrative: 8,
      },
      {
        text: "Right",
        nextNarrative: 9,
      },
    ],
  },

  7: {
    text: "The goblin attacks you. You are dead.",
    options: [],
  },
};

export default narrativeData;
