import "./Contact.scss";

import useThemeStore from "../hooks/useThemeStore";

import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

const Contact: React.FC = () => {
  const { isLightMode } = useThemeStore();

  return (
    <section className={`contact ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <div className="frontend-text">FrontEnd</div>
      <div className="code-text">{"</>"}</div>
      <div className="react-text">React</div>
      <div className="typescript-text">TypeScript</div>
      <div className="sub-title">Thank you for visiting!</div>

      <div className="description">
        능동적인 자세로 꾸준히 성장하는 개발자가 되고 싶습니다.
        <br />
        성장에 큰 가치를 두고 즐겁게 일하겠습니다.
      </div>
      <div className="contact-item-box">
        <div className="contact-item">
          <FaPhoneVolume /> 010 - 6207 - 0840
        </div>
        <div>
          <div className="contact-item">
            <MdEmail /> newsungjae0407@gmail.com
          </div>
        </div>
        <div>
          <a
            href="https://github.com/xeongjae"
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            <SiGithub />
            github.com / xeongjae
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
