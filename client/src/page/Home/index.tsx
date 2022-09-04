import React from "react";
import Banner from "../../components/Banner";
import Cardlist, { CardListType } from "../../components/CardList";
import Section from "../../components/Section";

const cardList: CardListType = [
  {
    href: "/",
    part: 1,
    title: "Photographs",
    content:
      "Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.",
    imgUrl:
      "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    href: "/",
    part: 1,
    title: "Photographs",
    content:
      "Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.",
    imgUrl:
      "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    href: "/",
    part: 1,
    title: "Photographs",
    content:
      "Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.",
    imgUrl:
      "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    href: "/",
    part: 1,
    title: "Photographs",
    content:
      "Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.",
    imgUrl:
      "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
];
const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="container-full">
          <Banner />
        </div>
        <div className="container">
          <div className="main py-4">
            <div className="main-heading my-6 px-8">
              <h1 className="title">
                Start Your FREE TOEIC Practice Test 2022
              </h1>
              <div className="subtitle px-4">
                Do you want to obtain your TOEIC target score? Take FREE
                practice questions and tests on our website to get 100% ready
                for your upcoming TOEIC exam!
              </div>
            </div>
            <div className="main-body py-4">
              <Section title="Listening">
                <Cardlist cardList={cardList} />
              </Section>
              <Section title="Reading">
                <Cardlist cardList={cardList} />
              </Section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
