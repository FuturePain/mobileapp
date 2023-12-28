import { page0 } from "./pages/page0";
import { page1 } from "./pages/page1";
import { page2 } from "./pages/page2";
import { page3 } from "./pages/page3";
import { page4 } from "./pages/page4";
import { page5 } from "./pages/page5";
import { page6 } from "./pages/page6";
import { page7 } from "./pages/page7";
import { page8 } from "./pages/page8";
import { page9 } from "./pages/page9";
import { page10 } from "./pages/page10";
import { page11 } from "./pages/page11";
import { page12 } from "./pages/page12";
import { page13 } from "./pages/page13";
import { page14 } from "./pages/page14";
import { page15 } from "./pages/page15";
import { page16 } from "./pages/page16";
import { page17 } from "./pages/page17";
import { page18 } from "./pages/page18";
import { page19 } from "./pages/page19";
import { page20 } from "./pages/page20";
import { page21 } from "./pages/page21";
import { page22 } from "./pages/page22";
import { page23 } from "./pages/page23";

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
  "10-1.png": require("../../course-assets/10-1.png"),
  "11-1.png": require("../../course-assets/11-1.png"),
  "12-1.png": require("../../course-assets/12-1.png"),
  "13-1.png": require("../../course-assets/13-1.png"),
  "14-1.png": require("../../course-assets/14-1.png"),
  "15-1.png": require("../../course-assets/15-1.png"),
  "17-1.png": require("../../course-assets/17-1.png"),
  "17-2.png": require("../../course-assets/17-2.png"),
  "18-1.png": require("../../course-assets/18-1.png"),
  "18-2.png": require("../../course-assets/18-2.png"),
  "19-1.png": require("../../course-assets/19-1.png"),
  "19-2.png": require("../../course-assets/19-2.png"),
  "19-3.png": require("../../course-assets/19-3.png"),
  "20-1.png": require("../../course-assets/20-1.png"),
  "21-1.png": require("../../course-assets/21-1.png"),
  "22-1.png": require("../../course-assets/22-1.png"),
  "23-1.png": require("../../course-assets/23-1.png"),
};
const pages = [
  page0,
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
  page7,
  page8,
  page9,
  page10,
  page11,
  page12,
  page13,
  page14,
  page15,
  page16,
  page17,
  page18,
  page19,
  page20,
  page21,
  page22,
  page23,
]; // populate array based on results/items
export default pages;
