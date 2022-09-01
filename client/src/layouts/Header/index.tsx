import NavTab from "../../components/NavTab";
import logoUrl from "../../assets/images/logos/logo-full.png";
import { Link } from "react-router-dom";

type PropsType = {
  isLogined?: boolean;
};

const Header = ({ isLogined = false }: PropsType) => {
  return (
    <header id="header" className=" bg-main shadow sticky top-0">
      <div className="container">
        <div className="header-wrapper flex h-[70px]  items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img className="max-h-[60px]" src={logoUrl} alt="" />
            </Link>
          </div>
          <div className="nav h-full">
            <ul className="nav-list flex h-full">
              <NavTab to="/training">Traning</NavTab>
              <NavTab to="/mock-test">Mock Test</NavTab>
              <NavTab to="/toiec-tips">Toiec Tips</NavTab>
              <NavTab to="/documents">Documents</NavTab>
            </ul>
          </div>
          <div className="user">
            {isLogined ? (
              <div>Login</div>
            ) : (
              <div>
                <Link
                  className="hover:underline uppercase hover:text-primary-color"
                  to="/user/login"
                >
                  Login
                </Link>
                <span> / </span>
                <Link
                  className="hover:underline uppercase hover:text-primary-color"
                  to="/user/register"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
