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
export const page3 = contentBody([
  "What is the Mind Body Syndrome?",
  [
    { type: "heading", content: "1. Thanks again for being here!" },
    {
      type: "body",
      content:
        "It takes time and dedication to treat chronic pain, and you're taking a great first step towards a better future.^Before you continue, please remember:^1. You must decide if Mind Body Syndrome (MBS) applies to you. This treatment will only help once you decide you have MBS.^2. For your safety, you must have a diagnosis for fibromyalgia, irritable bowel syndrome (IBS), tension/migraine headaches, low-back pain, or temporomandibular joint pain (TMJ) AND be under the care of a physician to proceed.",
    },
    {
      type: "heading",
      content: "2. What is Mind Body Syndrome (MBS)?",
    },
    {
      type: "subheading",
      content: "The issue",
    },
    {
      type: "bullet",
      content:
        "Many people with chronic pain don't get better—even after treatment.^Why? There are some important emotional factors to consider!",
    },
    {
      type: "subheading",
      content: "How can emotions cause pain?",
    },
    {
      type: "bullet",
      content:
        "Emotions can make you feel physical pain—it's not imaginary.^This is because there is a biological connection to the pain you feel.",
    },
    {
      type: "image",
      content: "3-1.png",
    },
    {
      type: "subheading",
      content: "How does MBS begin?",
    },
    {
      type: "bullet",
      content:
        "Many cases of MBS begin with*#minor traumas*but increase greatly.^These traumas are often associated with emotional factors, such as stress.",
    },
    {
      type: "image",
      content: "3-2.png",
    },
    {
      type: "subheading",
      content: "Case study: Whiplash",
    },
    {
      type: "body",
      content:
        "Let's look at whiplash to break down an example of how mind-body syndrome works in real life.",
    },
    {
      type: "bullet",
      content: "What is whiplash?",
    },
    {
      type: "bulletalert",
      content:
        "Whiplash is a minor neck injury. It occurs when your head is suddenly thrown forward and backward, such as when you're rear-ended in a car accident.^Whiplash can cause some strain on your neck ligaments.^Even though whiplash is a small injury, people often have long-lasting pain from whiplash. This was confusing to doctors because there was no physical reason why people would be having serious chronic pain from whiplash.",
    },
    {
      type: "image",
      content: "3-3.png",
    },
    {
      type: "bullet",
      content: "Whiplash as MBS",
    },
    {
      type: "bulletalert",
      content:
        "Researchers wanted to see if there were actually physical reasons behind why people experienced terrible chronic pain from whiplash.^They set up an experiment where 51 volunteers were put in a simulated car crash. There were sounds and images to make it seem like they were in an accident, even though there was no actual physical impact on their bodies.^3 days after the simulated car crash, 20% of subjects reported symptoms of whiplash. 4 weeks after, 10% still felt symptoms.",
    },
    {
      type: "body",
      content:
        "So, merely thinking that you were in an accident was enough to cause real pain for these subjects. This shows the power of our brains to cause real pain from emotions.",
    },
    {
      type: "subheading",
      content: "The MBS basis of chronic pain",
    },
    {
      type: "body",
      content:
        "MBS is a syndrome where chronic pain is caused by psychological processes that work through neural circuits, not physical issues that also work through neural circuits. MBS happens when your body expresses suppressed anger or emotions from throughout your life as chronic pain. You may not be aware of your bottled-up anger or emotions because your body has concealed them.",
    },
    {
      type: "bullet",
      content:
        "Using research-backed methods, we will help you treat your chronic pain.",
    },
    {
      type: "image",
      content: "3-4.png",
    },
    {
      type: "body",
      content: "Now, let's check your understanding of MBS!",
    },
  ],
]);
