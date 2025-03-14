import teenyBox from "../assets/images/project/teeny-main.webp";
import michi from "../assets/images/project/michi-main.webp";
import portfolio from "../assets/images/project/portfolio-main.webp";
import secondPortfoilo from "../assets/images/project/second-portfoilo-main.png";
import laf from "../assets/images/project/lostandfound-main.webp";
import casaVerde from "../assets/images/project/casa-main.webp";

export const ProjectDetailData = [
  {
    Number: 1,
    Feature: ["팀 프로젝트", "장기", "반응형"],
    SubTitle: "연극 정보 공유 사이트",
    Title: "티니박스",
    Period: "24.01.01 - 24.07.26",
    Description: (
      <>
        연극을 찾고 홍보할 수 있는 연극 정보 사이트입니다. <br />
        디자이너와 협업하며 해당 직군과의 업무 이해도를 높일 수 있었습니다.
        <br /> 실제 서비스화를 목표로 진행하였습니다
      </>
    ),
    URL: "https://github.com/teeny-box/teenybox-frontend",
    ImageSrc: teenyBox,
    Type: "팀 프로젝트",
    Member: "프론트엔드 3명, 백엔드 3명, 웹 디자이너 1명",
    Stack: ["React", "SCSS", "MUI", "Context API", "반응형"],
    explain: [
      {
        description: "Axios 및 Axios Instance를 활용한 코드 가독성 향상",
        details: ["- Axios baseURL을 활용하여 불필요 코드 제거"],
      },
      {
        description: "Zustand의 전역변수를 활용한 최근검색어, 즐겨찾기 기능",
        details: [
          "- persist를 활용한 로컬스토리지 저장",
          "- 검색 시 Axios 요청으로 해당 캐릭터 데이터 값 저장",
        ],
      },
      {
        description: "React-Query를 이용한 데이터 요청 최소화",
        details: [
          "- 데이터 캐싱의 강점을 이용하여 반복적인 데이터 요청 최소화",
          "- 같은 요청 반복 시 gcTime 및 staleTime을 이용하여 데이터 캐싱",
        ],
      },
      {
        description: "useState를 활용한 공지사항 필터링기능",
        details: ["- slice 함수와 reduce를 활용하여 10개씩 타입 분류"],
      },
      {
        description: "ShadCN 라이브러리를 활용한 사용자 경험 개선",
        details: ["- DarkMode 구현", "- 데이터 로딩 시 Skeleton UI 작업"],
      },
      {
        description: "다른사람에게 쉽게 공유할 수 있는 URL 복사 기능",
        details: [
          "- ToastUI를 활용한 정보 제공",
          "- clipboard를 활용한 현재 복사",
        ],
      },
    ],
    Problem: [
      {
        title: "페이지 리렌더링마다 데이터 무한 요청",
        contents: [
          "useEffect를 활용하여 데이터 요청시, 페이지가 리렌더링 될 때마다 데이터 요청이 되고 있음을 확인하였습니다.",
          "React-Query를 이용하여 데이터 캐싱처리를 해주면 된다는 것을 확인하였습니다. 시간을 정해두면 해당 데이터를 받아온 후 정해진 시간동안 재요청시 다시 데이터를 받아오지 않는다.",
          "데이터의 캐싱처리를 해줄 시 사이트의 최적화와 API 요청을 최소화할 수 있다는 점을 알았습니다.",
        ],
      },
    ],
    logo: "/Logo-Teenybox.png",
    path: "/project-detail/1",
  },
  {
    Number: 2,
    Name: "TeenyBox",
    Type: "개인",
    Title: "[Michi] 랜덤 채팅 앱",
    SubTitle: "",
    Period: "2024년 4월 24일 ~ 2024년 8월 20일",
    Description: (
      <>
        랜덤 또는 선택하여 채팅할 수 있는 서비스입니다. <br />
        티니박스 프로젝트 중 사이드 프로젝트로 진행하였습니다.
      </>
    ),
    URL: "https://github.com/teeny-box/teenybox-frontend",
    ImageSrc: michi,
    Tag: ["Xcode", "React Native", "Recoil", "TypeScript", "WebSocket"],
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
    Period: "2025년 10월 20일 ~ 2025년 11월 5일",
    Description: (
      <>
        새롭고 세련된 디자인으로 리뉴얼한 포트폴리오입니다. <br />
        컴포넌트 재사용성과 사용자 인터페이스를 개선했습니다.
      </>
    ),
    URL: "https://github.com/teeny-box/teenybox-frontend",
    ImageSrc: secondPortfoilo,
    Tag: ["React", "SCSS", "GSAP", "반응형", "Netlify"],
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
    Period: "2024년 10월 20일 ~ 2024년 11월 5일",
    Description: (
      <>
        디자인, 기능, 배포까지 직접 작업한 포트폴리오입니다 <br />
        다양한 애니메이션과 라이브러리를 활용하였습니다.
      </>
    ),
    URL: "https://github.com/teeny-box/teenybox-frontend",
    ImageSrc: portfolio,
    Tag: ["React", "SCSS", "GSAP", "반응형", "Netlify"],
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
    Period: "2023년 11월 13일 ~ 2023년 12월 02일",
    Description: (
      <>
        분실물을 공유하고 주인과 매칭을 도와주는 서비스입니다.
        <br /> 프로젝트 팀 리드 및 추가 채팅기능 구현을 담당했습니다.
      </>
    ),
    URL: "https://github.com/teeny-box/teenybox-frontend",
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
    Period: "2023년 9월 25일 ~ 2023년 10월 13일",
    Description: (
      <>
        반려 식물 및 가드닝 도구를 판매하는 쇼핑몰 서비스입니다. <br />{" "}
        회원가입, 로그인, 주문 관련 기능을 담당했습니다.
      </>
    ),
    URL: "https://github.com/teeny-box/teenybox-frontend",
    ImageSrc: casaVerde,
    Tag: ["HTML", "CSS", "JavaScript"],
    Feature: ["팀 프로젝트", "기획", "엘리스"],
    logo: "/Logo-Casaverde.png",
    path: "/project-detail/6",
  },
];
