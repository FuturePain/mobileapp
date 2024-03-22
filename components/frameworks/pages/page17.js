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
export const page17 = contentBody([
  "Daily Exercise (15 Minutes)",
  [
    {
      type: "subheading",
      content: "1. Reflecting on MBS",
    },
    {
      type: "body",
      content: `Think how*#MBS might cause your pain*and that*#there's nothing actually wrong*with your body.^^*#It's your brain causing you to feel this way!*`,
    },
    {
      type: "image",
      content: "17-1.png",
    },
    {
      type: "subheading",
      content: "2. Thinking about your list",
    },
    {
      type: "body",
      content: `Look back on your list from the activity and*#think*about everything you wrote down. What do we mean? Here's an exercise that will help you reflect on the anger from your past. Feel free to engage in it if needed.`,
    },
    {
      type: "subheading",
      content: "3. The exercise",
    },
    {
      type: "body",
      content: `*#Tell yourself: My body is normal, the pain is not caused by physical damage. I can make the pain stop by understanding its true cause, which will rewire my brain.*^^*#Relive the cases*you listed to*#feel the anger*; as if you were present at the event.`,
    },
    {
      type: "bullet",
      content:
        "❌ Do NOT go to fear or hurt yet.^🗣️ Say whatever comes to mind to express your anger.^✔️ Allow yourself to feel guilt and grief.",
    },
    {
      type: "body",
      content:
        "*#Give love to yourself and let go of the past. These events are past and can no longer hurt you.*",
    },
    {
      type: "image",
      content: "17-2.png",
    },
    {
      type: "body",
      content:
        "*#Note: As your pain goes away, you may start to feel more emotions. This is normal.  Most people without chronic pain feel emotions appropriately and do not channel their emotions into building neural circuits for pain. When you feel more emotions, however slight, instead of pain, you are becoming normal.*",
    },
  ],
]);
