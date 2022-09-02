import React from "react";
import { Button as ButtonAntd } from "antd";

type PropsType = {
  children: string;
  icon?: React.ReactNode;
  size?: "lg" | "md" | "sm";
  href?: string;
  background?: string;
  type?: "primary" | "link" | "text" | "outline" | "dashed ";
  disabled?: boolean;
  loading?: boolean;
  rounded?: number;
  htmlType?: "submit";
  block?: boolean;
};

const Button = (props: PropsType) => {
  const { children, ...excludeChildrenProp } = props;
  const expectProps: { [key: string]: any } = {};
  const styles: { [key: string]: any } = {};

  for (let key in excludeChildrenProp) {
    const value = excludeChildrenProp[key as keyof typeof excludeChildrenProp];
    switch (key) {
      case "size":
        expectProps.size =
          value === "lg" ? "large" : value === "md" ? "middle" : "small";
        break;
      case "type":
        expectProps.type = value === "outline" ? "ghost" : value;
        break;
      case "background":
        styles.backgroundColor = value;
        break;
      case "rounded":
        styles.boderRadius = `${value}px`;
        break;
      default:
        expectProps[key] = value;
    }
  }

  return (
    <ButtonAntd className="my-btn" {...expectProps} style={styles}>
      {children}
    </ButtonAntd>
  );
};

export default Button;
