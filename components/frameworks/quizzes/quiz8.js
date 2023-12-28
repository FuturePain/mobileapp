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

export const quiz8 = quizBody([
  "Exercise Check",
  "Please take this quick exercise check!",
  [
    {
      type: "multiple",
      content:
        "I hereby verify that I completed each of the activities listed in the previous module to the best of my abilities. I took the time to thoroughly do each exercise in as much depth as possible. I understand that a failure to do so will result in inaccurate results regarding my progress in this program.",
    },
    {
      type: "multiple",
      content:
        "Please take a moment to reflect on the activities and share your thoughts on the module. You do not have to share any personal details written about; this is just a general checkpoint to get you thinking about the exercises.",
    },
  ],
  [
    ["Yes", "No"],
    ["Yes", "No"],
  ],
  ["Please indicate 'yes.'", "Please indicate 'yes.'"],
  [[0], [0]],
  [],
]);
