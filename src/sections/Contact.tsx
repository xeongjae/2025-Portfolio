import "./Contact.scss";

import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

import cloud1 from '../assets/images/cloud/cloud_1.webp'
import cloud2 from '../assets/images/cloud/cloud_2.webp'
import cloud3 from '../assets/images/cloud/cloud_3.webp'
import cloud6 from '../assets/images/cloud/cloud_6.webp'

const Contact = () => {
  return (
    <div className="contact">
      <div className="sub-title">Thank you for visiting!</div>
      <div className="description">
        수용적이고 능동적인 자세로 꾸준히 성장하는 개발자가 되고 싶습니다.
        <br />
        성장에 큰 가치를 두고 즐겁게 개발하겠습니다.
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
            href={"https://github.com/xeongjae"}
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            <SiGithub />
            Github
          </a>
        </div>
        <img src={cloud1} className="left-cloud" alt="cloud1" />
        <img src={cloud6} className="right-cloud" alt="cloud4" />
        <img src={cloud3} className="top-cloud" alt="cloud3" />
        <img src={cloud2} className="bottom-cloud" alt="cloud2" />
      </div>
    </div>
  );
};

export default Contact;
