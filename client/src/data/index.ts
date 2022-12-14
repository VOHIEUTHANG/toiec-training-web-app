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
    desc: "Toeic Listening Part 2 (Question ??? Response) is not the most difficult section of the TOEIC test, however, it sometimes makes candidates confused. In this article, I will give you a close insight into the format of TOEIC Listening part 2 as well as tips and tricks in this part. ",
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

const vocabularyCardList: TipsCartType[] = [
  {
    href: "/vocabulary/part-key/1",
    part: 1,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/12/vocabulary-toeic-part-1.jpg",
    name: "Common Vocabulary For TOEIC",
    desc: "Although Part 1 is considered the least challenging part in the Toeic exam, it???s necessary to prepare knowledge as well as strategies to get a high score. Apart from having a thorough understanding of the test format, you also need to boost your vocabulary. Here are common vocabulary in Toeic part 1 that you can refer to.",
  },
  {
    href: "/vocabulary/part-key/2",
    part: 2,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/12/vocabulary-part-2.jpg",
    name: "Common Vocabulary For TOEIC",
    desc: "For people who want to master English in general and achieve the Toeic target score in particular, boosting vocabulary is really important.This article will introduce common vocabulary for Toeic part 2. Hopefully, it will help you enhance your score in this part.",
  },
  {
    href: "/vocabulary/part-key/3",
    part: 3,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/12/vocabulary-part-3.png",
    name: "Common Vocabulary For TOEIC",
    desc: "Part 3 is one of the most challenging parts in the Toeic exam since answers are often paraphrased. To gain a high score in Part 3, cultivating vocabulary is really essential. This article will give common vocabulary for Toeic part 3.",
  },
];

const vocabularyPart1People: { word: string; meaning: string; type: string }[] =
  [
    {
      word: "nod",
      meaning: "g???t ?????u",
      type: "Nound",
    },
    {
      word: "shake",
      meaning: "rung",
      type: "Verb",
    },
    {
      word: "tilt",
      meaning: "nghi??n",
      type: "Verb",
    },
    {
      word: "cry",
      meaning: "kh??c",
      type: "Verb",
    },
    {
      word: "look at",
      meaning: "nh??n v??o",
      type: "Verb",
    },
    {
      word: "observe",
      meaning: "quan s??t",
      type: "Verb",
    },
    {
      word: "smell",
      meaning: "m??i",
      type: "Nound",
    },
    {
      word: "sneeze",
      meaning: "h???c h??i",
      type: "Verb",
    },
    {
      word: "clap",
      meaning: "v??? tay",
      type: "Verb",
    },
    {
      word: "grab",
      meaning: "v??? l???y",
      type: "Verb",
    },
    {
      word: "hold",
      meaning: "gi???",
      type: "Verb",
    },
    {
      word: "lift",
      meaning: "n??ng l??n",
      type: "Verb",
    },
    {
      word: "press",
      meaning: "nh???n",
      type: "Verb",
    },
    {
      word: "throw",
      meaning: "n??m",
      type: "Verb",
    },
    {
      word: "throw",
      meaning: "n??m",
      type: "Verb",
    },
    {
      word: "wink",
      meaning: "nh??y m???t",
      type: "Nound",
    },
    {
      word: "laungh",
      meaning: "c?????i",
      type: "Verb",
    },
  ];

