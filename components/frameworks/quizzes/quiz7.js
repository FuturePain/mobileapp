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

export const quiz7 = quizBody([
  "Pop Quiz: Review",
  "Before we start doing exercises to help your pain in this module, let's do a quick review on what we've learned so far.",
  [
    {
      type: "multiple",
      content:
        "True of False: Your chronic pain can be a result of emotional suppression.",
    },
  ],
  [["True", "False"]],
  [
    "Close! Actually, emotional suppression can result in the feeling of chronic pain.",
  ],
  [[0]],
  [],
]);
