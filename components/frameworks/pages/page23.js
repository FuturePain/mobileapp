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
export const page23 = contentBody([
  "Optional Exercise: Imagination Meditation",
  [
    {
      type: "subheading",
      content: "I. Before we begin...",
    },
    {
      type: "body",
      content: `Find a comfortable position. Feel free to pause or go back at any time during these exercises.`,
    },
    {
      type: "subheading",
      content: "II. Let's begin!",
    },
    {
      type: "body",
      content: "Imagination Meditation:",
    },
    {
      type: "bullet",
      content: `Focus on the part of your body where you experience the most pain.^Close your eyes and imagine that pain turns into 10 tiny little bubbles.^Feel these little bubbles traveling through each part of your body.^Along the way, they begin to pick up globs of stress and strain.^The little pain bubbles become larger as they flow through your arms, legs, chest, back, and head.^The only way to expel these bubbles is through each deep exhale. So, let's take 10 deep breaths. With each releasing breath feel a sense of tension and tightness leaving your body`,
    },
    {
      type: "image",
      content: "23-1.png",
    },
    {
      type: "body",
      content:
        "This concludes our meditation. If you need a break, you can take a moment before you proceed. Come back when you are ready.",
    },
  ],
]);
