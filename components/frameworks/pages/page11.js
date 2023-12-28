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
export const page11 = contentBody([
  "II. Childhood",
  [
    {
      type: "body",
      content:
        "*#Preparation:*^^Get comfortable in a place where you feel safe. Now, open your journal or online document to start writing. Make sure it's something that only you can access--your writing is for your eyes only!",
    },
    { type: "heading", content: "II. Childhood" },
    {
      type: "body",
      content: `Anger from childhood*#piles up*as you age, and this leads to suppressed anger.^^For example, your parents might've yelled at you or did something you felt was unfair.^^*#Please take a moment to think about anything from your childhood that you've felt anger about.*Try to come up with around 5-20 instances, but feel free to add more.^^You should also write down anything from*#your childhood*that looking back on, should have made you angry even if you did not feel angry at the time. Don't limit yourself--you should write down anything and everything, even if you're not 100% sure it fits into this category.^^Remember: please be honest with yourself. Only you will see what you write down.^^^^*#Note:*At this point, do not share the things you write down with others. This is personal treatment for your eyes only, so please don't hold yourself back from writing down anything. The point to bring these things to conscious awareness. This is not a relationship exercise, but a personal exercise.`,
    },
    {
      type: "image",
      content: "11-1.png",
    },
  ],
]);
