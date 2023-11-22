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
export const page5 = contentBody([
  "Research Studies",
  [
    { type: "heading", content: "I. Stress and low back pain in America" },
    {
      type: "body",
      content: `In a 2020 study, a team of UC Berkeley researchers saw a drop in stress, anxiety, and depression across America. After research and analysis, they found that the drop in stress caused a similar drop in low back pain.^The researchers found that within around a month of the drop in stress, 2.1 million people stopped having low back pain and 685,000 fewer people went to the doctor for low back pain.^So, less stress meant less chronic pain.`,
    },
    {
      type: "image",
      content: "5-1.png",
    },
    {
      type: "heading",
      content: "II. Discrimination and chronic pain",
    },
    {
      type: "body",
      content:
        "In a 2018 study, a team of UC Berkeley researchers found that people who experienced discrimination had more risk for chronic pain.^^Discrimination happens when you're treated unfairly because of things like your gender, race, or height. The study looked at all types of discrimination.^^They study found that 4.1 million people in the US experience chronic pain because of their experience of discrimination. The more intense the discrimination, the more likely someone is to get chronic pain.^^This is because discrimination causes stress. And like we learned earlier, stress causes chronic pain.^^So, discrimination can be a type of stress that causes chronic pain.",
    },
    {
      type: "image",
      content: "5-2.png",
    },
    {
      type: "body",
      content:
        "Okay, now that we've shown you the evidence of how stress causes chronic pain, let's learn about placebos and nocebos!",
    },
  ],
]);
