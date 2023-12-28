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
export const page18 = contentBody([
  "Optional Activites",
  [
    {
      type: "body",
      content:
        "Can't get enough of the exercises? Here are two optional ones you may do:",
    },
    {
      type: "subheading",
      content: "I. The Daily Reflection",
    },
    {
      type: "body",
      content: `Think about the following questions and answer them:`,
    },
    {
      type: "bullet",
      content:
        "How are you feeling today?^What are some of your stressors?^What are some things that irritated you today?",
    },
    {
      type: "bulletalert",
      content: "Checkmark items you can change or influence.*#Act on it!*",
    },
    {
      type: "image",
      content: "18-1.png",
    },
    {
      type: "subheading",
      content: "II. Affirmations",
    },
    {
      type: "body",
      content: `Affirmations help you overcome negative thoughts which make you doubt yourself. These affirmations can help decrease negativity and help see yourself more positively.`,
    },
    {
      type: "bullet",
      content:
        "What in your life has been positive this week?^What are you doing right lately?^*#Congratulate yourself!*",
    },
    {
      type: "body",
      content: `List some things you should praise yourself for but rarely do.`,
    },
    {
      type: "image",
      content: "18-2.png",
    },
  ],
]);
