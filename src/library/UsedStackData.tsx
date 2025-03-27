import React, { ReactNode } from "react";
import {
  SiJavascript,
  SiReact,
  SiTypescript,
  SiSass,
  SiRecoil,
  SiNetlify,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

interface StackItem {
  title: string;
  icon: ReactNode;
  descriptions: string[];
}

export const StackData: StackItem[] = [
  {
    title: "React",
    icon: <SiReact size={26} color="#61DAFB" />,
    descriptions: [
      "합리적인 방식으로 컴포넌트를 분리하여 컴포넌트의 재사용성을 높입니다.",
      "라이프 사이클을 이해하며 사용하고, 성능 최적화를 고민합니다.",
    ],
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size={30} color="#F7DF1E" />,
    descriptions: [
      "실행 컨텍스트, 스코프, 클로저, 호출 스택과 이벤트 루프의 동작 원리를 이해하여 사용합니다.",
      "적절한 함수 분리를 통해 코드의 가독성을 높이고 유지보수성을 향상시킵니다.",
    ],
  },
  {
    title: "TypeScript",
    icon: <SiTypescript size={26} color="#3178C6" />,
    descriptions: [
      "TypeScript의 타입 시스템을 활용하여 개발하는 것을 지향합니다.",
      "React + TypeScript 환경을 구축하여 프로젝트를 완성해보았습니다.",
    ],
  },
  {
    title: "React Native",
    icon: <TbBrandReactNative size={30} color="#61bAFb" />,
    descriptions: [
      "안드로이드와 iOS에서 호환되는 앱을 만들기 위해 사용하였습니다.",
      "리액트 네이티브 프로젝트 내에서 리액트 문법을 자유롭게 사용할 수 있습니다.",
    ],
  },
  {
    title: "Context API / Recoil",
    icon: <SiRecoil size={30} color="#3578E5" />,
    descriptions: [
      "프로젝트 전역 상태 관리를 위해 사용한 경험이 있습니다.",
      "필요에 따라 전역 변수를 도입하며, 각 전역 변수 도구의 장단점을 잘 이해하고 있습니다.",
    ],
  },
  {
    title: "SCSS / Styled Component",
    icon: <SiSass size={30} color="#CC6699" />,
    descriptions: [
      "Styled Component, SCSS를 적용하여 스타일링을 해봤습니다.",
      "반응형 웹 디자인을 할 수 있습니다.",
    ],
  },
  {
    title: "Git",
    icon: <SiGithub size={30} color="#F05032" />,
    descriptions: [
      "GitHub, GitLab을 사용하여 협업할 수 있습니다.",
      "컨벤션을 준수하고 코드 리뷰를 습관화합니다.",
    ],
  },
  {
    title: "Figma",
    icon: <SiFigma size={30} color="#A259FF" />,
    descriptions: [
      "와이어프레임 및 목업을 작성할 수 있습니다.",
      "프로젝트 기획 단계부터 피드백 반영까지, 피그마를 통해 디자이너 팀원과 긴밀히 협업한 경험이 있습니다.",
    ],
  },
  {
    title: "Netlify",
    icon: <SiNetlify size={30} color="#00C7B7" />,
    descriptions: ["개인 프로젝트를 배포해 본 경험이 있습니다."],
  },
];
