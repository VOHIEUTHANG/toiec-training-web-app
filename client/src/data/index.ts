import { CardListType } from "../components/CardList";
import { TestKitListType } from "../components/TestKitList";
import { TipsCartType } from "../components/TipsCard";
const listeningTestList: CardListType = [
  {
    href: "/training/listening/1",
    part: 1,
    title: "Photographs",
    content:
      "Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.",
    imgUrl:
      "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    href: "/training/listening/part-2",
    part: 2,
    title: "Question - Response",
    content:
      "Three responses to one question or statement will be spoken only one time. Select the best response for the question.",
    imgUrl:
      "https://arrivein.com/wp-content/uploads/2020/07/Blog-Banner-Job-interview-questions.jpg",
  },
  {
    href: "/training/listening/part-3",
    part: 3,
    title: "Short Conversations",
    content:
      "Conversations between two or three people will be spoken only one time. Listen to each conversation and select the best response for the question. There are three questions for each conversation.",
    imgUrl:
      "https://cdn.shrm.org/image/upload/c_crop%2Ch_386%2Cw_686%2Cx_0%2Cy_59/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Competencies/conversation_isrprn?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjU5LCJ4MiI6Njg2LCJ5MiI6NDQ0LCJ3Ijo2ODYsImgiOjM4Nn19",
  },
  {
    href: "/training/listening/part-4",
    part: 4,
    title: "Short Talks",
    content:
      "Short talks such as announcements or narrations will be spoken only one time. Listen to each talk and select the best response for the question There are three questions for each talk.",
    imgUrl:
      "https://teded.tedcdn.com/assets/student-talks/hero-01-021ecabf5ecd8b43ca816a1297bcd3f76cbc512de1689279d5301b01222f0001.jpg",
  },
];
const readingTestList: CardListType = [
  {
    href: "/training/reading/part-5",
    part: 5,
    title: "Incomplete Sentences",
    content:
      "Select the best answer of the four choices to complete the sentence.",
    imgUrl:
      "https://www.masterclass.com/cdn-cgi/image/width=828,quality=75,format=webp/https://images.ctfassets.net/3s5io6mnxfqz/3QSruYage5D2d9ZJ4fg5Ir/b4a3bb428de80f7f404130eb67e789a7/AdobeStock_142817078.jpeg",
  },
  {
    href: "/training/reading/part-6",
    part: 6,
    title: "Text Completion",
    content:
      "Select the best answer of the four choices (words, phrases, or a sentence) to complete the text. There are four questions for each text.",
    imgUrl:
      "https://document360.com/wp-content/uploads/2019/08/blogimage11-e1564751826368.jpg",
  },
  {
    href: "/training/reading/part-7",
    part: 7,
    title: "Reading Comprehension",
    content:
      "Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.",
    imgUrl:
      "https://blaze.today/images/posts/please-kindly-sign-and-return.jpeg",
  },
];
const testKitList: TestKitListType = [
  {
    href: "/mock-test/mini",
    name: "mini",
    descriptions:
      "Take mini test with the number of questions and time limit reduced by half",
    backgroundImgUrl:
      "https://toeic-testpro.com/_next/image/?url=%2Fimages%2Fapp%2Ftoeic%2Fmini-test.png&w=1920&q=75",
  },
  {
    href: "/mock-test/full",
    name: "full",
    descriptions:
      "Take full test with the same number of questions and time limit as the actual test",
    backgroundImgUrl:
      "https://toeic-testpro.com/_next/image/?url=%2Fimages%2Fapp%2Ftoeic%2Ffull-test.png&w=1920&q=75",
  },
];

const tipsCardList: TipsCartType[] = [
  {
    href: "/toiec-tips/part-key/1",
    part: 1,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-1.jpg",
    name: "Overview And Tips To Get High Scores",
    desc: "Toeic Listening Part 1 (Photographs) is considered an easy part in the TOEIC exam. However, not everyone knows techniques and strategies to get a maximum score in this part. Scroll down this article to know more information",
  },
  {
    href: "/toiec-tips/part-key/2",
    part: 2,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-2-1.jpg",
    name: "Overview, Tips And Tricks",
    desc: "Toeic Listening Part 2 (Question – Response) is not the most difficult section of the TOEIC test, however, it sometimes makes candidates confused. In this article, I will give you a close insight into the format of TOEIC Listening part 2 as well as tips and tricks in this part. ",
  },
  {
    href: "/toiec-tips/part-key/3",
    part: 3,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-3.jpg",
    name: "Overview, Tips And Tricks",
    desc: "Toeic Listening Part 3 (Conversations) is one of the most challenging parts in the Toeic exam because audioes are quite long with two or three people participating in the conversation",
  },
];

export { listeningTestList, readingTestList, testKitList, tipsCardList };
