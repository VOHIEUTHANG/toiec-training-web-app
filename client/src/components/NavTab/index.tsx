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
      className="px-4 py-2 flex items-center transition border-b-2 border-transparent hover:border-primary-color hover:text-primary-color"
    >
      <span className="uppercase text-md tracking-wide">{children}</span>
      {Icon && <Icon size="1.3rem" />}
    </button>
  );
};

export default NavTab;
