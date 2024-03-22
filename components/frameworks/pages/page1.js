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

export const page1 = contentBody([
  "Understanding Your Chronic Pain",
  [
    { type: "image", content: "1-1.png" },
    { type: "heading", content: "1. The good news!" },
    {
      type: "body",
      content:
        "This study has proven treatments to improve or even stop low back pain, neck pain, migraines, fibromyalgia, and/or irritable bowel syndrome (IBS).^The treatments are backed by strong research which CAN correct the neurobiology of your brain without drugs or surgery. If you put in the work, you WILL take control of your pain.^Pain can be scary, so let's get started by breaking down what pain is! ",
    },
    {
      type: "heading",
      content: "2. Testimonials",
    },
    {
      type: "body",
      content:
        "The treatments we share in this study have helped many people significantly improve their chronic pain. Hear from them:",
    },
    {
      type: "subheading",
      content: "Back pain/neck pain testimonial",
    },
    {
      type: "body",
      content: `"For fifteen years, my life revolved around my back. I took time off from work, conducted meetings lying on the floor, and slept with ice bags. I had considered [the treatments] preposterous, but ten years ago I was talked into [it]. I haven't had back problems since."^*#- John S.*`,
    },
    {
      type: "subheading",
      content: "Migraine testimonial",
    },
    {
      type: "body",
      content: `"The pain was so terrible I had trouble caring for myself. I rarely went out and I trembled so much from the pain that walking was difficult.^^I was about 65% better in only a few days. Although I still had several headaches a day, I had long periods of feeling good...It is mid-May and I am at about 95% pain free."^*#- Lady P.*`,
    },
    {
      type: "subheading",
      content: "Fibromyalgia testimonial",
    },
    {
      type: "body",
      content: `"I had fibromyalgia for 20 years and recovered from it completely with TMS~ methods. I went through many, many treatments before I stumbled upon TMS.~ This is the only approach that works. It takes hard work and persistence, but you will recover if you keep at it.” (~Note: TMS stands for*#T*he*#M*ind-Body*#S*yndrome, an alternative term for MBS)^*#-Ellen*`,
    },
    {
      type: "subheading",
      content: "Irritable Bowel Syndrome testimonial",
    },
    {
      type: "body",
      content: `"I had suffered with IBS-C for the last 4 years and for the last 4 weeks have been totally symptom free. I have no more pain, no food allergies or intolerances, etc. I eat whatever I want to. I am on no medications, herbs, etc. If it worked for me and many others, it may just be the answer for some of you.”^*#- Gracie*`,
    },
    {
      type: "subheading",
      content: "Temporomandibular Joint (TMJ) testimonial",
    },
    {
      type: "body",
      content: `“I can finally say I'm recovered from TMS. After working 3 days in a row at a mind-numbing warehouse job without a flare up in sight, my neuroticism finally in its closing hours, I'm THERE.” (Note: TMS stands for The Mind-Body Syndrome, an alternative term for MBS)^*#- Scott M.*`,
    },
  ],
]);
