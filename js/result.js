function getLoveLanguageInfo(loveLang) {
    const info = {
      A: {
        name: "Words of Affirmation",
        encourage: "Use verbal compliments and kind words.",
        actions: "Leave notes, speak positively.",
        avoid: "Harsh words, criticism, ignoring their efforts."
      },
      B: {
        name: "Quality Time",
        encourage: "Give undivided attention.",
        actions: "Plan activities, go for walks.",
        avoid: "Distractions, being late, not listening."
      },
      C: {
        name: "Receiving Gifts",
        encourage: "Thoughtful tokens of love.",
        actions: "Surprise gifts, celebrations.",
        avoid: "Missed birthdays, thoughtless presents."
      },
      D: {
        name: "Acts of Service",
        encourage: "Do chores, help out.",
        actions: "Fix things, assist with stress.",
        avoid: "Broken promises, laziness."
      },
      E: {
        name: "Physical Touch",
        encourage: "Physical presence, hugs.",
        actions: "Hold hands, cuddles.",
        avoid: "Neglecting physical affection."
      }
    };
    return info[loveLang];
  }
  