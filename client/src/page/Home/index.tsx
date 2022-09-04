import React from "react";
import Banner from "../../components/Banner";
import Cardlist, { CardListType } from "../../components/CardList";
import Section from "../../components/Section";

const listeningTestList: CardListType = [
  {
    href: "/test/listening/part-1",
    part: 1,
    title: "Photographs",
    content:
      "Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.",
    imgUrl:
      "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    href: "/test/listening/part-2",
    part: 2,
    title: "Question - Response",
    content:
      "Three responses to one question or statement will be spoken only one time. Select the best response for the question.",
    imgUrl:
      "https://arrivein.com/wp-content/uploads/2020/07/Blog-Banner-Job-interview-questions.jpg",
  },
  {
    href: "/test/listening/part-3",
    part: 3,
    title: "Short Conversations",
    content:
      "Conversations between two or three people will be spoken only one time. Listen to each conversation and select the best response for the question. There are three questions for each conversation.",
    imgUrl:
      "https://cdn.shrm.org/image/upload/c_crop%2Ch_386%2Cw_686%2Cx_0%2Cy_59/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Competencies/conversation_isrprn?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjU5LCJ4MiI6Njg2LCJ5MiI6NDQ0LCJ3Ijo2ODYsImgiOjM4Nn19",
  },
  {
    href: "/test/listening/part-4",
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
    href: "/test/reading/part-5",
    part: 5,
    title: "Incomplete Sentences",
    content:
      "Select the best answer of the four choices to complete the sentence.",
    imgUrl:
      "https://www.masterclass.com/cdn-cgi/image/width=828,quality=75,format=webp/https://images.ctfassets.net/3s5io6mnxfqz/3QSruYage5D2d9ZJ4fg5Ir/b4a3bb428de80f7f404130eb67e789a7/AdobeStock_142817078.jpeg",
  },
  {
    href: "/test/reading/part-6",
    part: 6,
    title: "Text Completion",
    content:
      "Select the best answer of the four choices (words, phrases, or a sentence) to complete the text. There are four questions for each text.",
    imgUrl:
      "https://document360.com/wp-content/uploads/2019/08/blogimage11-e1564751826368.jpg",
  },
  {
    href: "/test/reading/part-7",
    part: 7,
    title: "Reading Comprehension",
    content:
      "Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.",
    imgUrl:
      "https://blaze.today/images/posts/please-kindly-sign-and-return.jpeg",
  },
];
const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="container-full">
          <Banner>
            <div className="main-heading my-6 px-8 max-w-[60vw]">
              <h1 className="title px-4 text-white">
                Start Your FREE TOEIC Practice Test 2022
              </h1>
              <div className="subtitle px-4 text-white">
                Do you want to obtain your TOEIC target score? Take FREE
                practice questions and tests on our website to get 100% ready
                for your upcoming TOEIC exam!
              </div>
            </div>
          </Banner>
        </div>
        <div className="container">
          <div className="main py-4 overflow-x-hidden">
            <div className="main-body py-4 ">
              <Section title="Listening">
                <Cardlist cardList={listeningTestList} />
              </Section>
              <Section title="Reading">
                <Cardlist cardList={readingTestList} />
              </Section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
