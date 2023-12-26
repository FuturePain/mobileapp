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

export const quiz3 = quizBody([
  "Understanding the Connection between Pain and Mind",
  "Now that you understand the basics of pain, let's see how it applies to your chronic pain.\n\nIn this assignment, you'll watch this short video to learn about the connection between pain and mind. Once you finish watching it, please submit a sentence about one thing you learned or found interesting.\n\n",
  [
    {
      type: "video",
      content: require("../../../course-assets/videos/understandingconnection.mp4"),
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