const vocabularyPart1Objects: {
  word: string;
  meaning: string;
  type: string;
}[] = [
  {
    word: "computer",
    meaning: "m??y t??nh",
    type: "Nound",
  },
  {
    word: "monitor",
    meaning: "m??n h??nh",
    type: "Nound",
  },
  {
    word: "fountain",
    meaning: "????i phun n?????c",
    type: "Nound",
  },
  {
    word: "couch",
    meaning: "??i v??ng",
    type: "Nuond",
  },
  {
    word: "furniture",
    meaning: "????? n???i th???t",
    type: "Nound",
  },
  {
    word: "observe",
    meaning: "quan s??t",
    type: "Verb",
  },
  {
    word: "traffic jam",
    meaning: "t???c ???????ng",
    type: "Nound",
  },
  {
    word: "be lined up in rows",
    meaning: "???????c x???p th??nh h??ng",
    type: "pharve",
  },
  {
    word: "be unoccupied",
    meaning: "kh??ng c?? ng?????i ???",
    type: "pharve",
  },
  {
    word: "construction site",
    meaning: "c??ng tr?????ng",
    type: "Nound",
  },
  {
    word: "ladder",
    meaning: "thang",
    type: "Nound",
  },
  {
    word: "dig",
    meaning: "????o ?????t",
    type: "Verb",
  },
  {
    word: "shovel",
    meaning: "x???ng",
    type: "Nound",
  },
  {
    word: "pave the road",
    meaning: "m??? ???????ng",
    type: "pharve",
  },
  {
    word: "push the wheelbarrow",
    meaning: "?????y xe c??t k??t",
    type: "pharve",
  },
];

const vocabularyPart2: {
  word: string;
  meaning: string;
  type: string;
}[] = [
  {
    word: "proposal",
    meaning: "????? ngh???",
    type: "Nound",
  },
  {
    word: "go over",
    meaning: "??i qua",
    type: "Verb",
  },
  {
    word: "laboratory",
    meaning: "ph??ng th?? nghi???m",
    type: "Verb",
  },
  {
    word: "expert",
    meaning: "chuy??n gia",
    type: "Verb",
  },
  {
    word: "consult",
    meaning: "than kh???o",
    type: "Verb",
  },
  {
    word: "come by",
    meaning: "gh?? qua",
    type: "Verb",
  },
  {
    word: "emergency exit",
    meaning: "c???a tho??t hi???m",
    type: "Nound",
  },
  {
    word: "out of stock",
    meaning: "h???t h??ng",
    type: "Nound",
  },
  {
    word: "merger",
    meaning: "s??p nh???p",
    type: "Nound",
  },
  {
    word: "dozen",
    meaning: "m???t t??",
    type: "Nound",
  },
  {
    word: "real estate agent",
    meaning: "?????i l?? b???t ?????ng s???n",
    type: "Nound",
  },
  {
    word: "manuscript",
    meaning: "b???n th???o",
    type: "Nound",
  },
  { word: "press release", meaning: "th??ng c??o b??o ch??", type: "Nound" },
  { word: "crew", meaning: "phi h??nh ??o??n", type: "Nound" },
  { word: "renovation", meaning: "c???i t???o", type: "Verb" },
  { word: "downstairs", meaning: "t???ng d?????i", type: "Nound" },
  { word: "bulletin board", meaning: "b???ng tin", type: "Nound" },
  { word: "receptionist", meaning: "l??? t??n", type: "Nound" },
  { word: "general director", meaning: "t???ng gi??m ?????c", type: "Nound" },
  { word: "secretary", meaning: "th?? k??", type: "Nound" },
  { word: "maintenance department", meaning: "b??? ph???n b???o tr??", type: "Nound" },
  { word: "bankrupt", meaning: "ph?? s???n", type: "Nound" },
  { word: "deposit", meaning: "?????t c???c", type: "Nound" },
  { word: "shareholder", meaning: "c??? ????ng", type: "Nound" },
  { word: "dividend", meaning: "c??? t???c", type: "Nound" },
  { word: "liquidity", meaning: "thanh kho???n", type: "Nound" },
];

