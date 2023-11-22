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

export const quiz0 = quizBody([
  "Baseline Measures",
  "Please complete the links below before beginning the intervention. Input the same password sent to you in the first FUTUREPAIN email.\n\nReturn to this app when done.",
  [
    {
      type: "multiple",
      content: "I confirm that I filled out all THREE (3) of the links above.",
    },
  ],
  [["I confirm", "I didn't fill out all links above."]],
  [
    "Please fill out all the links - this is a legal obligation before starting the study.",
  ],
  [[0]],
  [
    [
      "https://berkeley.qualtrics.com/jfe/form/SV_8vV80Cio0iAq8RM",
      "Press here to accept or decline",
    ],
    [
      "https://berkeley.qualtrics.com/jfe/form/SV_6y46ibdASV8546q",
      "Let's start! Take the FUTUREPAIN questionnaire first.",
    ],
    [
      "https://berkeley.qualtrics.com/jfe/form/SV_3sjT47XRkQkBHr8",
      "Now take the Baseline Survey - this is important information both for you and for us.",
    ],
  ],
]);
