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
export const page7 = contentBody([
  "Changing Pain",
  [
    { type: "heading", content: "I. Change how you deal with stress" },
    {
      type: "body",
      content: `Your neurobiology can be changed*#without medicine or exercise.*You can do it by*#changing how you deal with and process stress.*In the FUTUREPAIN intervention, we will try our best to help you break down stress and provide research-backed strategies you can use to decrease your pain.`,
    },
    {
      type: "heading",
      content: "II. Key ideas",
    },
    {
      type: "body",
      content: "Remember:",
    },
    {
      type: "bullet",
      content:
        "1. Your chronic pain is from*#emotional causes that reinforce neural pain circuits*(even if your original pain was from physical injury).^2.*#Stress*makes your brain cause*#real physical pain through neural pain circuits.*^3. You can*#rewire your brain*to stop your chronic pain.",
    },
    {
      type: "body",
      content: "Now, let's conquer your chronic pain!",
    },
    {
      type: "image",
      content: "7-1.png",
    },
  ],
]);
