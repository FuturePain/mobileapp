import { page0 } from "./pages/page0";
import { page1 } from "./pages/page1";
import { page2 } from "./pages/page2";
import { page3 } from "./pages/page3";
import { page4 } from "./pages/page4";
import { page5 } from "./pages/page5";
import { page6 } from "./pages/page6";
import { page7 } from "./pages/page7";
import { page8 } from "./pages/page8";

export const contentBody = (items) => {
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

export const parseNewElement = (content) => {
  return content.split("^");
};

export const parseBold = (content) => {
  return content.split("*");
};

export const images = {
  "0-1.png": require("../../course-assets/0-1.png"),
  "0-2.png": require("../../course-assets/0-2.png"),
  "1-1.png": require("../../course-assets/1-1.png"),
  "2-1.png": require("../../course-assets/2-1.png"),
  "2-2.png": require("../../course-assets/2-2.png"),
  "2-3.png": require("../../course-assets/2-3.png"),
  "2-4.png": require("../../course-assets/2-4.png"),
  "2-5.png": require("../../course-assets/2-5.png"),
  "3-1.png": require("../../course-assets/3-1.png"),
  "3-2.png": require("../../course-assets/3-2.png"),
  "3-3.png": require("../../course-assets/3-3.png"),
  "3-4.png": require("../../course-assets/3-4.png"),
  "4-1.png": require("../../course-assets/4-1.png"),
  "4-2.png": require("../../course-assets/4-2.png"),
  "5-1.png": require("../../course-assets/5-1.png"),
  "5-2.png": require("../../course-assets/5-2.png"),
  "6-1.png": require("../../course-assets/6-1.png"),
  "6-2.png": require("../../course-assets/6-2.png"),
  "7-1.png": require("../../course-assets/7-1.png"),
  "9-1.png": require("../../course-assets/9-1.png"),
};
const pages = [page0, page1, page2, page3, page4, page5, page6, page7, page8]; // populate array based on results/items
export default pages;
