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
export const page6 = contentBody([
  "Placebos/Nocebos",
  [
    { type: "heading", content: "1. Placebos" },
    {
      type: "body",
      content: `Placebos are fake treatments that*#have no physical effects*on a disease or condition. However,*#you can still feel positive effects if you believe they work*to improve the disease or condition.^^For example, you are given a pill and told that it helps your headaches. After taking the pill, you feel less headaches. However, the pill is in reality a sugar pill that does not cause any effects. You felt less headaches because your mind believed you should, not because the pill helped your headaches.^^However, your headache pain DOES actually decrease--but not from the pill. `,
    },
    {
      type: "image",
      content: "6-1.png",
    },
    {
      type: "heading",
      content: "2. Nocebos",
    },
    {
      type: "body",
      content:
        "Nocebos are like placebos: fake treatments that*#have no physical effects*on a disease or condition. BUT nocebos cause*#harmful*effects, not helpful effects.^^A study found that patients given a pill they were told was cholesterol medicine reported having bad side effects. This occurred since patients thought the medicine was supposed to have side effects. In reality, the medicine had no bad side effects since it was not really cholesterol medicine. This was nocebo.^^Whether a fake treatment has helpful effects (placebo) or harmful effects (nocebo) depends on*#patients' beliefs.*These beliefs results in different neural circuits firing in the brain.^^From this example, we see once again that*#an increase in pain can occur when the brain activates certain neural circuits.*^^So, even though there may be no physical cause,*#the pain is not imagined.*",
    },
    {
      type: "image",
      content: "6-2.png",
    },
    {
      type: "heading",
      content: "3. Main takeaway",
    },
    {
      type: "body",
      content:
        "Many painful conditions are due to*#stress causing changes in the brain's neural circuitry, which results in real pain.*",
    },
  ],
]);
