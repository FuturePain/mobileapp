const quizBody = (items) => {
  const vals = [
    "quizTitle",
    "quizDescription",
    "quizQuestions",
    "quizChoices",
    "quizFeedbacks",
    "quizAnswers",
    "links",
  ];
  // quizChoices is an array of arrays
  // quizQuestions is an array of objects:
  //   {
  //     type: [multiple, shortform]
  //     content:
  //   }
  // quizAnswers is an array of arrays, each element is the index of correct answer

  const it = items;
  let result = {};
  for (let i = 0; i < items.length; i++) {
    result[vals[i]] = it[i];
  }
  return result;
};

export const quiz6 = quizBody([
  "Quiz Review: Mind Body Syndrome",
  "Let's check your understanding on the Mind Body Syndrome (MBS).",
  [
    {
      type: "multiple",
      content: "MBS argues that chronic pain is caused by...",
    },
    {
      type: "multiple",
      content: "What was the case study example we used to explain MBS?",
    },
  ],
  [
    [
      "Emotional trauma/suppression",
      "Physical injury",
      "Your doctors",
      "All of the above",
    ],
    ["Whiplash", "Necklash", "Back pain", "None of the above"],
  ],
  ["Close! Give it another shot.", "Close! Give it another shot."],
  [[0], [0]],
  [],
]);
