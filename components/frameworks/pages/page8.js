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
export const page8 = contentBody([
  "Introduction to Exercises",
  [
    { type: "heading", content: "⚠️ Before we start" },
    {
      type: "body",
      content: `For your safety, you need to have a doctor's diagnosis for chronic pain. Remember, you should only be part of the study if you've been diagnosed with fibromyalgia, irritable bowel syndrome (IBS), tension/migraine headaches, low-back pain, or temporomandibular joint pain (TMJ).`,
    },
    {
      type: "image",
      content: "0-2.png",
    },
    {
      type: "subheading",
      content: "Keep in mind...",
    },
    {
      type: "body",
      content:
        "*#You must decide if the Mind Body Syndrome (MBS) applies to you.*This treatment will only help once decide you have MBS. It takes*#time*and*#dedication*to treat chronic pain. We will go through exercises to begin*#treating your stress to prevent pain.*^^It is strongly advised to*#only do the recommended amount of time*for these daily exercises to*#reap the most benefits.*",
    },
  ],
]);
