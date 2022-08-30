import React from "react";
import { Layout } from "antd";
const { Header: HeaderLayout } = Layout;

const Header = () => {
  return (
    <HeaderLayout>
      <h1 className="text-3xl font-bold underline">Devo stack</h1>
    </HeaderLayout>
  );
};

export default Header;
