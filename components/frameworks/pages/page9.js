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
export const page9 = contentBody([
  "Getting Started with a List",
  [
    { type: "heading", content: "Creating a list: what will I be doing?" },
    {
      type: "body",
      content: `Get a journal, create an online document, or find something that you can write in privately without anyone else reading it.^^Your task will be to create a list of events that may have made you*#ANGRY*in your life.^^Don't start writing yet! In the next few pages, we'll guide you through writing about different types of times in which 1.) you've felt angry, or 2.) you didn't feel angry but could've been angry.`,
    },
    {
      type: "image",
      content: "9-1.png",
    },
    {
      type: "subheading",
      content: "1. How will a list help?",
    },
    {
      type: "body",
      content:
        "Remember, we want to bring out the emotions that are linked to your physical pain. These emotions can be painful, sad, and angry. Creating a list will help bring to mind cases where you could have been angry -*#bringing your suppressed feelings to life.*^^*#The goal is rewire your brain to feel emotions rather than to feel pain. Feeling emotions may be mild, moderate, or intense. It does not matter what the intensity is, only that emotions and their causes are being acknowledged. When we feel chronic pain, we want to look for the emotions behind the pain. We want to deal with the emotions and their reasons. We do not want to focus on the physical acts that we now associate with pain. This will weaken the neural circuits linking physical acts and pain.*^^We recommend having a*#safe space*for you to express your thoughts so no one can access it.",
    },
    {
      type: "subheading",
      content: "2. What to write about",
    },
    {
      type: "body",
      content:
        "In this module, we will take you through each of these 7 categories in which you might've felt anger:",
    },
    {
      type: "bullet",
      content:
        "Traits^Childhood^Pleasing People^Life Responsibilities^Getting older^Close relationships^Other cases",
    },
    {
      type: "body",
      content:
        "On the next page, let's start with writing about traits that might've contributed to your anger.",
    },
  ],
]);
