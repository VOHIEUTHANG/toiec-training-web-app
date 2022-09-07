import React, { useState } from "react";
import PageFrame from "../../../components/PageFrame";
import { Row, Col, Divider } from "antd";
import Button from "../../../components/Button";
import { ReloadOutlined } from "@ant-design/icons";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

const PracticePage = () => {
  const [value, setValue] = useState<number>(0);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <PageFrame>
      <div>
        <div className="page-title">Part 1: Photographs</div>
        <Row gutter={[32, 32]}>
          <Col sm={24} lg={8}>
            <div className="paper">
              <div className="text-center uppercase text-[1.1rem] mt-2">
                Package 1
              </div>
              <Divider className="my-4" />
              <div>Questions</div>
              <div className="my-3">
                <ul className="flex gap-2 flex-wrap mb-4">
                  <li>
                    <div className="hover:bg-secondary-color hover:text-white transition cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-md border border-primary-color">
                      1
                    </div>
                  </li>
                  <li>
                    <div className="hover:bg-secondary-color hover:text-white transition cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-md border border-primary-color">
                      2
                    </div>
                  </li>
                  <li>
                    <div className="hover:bg-secondary-color hover:text-white transition cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-md border border-primary-color">
                      3
                    </div>
                  </li>
                  <li>
                    <div className="hover:bg-secondary-color hover:text-white transition cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-md border border-primary-color">
                      4
                    </div>
                  </li>
                  <li>
                    <div className="hover:bg-secondary-color hover:text-white transition cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-md border border-primary-color">
                      5
                    </div>
                  </li>
                  <li>
                    <div className="hover:bg-secondary-color hover:text-white transition cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-md border border-primary-color">
                      6
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-between">
                <div>
                  <span className="w-[10px] h-[10px] bg-green inline-block mr-2"></span>
                  <span>Correct: </span>
                  <span>1/6</span>
                </div>
                <div>
                  <span className="w-[10px] h-[10px] bg-red-500 inline-block mr-2"></span>
                  <span>Incorrect: </span>
                  <span>2/6</span>
                </div>
              </div>
              <div className="flex justify-end mt-8">
                <Button rounded={24} type="outline" icon={<ReloadOutlined />}>
                  Restart
                </Button>
              </div>
            </div>
            <div className="paper mt-4">
              <Row gutter={[8, 8]}>
                <Col sm={16} xl={8}>
                  <div className="package w-full py-3 border hover:bg-slate-100 hover:color-primary-color cursor-pointer  border-slate-300 flex items-center justify-center rounded-xl">
                    Package 1
                  </div>
                </Col>
                <Col sm={16} xl={8}>
                  <div className="package w-full py-3 border hover:bg-slate-100 hover:color-primary-color cursor-pointer  border-slate-300 flex items-center justify-center rounded-xl">
                    Package 2
                  </div>
                </Col>
                <Col sm={16} xl={8}>
                  <div className="package w-full py-3 border hover:bg-slate-100 hover:color-primary-color cursor-pointer  border-slate-300 flex items-center justify-center rounded-xl">
                    Package 3
                  </div>
                </Col>
                <Col sm={16} xl={8}>
                  <div className="package w-full py-3 border hover:bg-slate-100 hover:color-primary-color cursor-pointer  border-slate-300 flex items-center justify-center rounded-xl">
                    Package 4
                  </div>
                </Col>
                <Col sm={16} xl={8}>
                  <div className="package w-full py-3 border hover:bg-slate-100 hover:color-primary-color cursor-pointer  border-slate-300 flex items-center justify-center rounded-xl">
                    Package 5
                  </div>
                </Col>
                <Col sm={16} xl={8}>
                  <div className="package w-full py-3 border hover:bg-slate-100 hover:color-primary-color cursor-pointer  border-slate-300 flex items-center justify-center rounded-xl">
                    Package 6
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={24} lg={16}>
            <div className="bg-white rounded border border-slate-200 p-6 ">
              <div>Package 1 - Quesiont 1</div>
              <div className="flex justify-center">
                <div className="m-w-[60%] m-h[400px]">
                  <img
                    className="img-styles"
                    src="https://storage.googleapis.com/kstoeic/images/973355_1562638439675.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex justify-center my-6">
                <audio controls src=""></audio>
              </div>
              <div className="mx-8 my-4">
                <Radio.Group
                  className="w-full"
                  onChange={onChange}
                  value={value}
                >
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} lg={6}>
                      <Radio value={1}>A</Radio>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                      <Radio value={2}>B</Radio>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                      <Radio value={3}>C</Radio>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                      <Radio value={4}>D</Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </PageFrame>
  );
};

export default PracticePage;
