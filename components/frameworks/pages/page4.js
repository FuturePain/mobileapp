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
export const page4 = contentBody([
  "The Stress and Pain Connection",
  [
    { type: "heading", content: "1. How does stress cause pain?" },
    {
      type: "body",
      content: `You might be wondering what the connection between stress and pain is. Well, the answer is simple!^Mental stress and physical injuries actually activate similar regions in the brain. As people live their lives, stressful experiences can*#cause their brain to change in a way that results in physical chronic pain.*`,
    },
    {
      type: "image",
      content: "4-1.png",
    },
    {
      type: "body",
      content:
        "The diagram above shows the neurobiological circulatory involved in the development of chronic pain and chronic stress.",
    },
    {
      type: "heading",
      content: "2. Our brain's response",
    },
    {
      type: "body",
      content:
        "Physical injuries can cause the brain to adapt in a negative way, but so can stressful events. We will not go into the details of how this happens, but it is important for you to remember that *#both mental stress and physical injuries can result in chronic pain.*^This includes changes in the brain's learning systems too! To see how important stress is in causing chronic pain, let's look at what happens when stress is reduced!",
    },
    {
      type: "image",
      content: "4-2.png",
    },
  ],
]);
