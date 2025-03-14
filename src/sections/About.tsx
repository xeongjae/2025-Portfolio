import "./About.scss";

import useThemeStore from "../hooks/useThemeStore";

import UsedStackCard from "../components/UsedStackCard";
import { StackData } from "../library/UsedStackData";
import DevExperience from "../components/DevExperience";

const About: React.FC = () => {
  const { isLightMode } = useThemeStore();

  return (
    <section
      className={`used-stack ${isLightMode ? "light-mode" : "dark-mode"}`}
    >
      <div className="contents">
        <div className="text">
          <h3>
            안녕하세요!
            <br />
            프론트엔드 개발자
            <br />
            김성재입니다.
          </h3>
          <p>생각한 것을 구현하고 설명하는 것을 좋아하며,</p>
          <p>성장에 대한 두려움 없이 책임감 있게 도전하는 개발자입니다.</p>
        </div>
      </div>
      <div className="used-stack-cards">
        {StackData.map(({ title, icon, descriptions }) => (
          <UsedStackCard key={title} title={title} icon={icon}>
            {descriptions.map((desc, index) => (
              <div key={index}>{desc}</div>
            ))}
          </UsedStackCard>
        ))}
      </div>
      <DevExperience />
    </section>
  );
};

export default About;
