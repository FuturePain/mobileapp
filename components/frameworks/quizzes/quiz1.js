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

export const quiz1 = quizBody([
  "A Quick Intro to Pain",
  "To defeat your pain, you need to first understand what you're dealing with. These modules might change your understanding of pain, so try to keep an open mind.\n\nIn this assignment, you'll watch this short video to learn what pain is.\n\n",
  [
    {
      type: "video",
      content: require("../../../course-assets/videos/aquickintrotopain.mp4"),
    },
    {
      type: "shortform",
      content:
        "Please submit a sentence about one thing you learned or found interesting.",
    },
  ],
  [[], []],
  ["", ""],
  [[], []],
  [],
]);
