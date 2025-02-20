import "./UsedStack.scss";

import UsedStackCard from "../components/UsedStackCard";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiRecoil } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNetlify } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";

function UsedStack() {
  return (
    <section className="used-stack">
      <div className="used-stack-cards">
        <UsedStackCard
          title={"HTML"}
          icon={<FaHtml5 size={26} color="#E34F26" />}
        >
          <div>• 시맨틱한 마크업 구조를 사용합니다.</div>
          <div>• 웹 표준을 지키려 노력합니다.</div>
        </UsedStackCard>
        <UsedStackCard
          title={"CSS"}
          icon={<FaCss3Alt size={26} color="#1572B6" />}
        >
          <div>• 반응형 웹 적용을 고려한 style 코드를 작성합니다. </div>
        </UsedStackCard>
        <UsedStackCard
          title={"JavaScript"}
          icon={<SiJavascript size={30} color="#F7DF1E" />}
        >
          <div>• 작동원리를 이해하고 있습니다.</div>
          <div>• ES6+ 문법에 익숙합니다.</div>
        </UsedStackCard>
        <UsedStackCard
          title={"React"}
          icon={<SiReact size={26} color="#61DAFB" />}
        >
          <div>• 효율적인 컴포넌트와 Hook을 사용하여 코드를 작성합니다.</div>
        </UsedStackCard>
        <UsedStackCard
          title={"TypeScript"}
          icon={<SiTypescript size={26} color="#3178C6" />}
        >
          <div>
            • TypeScript의 타입 시스템을 활용하여 개발하는 것을 지향합니다.
          </div>
        </UsedStackCard>
        <UsedStackCard
          title={"Context API / Recoil"}
          icon={<SiRecoil size={30} color="#3578E5" />}
        >
          <div>• 프로젝트 전역 상태 관리를 위해 사용한 경험이 있습니다.</div>
        </UsedStackCard>
        <UsedStackCard
          title={"SCSS / Styled Component"}
          icon={<SiSass size={30} color="#CC6699" />}
        >
          <div>• Styled Component, SCSS를 적용하여 스타일링을 해봤습니다.</div>
        </UsedStackCard>
        <UsedStackCard
          title={"MUI / Bootstrap"}
          icon={<SiMui size={30} color="#007FFF" />}
        >
          <div>
            • UI 라이브러리를 사용하여 빠르고 일관된 스타일링 구현을 해봤습니다.
          </div>
        </UsedStackCard>
        <UsedStackCard
          title={"React Native"}
          icon={<TbBrandReactNative size={30} color="#61DAFB" />}
        >
          <div>
            • 안드로이드와 IOS에서 호환되는 앱을 만들기 위해 사용하였습니다.
          </div>
        </UsedStackCard>
        <UsedStackCard
          title={"Netlify"}
          icon={<SiNetlify size={30} color="#00C7B7" />}
        >
          <div>• React 프로젝트를 배포해 본 경험이 있습니다.</div>
        </UsedStackCard>

        <UsedStackCard
          title={"Git"}
          icon={<SiGithub size={30} color="#F05032" />}
        >
          <div>• GitHub, GitLab을 사용하여 협업할 수 있습니다.</div>
        </UsedStackCard>
        <UsedStackCard
          title={"Figma"}
          icon={<SiFigma size={30} color="#A259FF" />}
        >
          <div>
            • 피그마로 와이어프레임 및 목업을 작성하고 디자이너와 협업할 수
            있습니다.
          </div>
        </UsedStackCard>
      </div>
    </section>
  );
}

export default UsedStack;
