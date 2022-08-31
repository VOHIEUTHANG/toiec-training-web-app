import React from "react";
import { useNavigate } from "react-router-dom";

type PropsType = {
  icon?: React.ElementType;
  to: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
};

const NavTab = ({ icon: Icon, to, children, onClick }: PropsType) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        onClick && onClick(e);
        navigate(to);
      }}
      className="px-4 py-2 flex items-center"
    >
      <span className="mr-1">{children}</span>
      {Icon && <Icon />}
    </button>
  );
};

export default NavTab;
