import { Layout } from "antd";
import logoSrc from "../../assets/images/logos/logo.png";
import { Link } from "react-router-dom";
const { Footer: FooterLayout } = Layout;

const Footer = () => {
  return (
    <FooterLayout>
      <div className="container">
        <div className="grid grid-cols-2 gap-2">
          <div className="col"></div>
          <div className="col">
            <div className="flex justify-end">
              <Link to="/">
                <img width="50px" src={logoSrc} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FooterLayout>
  );
};

export default Footer;
