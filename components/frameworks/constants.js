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
