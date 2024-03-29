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

export const quiz10 = quizBody([
  "Quiz Review: Mindfulness",
  "You're almost done! Take this quiz to review your knowledge on mindfulness.",
  [
    {
      type: "multiple",
      content: "Mindfulness activities can be done when?",
    },
    {
      type: "multiple",
      content: "What three exercises did we do today? Check all that apply.",
    },
    {
      type: "multiple",
      content:
        "I hereby verify that I completed each of the activities listed in the previous module to the best of my abilities. I took the time to thoroughly do each exercise in as much depth as possible. I understand that a failure to do so will result in inaccurate results regarding my progress in this program.",
    },
  ],
  [
    ["As part of any daily activity", "Never", "Once per month"],
    [
      "Body scan meditation",
      "Breathing meditation",
      "Reflection on a daily routine",
      "None of these",
    ],
    ["Yes", "No"],
  ],
  ["Mindfulness can be done in a variety of settings and environments!", "We did all these exercises today!", "Please indicate 'yes.'"]
  [[0], [0, 1, 2], [0]],
  [],
]);
