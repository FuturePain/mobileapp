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

export const page0 = contentBody([
  "FUTUREPAIN Intervention",
  [
    { type: "image", content: "0-1.png" },
    { type: "heading", content: "Welcome!" },
    {
      type: "body",
      content:
        "According to the CDC, 50 million Americans suffer from chronic pain. Whether it is in the back or knee, many patients report damaging pain that stops them from living life.^What if we told you that a lot of your pain can be an outcome of how your brain handles stress and that by fixing these connections you may be able to alleviate your pain? This course is designed for you to correct the neurobiology of your brain without expensive drugs or surgeries. There are 4 main modules that go over the basics of chronic pain, the Mind Body Syndrome (MBS), and scientifically proven exercises you can use to overcome your pain. ",
    },
    {
      type: "heading",
      content: "⚠️ Before you start",
    },
    {
      type: "body",
      content:
        "For your safety, you need to have a doctor's diagnosis for chronic pain. You should only be part of the study if you've been diagnosed with at least one of these:",
    },
    {
      type: "bullet",
      content:
        "Low-back pain^Temporomandibular joint (TMJ) dysfunction^Tension or migraine headaches^Fibromyalgia^Irritable bowel syndrome",
    },
    {
      type: "body",
      content:
        "If you have not been diagnosed, then please reach out to us to discuss further options. Email us at*#futurepain@berkeley.edu.*",
    },
    {
      type: "bullet",
      content:
        "Emotions can make you feel physical pain—it's not imaginary.^This is because there is a biological connection to the pain you feel.",
    },
    {
      type: "image",
      content: "0-2.png",
    },
    {
      type: "heading",
      content: "Let's get started!",
    },
    {
      type: "body",
      content:
        "Remember—as you navigate the course, it is up to you to practice these exercises daily to observe an effect. You have to believe that you*#CAN*and*#WILL*get better! We believe in you and will be here every step of the way!",
    },
    {
      type: "body",
      content: "Begin the first module below.",
    },
  ],
]);
