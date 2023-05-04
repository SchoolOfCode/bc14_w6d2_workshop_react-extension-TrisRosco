const narrativeData = {
  0: {
    text: "Welcome to Tristan's awful Choose Your Own Adventure game. Click the button below to begin.",
    sound: "./assets/welcome.wav",
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
    image: "",
    sound: "door",
    text: "You are stood before a darkened passageway. In front of you stands a plinth, atop which sits a small bell and a candle. What do you do?",
    options: [
      {
        text: "Take the bell",
        nextNarrative: 2,
      },
      {
        text: "Take the candle",
        nextNarrative: 3,
      },
    ],
  },
  2: {
    image: "https://i.imgur.com/7NBJKPO.png",
    sound: "door",
    text: "You gently take the bell from the plinth. As you do so, the candle turns to dust. You are left alone in the darkness. What do you do?",
    options: [
      {
        text: "Ring the bell",
        nextNarrative: 5,
      },
      { text: "Sit and wait", nextNarrative: 4 },
    ],
  },

  3: {
    image:
      "https://officialpsds.com/imageview/7y/2v/7y2v59_large.png?1521316559",
    sound: "footstep",
    text: "The candle is too hot to touch. You are burned to death",
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
    sound: "footstep",
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
    text: "You ring the bell. From the darkness you can hear a faint shuffling. A goblin appears before you. He asks for a coin. What do you do?",
    sound: "./assets/door.wav",
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
    image: "https://i.imgur.com/92FUUqQ.png",
    sound: "./assets/door.wav",
    text: "The goblin thanks you and hands you a small bug. He's a cute little fella isn't he? Look at that nose! What do you do with the funny critter?",
    options: [
      {
        text: "Eat him",
        nextNarrative: 8,
      },
      {
        text: "Crush him with your hands",
        nextNarrative: 9,
      },
    ],
  },

  7: {
    image:
      "https://officialpsds.com/imageview/7y/2v/7y2v59_large.png?1521316559",
    sound: "./assets/door.wav",
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
    sound: "footstep",
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
    sound: "footstep",
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
