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
export const page16 = contentBody([
  "7. Other",
  [
    {
      type: "body",
      content:
        "*#Preparation:*^^Get comfortable in a place where you feel safe. Now, open your journal or online document to start writing. Make sure it's something that only you can access--your writing is for your eyes only!",
    },
    { type: "heading", content: "7. Other" },
    {
      type: "body",
      content: `*#Please write down any other case where you feel/felt angry but have had to suppress it.*^^Include cases where you did not feel angry at the time, but looking back there was injustice or something else that was wrong.^^Don't limit yourself--you should write down anything and everything, even if you're not 100% sure it fits into this category. Remember: please be honest with yourself. Only you will see what you write down.^^*#Also, remember that suppressed and unconscious anger can become internalized and can cause MBS.*(Internalized is when something becomes a part of you - even if you don't know it).^^^^*#Note:*At this point, do not share the things you write down with others. This is personal treatment for your eyes only, so please don't hold yourself back from writing down anything. The point to bring these things to conscious awareness. This is not a relationship exercise, but a personal exercise.`,
    },
  ],
]);
