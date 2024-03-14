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
export const page10 = contentBody([
  "I. Traits",
  [
    {
      type: "body",
      content:
        "*#Preparation:*^^Get comfortable in a place where you feel safe. Now, open your journal or online document to start writing. Make sure it's something that only you can access--your writing is for your eyes only!",
    },
    { type: "heading", content: "I. Traits" },
    {
      type: "body",
      content: `Certain*#qualities*make you*#more likely*to have suppressed rage.^^For example, you might:`,
    },
    {
      type: "bullet",
      content:
        "be a perfectionist^anger quickly^have high expectations of yourself^are sensitive to criticism^feel guilt/fear/worry easily",
    },
    {
      type: "body",
      content:
        "*#Please take a moment to reflect, then write down any traits that you have that fits into this category.*Try to come up with around 5-20 traits, but feel free to add more.^^Don't limit yourself--you should write down anything and everything, even if you're not 100% sure it fits into this category. You can include personality traits that you developed as a child, learned over time, or currently have.^^Remember: please be honest with yourself. Only you will see what you write down.^^^^*#Note:*At this point, do not share the things you write down with others. This is personal treatment for your eyes only, so please don't hold yourself back from writing down anything. The point to bring these things to conscious awareness. This is not a relationship exercise, but a personal exercise.",
    },
    {
      type: "body",
      content:
        "Remember, we want to bring out the emotions that are linked to your physical pain. These emotions can be painful, sad, and angry. Creating a list will help bring to mind cases where you could have been angry -*#bringing your suppressed feelings to life.*^^*#The goal is rewire your brain to feel emotions rather than to feel pain. Feeling emotions may be mild, moderate, or intense. It does not matter what the intensity is, only that emotions and their causes are being acknowledged. When we feel chronic pain, we want to look for the emotions behind the pain. We want to deal with the emotions and their reasons. We do not want to focus on the physical acts that we now associate with pain. This will weaken the neural circuits linking physical acts and pain.*^^We recommend having a*#safe space*for you to express your thoughts so no one can access it.",
    },
    {
      type: "image",
      content: "10-1.png",
    },
  ],
]);
