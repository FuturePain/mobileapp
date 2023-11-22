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
export const page2 = contentBody([
  "What is Pain?",
  [
    { type: "heading", content: "I. Defining pain" },
    {
      type: "body",
      content: `According to the International Association for the Study of Pain, pain is*#"an unpleasant sensory and emotional experience associated with actual or potential damage, or described in terms of such damage".*If we break this down, this means that pain is partly an*#emotional experience*and doesn't have to result from physical problems.`,
    },
    {
      type: "image",
      content: "2-1.png",
    },
    {
      type: "heading",
      content: "II. Types of pain",
    },
    {
      type: "body",
      content:
        "Here are several types of pain. Your pain might fit into one or more of these categories.",
    },
    {
      type: "bullet",
      content:
        "*#Severe pain*is pain due to severe damage to your body, like breaking a bone.",
    },
    {
      type: "image",
      content: "2-2.png",
    },
    {
      type: "bullet",
      content:
        "*#Mild pain*can be felt if you have mild damage to your body like from a paper cut.",
    },
    {
      type: "image",
      content: "2-3.png",
    },
    {
      type: "bullet",
      content:
        "*#Pain from stress*is pain felt even though there is no damage to your body at all. For example, if you have a lot of work stress and your neck starts to hurt. ",
    },
    {
      type: "image",
      content: "2-4.png",
    },
    {
      type: "bullet",
      content:
        "*#Pain from emotions*is pain you feel due to an emotional event like someone close to you passing away and your body hurts.",
    },
    {
      type: "image",
      content: "2-5.png",
    },
    {
      type: "body",
      content:
        "Remember, pain is*#partly an emotional experience*, so it does not have to result from physical damage! These experiences result in real changes that occur in your brain.^Let's check your understanding on pain!",
    },
  ],
]);