const vocabularyPart3: {
  word: string;
  meaning: string;
  type: string;
}[] = [
  {
    word: "junior",
    meaning: "tr??? con",
    type: "Nound",
  },
  {
    word: "transfer",
    meaning: "chuy???n giao",
    type: "Nound",
  },
  {
    word: "short-staffed",
    meaning: "bi??n ch??? ng???n",
    type: "Nound",
  },
  {
    word: "supervisor",
    meaning: "ng?????i quan s??t",
    type: "Nound",
  },
  {
    word: "boss",
    meaning: "x???p",
    type: "Nound",
  },
  {
    word: "sales representative ",
    meaning: "ng?????i ?????i di???n b??n h??ng",
    type: "Nound",
  },
  {
    word: "security officer",
    meaning: "nh??n vi??n an ninh",
    type: "Nound",
  },
  {
    word: "administrative assistant",
    meaning: "tr??? l?? h??nh ch??nh",
    type: "Nound",
  },
  {
    word: "store clerk",
    meaning: "nh??n vi??n b??n h??ng",
    type: "Nound",
  },
  {
    word: "personnel",
    meaning: "nh??n vi??n",
    type: "Nound",
  },
  {
    word: "salesperson ",
    meaning: "nh??n vi??n b??n h??ng",
    type: "Nound",
  },
  {
    word: "crew",
    meaning: "phi h??nh ??o??n",
    type: "Nound",
  },
  {
    word: "coworker",
    meaning: "?????ng nghi???p",
    type: "Nound",
  },
  {
    word: "colleague",
    meaning: "?????ng nghi???p",
    type: "Nound",
  },
  {
    word: "plumber",
    meaning: "th??? s???a ???ng n?????c",
    type: "Nound",
  },
  {
    word: "receptionist",
    meaning: "l??? t??n",
    type: "Nound",
  },
  {
    word: "automatic mechanic",
    meaning: "th??? m??y t??? ?????ng",
    type: "Nound",
  },
  {
    word: "fill out an application",
    meaning: "??i???n v??o ????n xin vi???c",
    type: "Nound",
  },
  {
    word: "cover letter",
    meaning: "th?? xin vi???c",
    type: "Nound",
  },
  {
    word: "candidate",
    meaning: "???ng vi??n",
    type: "Nound",
  },
  {
    word: "qualifications",
    meaning: "tr??nh ????? chuy??n m??n",
    type: "Nound",
  },
  {
    word: "certificate",
    meaning: "ch???ng ch???",
    type: "Nound",
  },
  {
    word: "company poilcy",
    meaning: "ch??nh s??ch c???a c??ng ty",
    type: "Nound",
  },
  {
    word: "be entitled to V",
    meaning: "???????c quy???n l??m gi ????",
    type: "Nound",
  },
  {
    word: "replacement",
    meaning: "s??? thay th???",
    type: "Nound",
  },
  {
    word: "annual salary ",
    meaning: "m???c l????ng h??ng n??m",
    type: "Nound",
  },
  {
    word: "vacancy",
    meaning: "v??? tr?? c??n tr???ng",
    type: "Nound",
  },
  {
    word: "workplace",
    meaning: "n??i l??m vi???c",
    type: "Nound",
  },
  {
    word: "working conditions",
    meaning: "??i???u ki???n l??m vi???c",
    type: "Nound",
  },
  {
    word: "reception desk ",
    meaning: "b??n l??? t??n",
    type: "Nound",
  },
  {
    word: "minimum requirements",
    meaning: "y??u c???n t???i thi???u",
    type: "Nound",
  },
  {
    word: "inventory",
    meaning: "h??ng t???n kho",
    type: "Nound",
  },
  {
    word: "refund",
    meaning: "ho??n ti???n",
    type: "Nound",
  },
  {
    word: "manufacturer",
    meaning: "nh?? ch??? t???o",
    type: "Nound",
  },
  {
    word: "warehouse",
    meaning: "kho",
    type: "Nound",
  },
  {
    word: "stockroom",
    meaning: "kho ch???a h??ng",
    type: "Nound",
  },
  {
    word: "expedite",
    meaning: "th??c gi???c",
    type: "Nound",
  },
  {
    word: "defects",
    meaning: "khuy???t t???t",
    type: "Nound",
  },
  {
    word: "warranty",
    meaning: "s??? ?????m b???o",
    type: "Nound",
  },
  {
    word: "rebate",
    meaning: "h??? gi??",
    type: "Nound",
  },
  {
    word: "registration",
    meaning: "s??? ????ng k??",
    type: "Nound",
  },
];
export {
  listeningTestList,
  readingTestList,
  testKitList,
  tipsCardList,
  vocabularyCardList,
  vocabularyPart1People,
  vocabularyPart1Objects,
  vocabularyPart2,
  vocabularyPart3,
};
