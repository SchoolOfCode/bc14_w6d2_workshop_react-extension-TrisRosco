const narrativeData = {
  0: {
    text: "Welcome to Tristan's awful Choose Your Own Adventure game. Click the button below to begin.",
    options: [
      {
        text: "Start",
        nextNarrative: 1,
      },

      {
        text: "Start",
        nextNarrative: 1,
      },
    ],
  },

  1: {
    image: "https://i.imgur.com/wFYiIN9.png",
    text: "You are in a long corridor. A blinding light is eminating from one direction, and a dark void in the other. There is a door to your left and right. Which one do you take?",
    options: [
      {
        text: "Left",
        nextNarrative: 2,
        sound: "./assets/footstep.wav",
      },
      {
        text: "Right",
        nextNarrative: 3,
        sound: "./assets/door.wav",
      },
    ],
  },
  2: {
    image: "https://i.imgur.com/Nyc6E4o.png",
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
    image: "https://i.imgur.com/7DAmllf.png",
    text: "You are in a small chamber, it appears you have reached a dead end.",
    options: [
      {
        text: "Go back",
        nextNarrative: 1,
      },
      {
        text: "Go back",
        nextNarrative: 1,
      },
    ],
  },

  4: {
    image: "https://i.imgur.com/7DAmllf.png",
    text: "You are in a small chamber, it appears you have reached a dead end.",
    options: [
      {
        text: "Go back",
        nextNarrative: 2,
      },
      {
        text: "Go back",
        nextNarrative: 2,
      },
    ],
  },

  5: {
    image: "https://i.imgur.com/a50ZpXq.png",
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
    image:
      "https://officialpsds.com/imageview/7y/2v/7y2v59_large.png?1521316559",
    text: "The goblin attacks you. You are dead.",
    options: [
      {
        text: "Restart",
        nextNarrative: 1,
      },
      {
        text: "Restart",
        nextNarrative: 1,
      },
    ],
  },

  8: {
    image: "https://i.imgur.com/7DAmllf.png",
    text: "You are in a small chamber, it appears you have reached a dead end.",
    options: [
      {
        text: "Go back",
        nextNarrative: 5,
      },
      {
        text: "Go back",
        nextNarrative: 5,
      },
    ],
  },

  9: {
    image: "https://i.imgur.com/7DAmllf.png",
    text: "You are in a small chamber, it appears you have reached a dead end.",
    options: [
      {
        text: "Go back",
        nextNarrative: 5,
      },
      {
        text: "Go back",
        nextNarrative: 5,
      },
    ],
  },
};

export default narrativeData;
