const modules = [
  "p0",
  "m0",
  "q0",
  "q1",
  "p1",
  "p2",
  "q2",
  "m1", // Mind body syndrome
  "q3",
  "p3",
  "p4",
  "p5",
  "p6",
  "q4",
  "p7",
  "q5",
  "q6",
  "m2",
  "q7",
  "p8", // Intro to exercises
  "p9",
  "p10",
  "p11",
  "p12",
  "p13",
  "p14",
  "p15",
  "p16",
  "q8",
  "p17",
  "p18",
  "q9",
  "m3", // new module
  "p19",
  "p20",
  "p21",
  "p22",
  "p23",
  "q10",
  "m4",
];

// p: page
// m: module introduction
// q: quiz

import * as SecureStore from "expo-secure-store";
export const incrementAndReturnIndex = async () => {
  let contentIndex = await SecureStore.getItemAsync("userProgress");
  if (contentIndex) {
    contentIndex = parseInt(contentIndex) + 1;
  }
  let updateProg = await SecureStore.setItemAsync(
    "userProgress",
    contentIndex.toString()
  );
  return contentIndex;
};

export const moduleTitles = [
  "Background",
  "The Mind Body Syndrome",
  "Exercises To Help Your Pain",
  "Mindfulness",
  "Extra Information",
];

export default modules;
