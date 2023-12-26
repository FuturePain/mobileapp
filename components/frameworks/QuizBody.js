import { quiz0 } from "./quizzes/quiz0";
import { quiz1 } from "./quizzes/quiz1";
import { quiz2 } from "./quizzes/quiz2";
import { quiz3 } from "./quizzes/quiz3";
import { quiz4 } from "./quizzes/quiz4";
import { quiz5 } from "./quizzes/quiz5";
import { quiz6 } from "./quizzes/quiz6";
import { quiz7 } from "./quizzes/quiz7";

const quizBody = (items) => {
  const vals = [
    "quizTitle",
    "quizDescription",
    "quizQuestions",
    "quizChoices",
    "quizFeedbacks",
    "quizAnswers",
    "links",
  ];
  // quizChoices is an array of arrays
  // quizQuestions is an array of objects:
  //   {
  //     type: [multiple, shortform]
  //     content:
  //   }
  // quizAnswers is an array of arrays, each element is the index of correct answer

  const it = items;
  let result = {};
  for (let i = 0; i < items.length; i++) {
    result[vals[i]] = it[i];
  }
  return result;
};

export const images = {};

const quizzes = [quiz0, quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7]; // populate array based on results/items
export default quizzes;
