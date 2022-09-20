import NavTab from "../../components/NavTab";
import logoUrl from "../../assets/images/logos/logo-full.png";
import { Link } from "react-router-dom";

type PropsType = {
  isLogined?: boolean;
};

const Header = ({ isLogined = false }: PropsType) => {
  return (
    <header id="header" className=" bg-main shadow sticky top-0 z-50">
      <div className="container">
        <div className="header-wrapper flex h-[70px]  items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img className="max-h-[60px]" src={logoUrl} alt="" />
            </Link>
          </div>
          <div className="nav h-full">
            <ul className="nav-list flex h-full">
              <NavTab
                dropDown={[
                  { href: "/training/listening/1", title: "Photographs" },
                  {
                    href: "/training/listening/2",
                    title: "Question - Response",
                  },
                  {
                    href: "/training/listening/3",
                    title: "Short Conversations",
                  },
                  { href: "/training/listening/4", title: "Short Talks" },
                  {
                    href: "/training/reading/5",
                    title: "Incomplete Sentences",
                  },
                  {
                    href: "/training/reading/6",
                    title: "Text Completion",
                  },
                  {
                    href: "/training/reading/part-7",
                    title: "Reading Comprehension",
                  },
                ]}
                to="/training"
              >
                Traning
              </NavTab>
              <NavTab
                dropDown={[
                  { href: "/mock-test/mini", title: "Mini Test" },
                  {
                    href: "/mock-test/full",
                    title: "Full Test",
                  },
                ]}
                to="/mock-test"
              >
                Mock Test
              </NavTab>
              <NavTab to="/toiec-tips">Toiec Tips</NavTab>
              <NavTab to="/vocabulary">Vocabulary</NavTab>
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
