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
export const page19 = contentBody([
  "What is mindfulness?",
  [
    {
      type: "image",
      content: "19-1.png",
    },
    {
      type: "subheading",
      content: "1. Thanks for being here!",
    },
    {
      type: "body",
      content: `It takes time and dedication to treat chronic pain, and you're taking a great first step towards a better future.^^Before you continue, please keep these in mind:`,
    },
    {
      type: "bullet",
      content:
        "You must decide if Mind Body Syndrome (MBS) applies to you. This treatment will only help once you decide you have MBS.^You must have a diagnosis for fibromyalgia, irritable bowel syndrome (IBS), tension/migraine headaches, low-back pain, or temporomandibular joint pain (TMJ) AND be under the care of a physician to proceed.",
    },
    {
      type: "body",
      content:
        "*#Recap*^^In the last session, the “The List” exercise taught us that we can prevent our bodies from manifesting our suppressed, unconscious anger into pain by becoming aware of this anger. Today, we will continue this awareness theme by partaking in some Mindfulness exercises. The purpose of these mindfulness activities is to become aware of one's pain and understand its actual causes in order to take control of it.^^First, let's address what mindfulness is.",
    },
    {
      type: "subheading",
      content: "2. What is mindfulness?",
    },
    {
      type: "body",
      content:
        "Mindfulness is one's conscious awareness and judgment-free acceptance of one's moment-to-moment experience. It is the culmination of one's awareness and attention at the present moment.^^Mindfulness can be part of every daily activity, whether it be eating, going for a walk, or even taking deep breaths. As long as you are aware and present in the moment of doing that activity, you can be mindful of the experience.",
    },
    {
      type: "image",
      content: "19-2.png",
    },
    {
      type: "subheading",
      content: "3. Why should we be mindful?",
    },
    {
      type: "body",
      content: `Clinical studies have shown that mindfulness practices decrease one's pain interference and intensity, as well as improve psychological health and quality of life. The difference in the Mindfulness approach used here is that we are not focusing on accepting our pain but reframing our pain as being due to events that should merely have provoked an emotional reaction: mild, moderate, or intense.`,
    },
    {
      type: "subheading",
      content: "IV.  Mindfulness meditation practices",
    },
    {
      type: "body",
      content:
        "Today, we will be practicing 3 forms of Mindfulness meditation:",
    },
    {
      type: "bullet",
      content: "Body Scans^Breathing Meditation^Reflection of a daily routine",
    },
    {
      type: "image",
      content: "19-3.png",
    },
    {
      type: "body",
      content:
        "Before we begin, please find a safe and quiet space to meditate. Then, find a comfortable position to take while participating in the following exercises.^^Make sure to take note of how you are feeling on both a physical and emotional level before and after each meditation practice. Whatever is going through your mind at the moment, take a minute to jot it down.^^Select the*#next*button to start the Body Scan Mindfulness exercise.",
    },
  ],
]);
