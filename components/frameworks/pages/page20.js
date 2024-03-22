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
export const page20 = contentBody([
  "Body Scan Exercise",
  [
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
      content:
        "Bringing your attention to your body. You can close your eyes if that's comfortable for you.^Notice your body. Feel the weight of your body against the surface it's touching.^Take a few deep breaths. And as you take a deep breath, bring in more oxygen. Feel that air flowing into your body and filling your lungs. As you exhale, feel the airflow out of your body, gaining a deeper sense of relaxation.^Notice the sensations between your feet and the surface it's touching. Feel the slight heaviness present. Aware of this weight, it begins to transform into light vibrations that flow from your heels to your toes.^Notice your legs against the surface it's touching. Feel the tension or pressure. Aware of the pressure or tension, feel it lifting away, leaving behind a sense of lightness and relief.^Notice your back against the surface it's touching. Feel the tingling sensation of achiness in your back. Aware of this achiness, sense it traveling up your spine and leaving your body with your next exhale.^Bring your attention to your stomach area. Notice the slight tightness in your stomach. Take a breath in and expel the tension with a deep exhale. Feel your stomach soften.^Notice your neck. Feel the stiffness present. Imagine this strain releasing with one large inhale and exhale. Feel a softness overcome the area.^Notice your jaw. Unclench it and feel your facial muscles become relaxed.^Notice your arms. Feel any tightness present. Aware of the tightness, soften your shoulders and embrace the feeling of looseness. Take a deep breath^Notice your hands. Feel the weight of your hands. Rubbing and wiggling your fingers, your hands begin to feel a feather-like freeness.^Now, notice your whole body. Take one more breath.^Be aware of this feeling of weightlessness and relaxation. Take a breath.^When you're ready, you can open your eyes.",
    },
    {
      type: "body",
      content:
        "This concludes our body-scan meditation. If you need a break, you can pause this session and come back.^^*#REMEMBER:*the more you understand where you feel pain, the more you will be able to identify when you are feeling stress as pain. Then you can refocus yourself to find the true underlying emotional cause.^^Continue to the next exercise on breathing awareness when you are ready.",
    },
    {
      type: "image",
      content: "20-1.png",
    },
    {
      type: "subheading",
      content: "3. Reminder",
    },
    {
      type: "body",
      content: "*#Go at your own pace*, and continue when you are ready.",
    },
  ],
]);
