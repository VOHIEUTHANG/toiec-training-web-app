import React from "react";
import Banner from "../../components/Banner";
import Cardlist from "../../components/CardList";
import Section from "../../components/Section";
import TestKitList from "../../components/TestKitList";
import { listeningTestList, readingTestList, testKitList } from "../../data";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="container-full">
          <Banner>
            <div className="main-heading my-6 px-8 max-w-[60vw]">
              <h1 className="title px-4 text-white text-shadow">
                Start Your FREE TOEIC Practice Test 2022
              </h1>
              <div className="subtitle px-4 text-white text-shadow">
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
              <Section title="TOEIC Exam Simulator">
                <TestKitList testKitList={testKitList} />
              </Section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
