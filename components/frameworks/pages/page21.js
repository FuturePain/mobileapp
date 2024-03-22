const contentBody = (items) => {
  const vals = ["pageTitle", "listOfBody"];
  // will iterate through body with different types: heading, subheading, body, image, bullet, bulletalert
  // to bold, put *# in front of and * at the end of the desired phrase
  // to condense repeated element types, put ^ in front of next bullet point
  const it = items;
  let result = {};
  for (let i = 0; i < items.length; i++) {
    result[vals[i]] = it[i];
  }
  return result;
};
export const page21 = contentBody([
  "Breathing Awareness Exercise",
  [
    {
      type: "subheading",
      content: "1. Before we begin...",
    },
    {
      type: "body",
      content: `Find a comfortable position. Feel free to pause or go back at any time during these exercises.`,
    },
    {
      type: "subheading",
      content: "2. Let's begin!",
    },
    {
      type: "body",
      content: "*#Optional: Close your eyes.*",
    },
    {
      type: "bullet",
      content: `Take a few big, deep breaths and clear your mind. Try to only focus on yourself in the moment.^Breathe in and imagine the air filling with a sense of peace and calm. Try to feel it filling the spaces in your body.^Breathe out and imagine that the air that leaves your body is taking away your stress and tension.^As you breathe in, say in your mind, "I breathe in peace and calm."^As you breathe out, say in your mind, "I breathe out stress and tension."^Continue this for 5 minutes.^When you're ready, you can open your eyes or come present with the space again.`,
    },
    {
      type: "image",
      content: "21-1.png",
    },
    {
      type: "body",
      content:
        "This concludes our breathing awareness meditation. If you need a break, you can take a moment before you proceed. Come back when you are ready. Continue on to the next exercise when you are ready.",
    },
  ],
]);
