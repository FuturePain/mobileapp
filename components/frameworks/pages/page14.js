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
export const page14 = contentBody([
  "V. Getting Older",
  [
    {
      type: "body",
      content:
        "*#Preparation:*^^Get comfortable in a place where you feel safe. Now, open your journal or online document to start writing. Make sure it's something that only you can access--your writing is for your eyes only!",
    },
    { type: "heading", content: "V. Getting Older" },
    {
      type: "body",
      content: `Getting*#older*and knowing you're*#mortal*can cause your pain. You might feel angry that you're getting older.^^For example, this can include:`,
    },
    {
      type: "bullet",
      content:
        "anger at losing your hair/your hair going gray^anger that you're mortal and will die someday^getting wrinkles^gaining weight as you age",
    },
    {
      type: "body",
      content: `This may not be obvious, but it can be an important contributor to anger.^^*#Please take a moment to reflect, then add this to your list if it applies.*^^Don't limit yourself--you should write down anything and everything, even if you're not 100% sure it fits into this category. ^^Remember: please be honest with yourself. Only you will see what you write down.^^^^*#Note:*At this point, do not share the things you write down with others. This is personal treatment for your eyes only, so please don't hold yourself back from writing down anything. The point to bring these things to conscious awareness. This is not a relationship exercise, but a personal exercise.`,
    },
    {
      type: "image",
      content: "14-1.png",
    },
  ],
]);
