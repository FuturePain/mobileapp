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

export const quiz2 = quizBody([
  "Quiz: What is Pain?",
  "This is just for your understanding. It is important to understand the many causes of your pain and why these treatments can work against your pain.",
  [
    {
      type: "multiple",
      content: "True or false: pain only occurs due to physical injuries.",
    },
    {
      type: "multiple",
      content: "True or false: pain can occur due to stress.",
    },
  ],
  [
    ["True", "False"],
    ["True", "False"],
  ],
  [
    "Remember, pain is partly an emotional experience as well!",
    "Pain can occur because of stress related emotions.",
  ],
  [[1], [0]],
  [],
]);
