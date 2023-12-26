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

export const quiz4 = quizBody([
  "Predictive Coding: Why the Mind Creates Chronic Pain",
  "I. Nice work!\n\nGreat job making it this far through the module. Hopefully, you found the content about the Mind Body Syndrome interesting and learned something new!\n\nNow that you understand a bit about the Mind Body Syndrome, let's explore how and why the mind creates pain to keep you safe. This is called predictive coding.\n\nII. Please watch this short video explaining predictive coding.\n\nOnce you finish watching it, please submit a sentence summarizing one thing you learned or found interesting.\n\n",
  [
    {
      type: "video",
      content: require("../../../course-assets/videos/predcodingwhy.mp4"),
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
