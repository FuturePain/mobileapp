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
export const page22 = contentBody([
  "Reflection on Daily Routine",
  [
    {
      type: "subheading",
      content: "Introduction",
    },
    {
      type: "body",
      content:
        "Our last mindfulness meditation today will be one that calls us to reflect on a daily task. Being mindful of something that we do routinely allows us to become aware of our actions. As we mentioned before having awareness means having control. Therefore, to be aware of our actions means to have control over our daily routine. Soon enough your mindfulness ways will allow you to have control over the pain.",
    },
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
      type: "bullet",
      content: `Find a comfortable position and follow instructions from the video^Close your eyes (if you feel comfortable), take a deep inhale, and exhale^Think about a daily task that makes you happy^Think about the movement involved in this task - What parts of your body are being engaged? How does each part of your body move to do this task?^Think about your surroundings when you are doing this task - What are the sounds around you? What do you see? What does it smell like? Are you touching anything?^What does it feel like - Are you consuming something?^What flavors and textures do you experience?^Think about why you are doing it.^Why am I doing this task?^Finally, take a deep inhale and exhale`,
    },
    {
      type: "image",
      content: "22-1.png",
    },
    {
      type: "body",
      content:
        "This concludes our meditation. If you need a break, you can take a moment before you proceed. Come back when you are ready. Please proceed to our optional activity if you are interested.",
    },
  ],
]);
