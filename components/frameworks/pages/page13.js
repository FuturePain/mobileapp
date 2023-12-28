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
export const page13 = contentBody([
  "IV. Life Responsibilities",
  [
    {
      type: "body",
      content:
        "*#Preparation:*^^Get comfortable in a place where you feel safe. Now, open your journal or online document to start writing. Make sure it's something that only you can access--your writing is for your eyes only!",
    },
    { type: "heading", content: "IV. Life Responsibilities" },
    {
      type: "body",
      content: `*#Life responsibilities*and*#pressure*from*#loved ones*can cause suppressed anger. This can happen even if you don't think you feel angry about it.^^For example, you might feel pressure or responsibilities from your:`,
    },
    {
      type: "bullet",
      content: "job^^marriage^^children^^parents",
    },
    {
      type: "body",
      content: `*#Please take a moment to reflect, then write down anything from your life that might cause you to feel pressure and responsibility.*^^Include things that did not cause you to feel pressure at the time, but looking back, should have. Try to come up with around 5-20 instances, but feel free to add more.^^Don't limit yourself--you should write down anything and everything, even if you're not 100% sure it fits into this category.^^Remember: please be honest with yourself. Only you will see what you write down.^^^^*#Note:*At this point, do not share the things you write down with others. This is personal treatment for your eyes only, so please don't hold yourself back from writing down anything. The point to bring these things to conscious awareness. This is not a relationship exercise, but a personal exercise.`,
    },
    {
      type: "image",
      content: "13-1.png",
    },
  ],
]);
