import teenyBox from "../assets/images/project/teeny-main.webp";
import michi from "../assets/images/project/michi-main.webp";
import portfolio from "../assets/images/project/portfolio-main.webp";
import secondPortfoilo from "../assets/images/project/second-portfoilo-main.png";
import laf from "../assets/images/project/lostandfound-main.webp";
import casaVerde from "../assets/images/project/casa-main.webp";

export const ListChart = [
  {
    Number: 1,
    Name: "티니박스",
    Type: "개인",
    Title: "[TeenyBox] 연극 정보 공유 웹사이트",
    SubTitle: "연극 정보 공유 사이트",
    Description: (
      <>
        연극을 찾고 홍보할 수 있는 연극 정보 사이트입니다. <br />
        실제 서비스화를 목표로 진행하였습니다.
      </>
    ),
    DetailDescription: (
      <>
        연극을 찾고 홍보할 수 있는 연극 정보 사이트입니다. <br />
        실제 서비스화를 목표로 진행하였습니다.
      </>
    ),
    ImageSrc: teenyBox,
    Tag: ["React", "SCSS", "MUI", "Context API"],
    Feature: ["팀 프로젝트", "장기", "반응형"],
    logo: "/Logo-Teenybox.png",
    path: "/project-detail/1",
  },
  {
    Number: 2,
    Name: "TeenyBox",
    Type: "개인",
    Title: "[Michi] 랜덤 채팅 앱",
    SubTitle: "",
    Description: (
      <>
        랜덤 또는 선택하여 채팅할 수 있는 서비스입니다. <br />
        티니박스 프로젝트 중 사이드 프로젝트로 진행하였습니다.
      </>
    ),
    ImageSrc: michi,
    Tag: ["React Native", "TypeScript", "Recoil", "WebSocket", "Xcode"],
    Feature: ["팀 프로젝트", "모바일", "사이드"],
    logo: "/Logo-Michi.png",
    path: "/project-detail/2",
  },
  {
    Number: 3,
    Name: "TeenyBox",
    Type: "개인",
    Title: `[Portfolio] 2025 리뉴얼 포트폴리오`,
    SubTitle: "",
    Description: (
      <>
        새롭고 세련된 디자인으로 리뉴얼한 포트폴리오입니다. <br />
        컴포넌트 재사용성과 사용자 인터페이스를 개선했습니다.
      </>
    ),
    ImageSrc: secondPortfoilo,
    Tag: ["React", "TypeScript", "Zustand", "SCSS", "Netlify"],
    Feature: ["개인 프로젝트", "배포", "반응형"],
    logo: "/cloud_2.webp",
    path: "/project-detail/3",
  },
  {
    Number: 4,
    Name: "TeenyBox",
    Type: "부캠",
    Title: `[Portfolio] 2024 포트폴리오 사이트`,
    SubTitle: "",
    Description: (
      <>
        디자인, 기능, 배포까지 직접 작업한 포트폴리오입니다 <br />
        다양한 애니메이션과 라이브러리를 활용하였습니다.
      </>
    ),
    ImageSrc: portfolio,
    Tag: ["React", "SCSS", "GSAP", "Netlify"],
    Feature: ["개인 프로젝트", "배포", "반응형"],
    logo: "/cloud_2.webp",
    path: "/project-detail/4",
  },
  {
    Number: 5,
    Name: "TeenyBox",
    Type: "부캠",
    Title: "[LAF] 분실물 검색 및 회수 서비스",
    SubTitle: "",
    Description: (
      <>
        분실물을 공유하고 주인과 매칭을 도와주는 서비스입니다.
        <br /> 프로젝트 팀 리드 및 추가 채팅기능 구현을 담당했습니다.
      </>
    ),
    ImageSrc: laf,
    Tag: ["React", "Styled-components", "MUI", "axios", "React-Query"],
    Feature: ["팀 프로젝트", "리드", "엘리스"],
    logo: "/Logo-LAF.png",
    path: "/project-detail/5",
  },
  {
    Number: 6,
    Name: "TeenyBox",
    Type: "부캠",
    Title: "[Casa Verde] 반려 식물 및 도구 쇼핑몰",
    SubTitle: "",
    Description: (
      <>
        반려 식물 및 가드닝 도구를 판매하는 쇼핑몰 서비스입니다. <br />{" "}
        회원가입, 로그인, 주문 관련 기능을 담당했습니다.
      </>
    ),
    ImageSrc: casaVerde,
    Tag: ["HTML", "CSS", "JavaScript"],
    Feature: ["팀 프로젝트", "기획", "엘리스"],
    logo: "/Logo-Casaverde.png",
    path: "/project-detail/6",
  },
];
