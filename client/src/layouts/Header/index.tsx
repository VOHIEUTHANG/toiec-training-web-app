import NavTab from "../../components/NavTab";
import { DownOutlined } from "@ant-design/icons";
// import logoUrl from "../../assets/images/logos/logo-full.png";

const Header = () => {
  return (
    <header
      id="header"
      className="h-[70px] flex items-center justify-between bg-main shadow sticky top-0"
    >
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <img src="" alt="" />
          </div>
          <div className="nav">
            <ul className="nav-list flex">
              <NavTab to="/">Home</NavTab>
              <NavTab to="/training" icon={DownOutlined}>
                Traning
              </NavTab>
              <NavTab to="/test-exam" icon={DownOutlined}>
                Đề thi thử
              </NavTab>
              <NavTab to="/toiec-tips">Toiec Tip</NavTab>
            </ul>
          </div>
          <div className="user"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
