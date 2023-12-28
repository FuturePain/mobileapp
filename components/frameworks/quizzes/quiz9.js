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

export const quiz9 = quizBody([
  "Check Your Understanding",
  "Let's check your understanding!",
  [
    {
      type: "multiple",
      content: "Why will the list help you uncover suppressed anger?",
    },
  ],
  [
    [
      "It brings suppressed anger to light.",
      "It helps you foucs on the true cause of your pain.",
      "All of the above",
    ],
  ],
  [[2]],
  [],
]);
