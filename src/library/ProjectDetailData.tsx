import teenyBox from "../assets/images/project/teeny-main.webp";
import michi from "../assets/images/project/michi-main.webp";
import portfolio from "../assets/images/project/portfolio-main.webp";
import secondPortfoilo from "../assets/images/project/second-portfoilo-main.png";
import laf from "../assets/images/project/lostandfound-main.webp";
import casaVerde from "../assets/images/project/casa-main.webp";

export const ProjectDetailData = [
  {
    Number: 1,
    Feature: ["팀 프로젝트", "웹 프론트엔드", "장기 프로젝트", "반응형"],
    SubTitle: "연극 정보 공유 사이트",
    Title: "티니박스",
    Period: "24.01.01 - 24.07.26",
    About: (
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
    Stack: ["React", "SCSS", "MUI", "Context API"],
    Description: (
      <>
        KOPIS 에서 제공하는 open API의 연극 데이터를 사용하여 실시간 연극
        데이터를 사용하였습니다.
        <br />
        실시간 베스트 연극, 지역별 연극을 추천받고 검색이 가능하며 해당 연극의
        후기를 공유하고 사이트 내 커뮤니티를 통해 소통할 수 있습니다.
        <br />첫 서비스 배포 이후, 반응형 웹 및 디자인 개선을 위해 디자이너
        팀원이 합류하였습니다.
      </>
    ),
    Explain: [
      {
        description:
          "메인페이지: 인기 연극, 지역별 연극 등 다양한 카테고리 구성",
        details: [
          "KOPIS 에서 제공한 open API 데이터를 사용",
          "필터링 조건을 쿼리 파라미터로 넣어 서버측에서 필터링 된 데이터 전송",
          "전역 변수(Context API)를 통해 사용자 정보를 필요한 카테고리 컴포넌트에 활용",
        ],
      },
      {
        description: "무한 슬라이드 구현",
        details: [
          "Swiper(라이브러리) 없이 직접 설계한 로직을 통해 가벼운 무한 슬라이드 구현",
          "애니메이션과 setTimeout 함수를 활용하여 슬라이드가 끝까지 도달한 후 한 번 더 넘기면 처음으로 자연스럽게 돌아가는 효과 구현",
          "이후 반응형 전환 과정에서 로직이 복잡해지는 문제가 있었으나, 이를 해결하며 기능 구현 역량을 향상시킬 수 있었음",
        ],
      },
      {
        description: "검색 모달을 활용한 연극 및 게시물 검색 기능 구현",
        details: [
          "검색어를 URL의 쿼리 파라미터로 변환하여 검색 결과 페이지로 이동",
          "Local Storage를 활용하여 최근 검색어 목록을 저장 및 관리",
          "입력한 검색어가 최근 검색어 목록에 존재할 경우, 기존 항목을 제거 후 최상단으로 갱신",
        ],
      },
      {
        description:
          "마이페이지: 프로필 사진 등록, 내 정보 관리, 나의 활동(댓글, 게시글, 찜) 조회 및 관리",
        details: [
          "사용자의 댓글, 게시글, 찜한 목록을 한눈에 확인할 수 있는 UI 제공",
          "내 정보 변경 시 전역 변수(Context API)로 관리하는 유저 데이터도 최신화",
          "Presigned URL을 활용한 이미지 저장 로직을 채택하여 보안적으로 안전한 객체 업로드",
        ],
      },
      {
        description: "관리자 페이지: 유저, 댓글, 게시글 조회 및 삭제 기능 구현",
        details: [
          "날짜, 유저 닉네임 등을 기준으로 정렬이 가능한 페이지네이션 테이블 제공",
          "쿼리 파라미터를 활용하여 특정 댓글 또는 게시글로 이동할 수 있도록 네비게이션 기능 추가",
          "REST API 요청을 통해 선택한 댓글 및 게시글 삭제 기능 구현",
        ],
      },
      {
        description: "사이트 Header 및 Footer 기능 구현",
        details: [
          "사용자 역할(Role)에 따라 마이페이지, 관리자 페이지 등 맞춤형 메뉴 렌더링",
          "Clipboard API를 활용한 현재 페이지 URL 복사 기능 제공",
          "사용자 피드백 수집을 위한 Google Form 설문조사 링크 추가",
        ],
      },
    ],
    Problem: [
      {
        title: "REST API 요청 최적화",
        contents: [
          "페이지 렌더링 시 발생한 로딩 시간 지연 문제를 해결했습니다.",
          "기존에는 모든 데이터를 요청 후 프론트엔드에서 필터링하는 방식이었으나, 파라미터를 활용해 서버에서 필터링된 데이터만 받아오도록 변경했습니다. 또한, 커스텀 훅을 사용해 REST API 요청을 병렬화하여 각 컴포넌트에서 여러 번 요청하던 로직을 수정했습니다.",
          "그 결과 불필요한 데이터 전송을 줄여 응답 시간이 7.89초에서 0.62초로 99% 단축되었으며, 페이지 로딩 속도가 크게 향상되었습니다.",
        ],
      },
    ],
    path: "/project-detail/1",
  },

  {
    Number: 2,
    Feature: ["팀 프로젝트", "앱 프론트엔드", "사이드"],
    SubTitle: "랜덤 채팅 앱",
    Title: "Michi",
    Period: "24.04.24 - 24.08.20",
    About: (
      <>
        랜덤 또는 선택하여 채팅할 수 있는 서비스입니다. <br />
        티니박스 프로젝트 중 사이드 프로젝트로 진행하였습니다.
      </>
    ),
    URL: "https://github.com/xeongjae/2025-Portfolio",
    ImageSrc: michi,
    Type: "개인 프로젝트 ( 1인 )",
    Member: "프론트엔드 3명, 백엔드 3명, 웹 디자이너 1명",
    Stack: ["React Native", "TypeScript", "Recoil", "WebSocket", "Xcode"],
    Description: (
      <>
        이전 프로젝트(LAF)에서 폴링 방식 채팅의 한계를 경험한 후, <br />
        웹소켓 기반의 실시간 채팅을 구현해보고 싶다는 생각에서 시작한
        프로젝트입니다.
        <br />
        실시간 온라인 사용자와 랜덤 매칭하여 채팅방 제공하며, <br />
        피드에 올라온 글 또는 온라인 사용자 정보를 통해 원하는 상대를 선택하여
        채팅할 수 있습니다.
      </>
    ),
    Explain: [
      {
        description: "웹소켓(WebSocket)을 활용한 기능",
        details: [
          "이벤트 구독을 통해 실시간 접속 중인 유저 목록을 확인하여 프로필 사진에 '접속 중' 상태 표시",
          "피드 모달에서 '채팅하기' 버튼 클릭 시 이벤트 구독을 통해 채팅방 참여",
        ],
      },
      {
        description: "REST API 요청을 활용한 기능",
        details: [
          "REST API 요청을 활용한 피드 CRUD 기능 구현",
          "전체 피드 중 로그인 시 전역 변수(Recoil)에 저장된 내 정보를 활용하여 내가 올린 피드 구분",
        ],
      },
      {
        description: "기타 기능 및 기여",
        details: [
          "Stack Navigator와 Tab Navigator를 사용하여 하단 네비게이션 바를 통한 화면 간 이동 구현",
          "모바일 UI/UX 가이드를 조사하여 사용자 친화적인 애플리케이션 제작에 기여",
          "공통으로 사용되는 콘텐츠(컴포넌트, 훅)를 모듈화하고 문서화",
        ],
      },
    ],
    path: "/project-detail/2",
  },

  {
    Number: 3,
    Feature: ["개인 프로젝트", "웹 사이트", "반응형"],
    SubTitle: "개인 포트폴리오",
    Title: "포트폴리오",
    Period: "25.02.20 -",
    About: (
      <>
        새로운 디자인으로 리뉴얼한 포트폴리오 페이지입니다.
        <br />
        사용자들에게 편안하게 탐색할 수 있는 환경을 제공하면서도
        <br />
        인터랙티브한 요소를 넣어 웹사이트의 완성도를 높이고자 했습니다.
      </>
    ),
    URL: "https://github.com/xeongjae/2025-Portfolio",
    ImageSrc: secondPortfoilo,
    Type: "개인 프로젝트 ( 1인 )",
    Member: "",
    Stack: ["React", "TypeScript", "Zustand", "SCSS", "Netlify"],
    Description: (
      <>
        React 와 Typescript를 활용하였습니다.
        <br />
        개인 프로젝트이지만, 재사용성과 코드 가독성을 고려하였습니다.
        <br />
        여러 전역 상태 관리 라이브러리를 비교한 결과, <br />
        Zustand가 가장 적절하다고 판단하였습니다.
      </>
    ),
    Explain: [
      {
        description: "다크모드/라이트모드 구현",
        details: [
          "전역변수(Zustand)를 활용하여 현재 모드를 관리하는 방식",
          "커스텀 훅을 활용해 스위치 버튼을 구현",
        ],
      },
      {
        description: "다양한 기능의 네비게이션바 구현",
        details: [
          "scrollIntoView 메서드를 활용해 클릭 시 해당 위치로 스크롤 구현",
          "스크롤 방향에 따라 네비게이션 바를 동적으로 제어하여 포트폴리오 콘텐츠의 가시성을 개선",
        ],
      },
      {
        description: "컴포넌트와 데이터 파일을 통한 포트폴리오 콘텐츠",
        details: [
          "props로 데이터 값을 넘겨주며 일관된 디자인 유지",
          "확장성과 유지보수를 고려하여 콘텐츠를 쉽게 추가할 수 있도록 설계",
        ],
      },
    ],
    Problem: [
      {
        title: "초기 렌더링 시 화면 깜빡임(Flickering) 현상 발생",
        contents: [
          "전역변수(Zustand)를 활용한 다크모드/라이트모드 전환 기능 구현 중, 초기 렌더링 시 화면 깜빡임(Flickering) 현상이 발생하는 문제를 발견했습니다.",
          "LCP(First Contentful Paint) 지연이 영향을 미칠 가능성을 고려하여 최적화를 진행했하였고, Zustand의 상태 반영 시점과 스타일 적용 방식이 원인일 수 있다고 판단하여 관련 코드를 분석했지만, 여전히 깜빡임 현상이 발생하였습니다.",
          "추측과 달리, 실제 문제의 원인은 컬러 모드 변경을 위해 적용한 트랜지션이 초기 렌더링 시에도 실행되고 있었던 것이었습니다. 관련 코드를 수정하여 문제를 해결하였습니다.",
        ],
      },
      {
        title: "메인 페이지의 이미지 렌더링 성능 저하",
        contents: [
          "프로젝트 카테고리의 이미지 로딩 속도가 느려 사용자 경험이 저하되는 문제가 발생했습니다.",
          "기존 png 형식의 이미지 파일을 webp로 변환하여 사용하고 public 폴더 대신 assets 폴더를 활용하였습니다.",
          "WebP로 변경 후 파일 크기가 작아져 이미지 로딩 속도가 향상되었고, Public 폴더는 번들링되지 않기 때문에 assets 폴더를 사용하면 Webpack이 번들링하여 캐싱을 활용한다는점을 알게 되었습니다.",
        ],
      },
    ],
    path: "/project-detail/3",
  },
  {
    Number: 4,
    Feature: ["개인 프로젝트", "웹 사이트", "반응형"],
    SubTitle: "개인 포트폴리오",
    Title: "포트폴리오",
    Period: "24.10.20 - 24.11.05",
    About: (
      <>
        포트폴리오 용도로 제작한 웹사이트입니다.
        <br />
        다양한 애니메이션과 라이브러리를 사용하였습니다.
      </>
    ),
    URL: "https://github.com/xeongjae/Portfolio",
    ImageSrc: portfolio,
    Type: "개인 프로젝트 ( 1인 )",
    Member: "",
    Stack: ["React", "SCSS", "GSAP", "Netlify"],
    Description: (
      <>
        React를 활용하였고 Netlify를 통해 배포하였습니다.
        <br />
        개인 프로젝트이지만, 재사용성과 코드 가독성을 고려하였습니다.
        <br />
      </>
    ),
    Explain: [
      {
        description: "다양한 애니메이션과 라이브러리 활용",
        details: [
          "GSAP 라이브러리를 활용하여 구름이 흩어지는 효과를 구현하고, 동적인 분위기를 연출",
          "Typed.js와 Intersection Observer를 사용하여 해당 섹션이 나타날 때 타이핑 애니메이션이 등장하도록 구현",
        ],
      },
      {
        description: "다양한 기능의 네비게이션 바 구현",
        details: [
          "`scrollIntoView` 메서드를 활용하여 클릭 시 해당 위치로 스크롤 이동",
          "스크롤 방향에 따라 네비게이션 바를 동적으로 제어하여 포트폴리오 콘텐츠의 가시성을 개선",
          "현재 위치한 섹션이 헤더 메뉴에서 강조 표시되도록 구현",
        ],
      },
      {
        description: "반응형 웹 디자인",
        details: [
          "화면 크기에 따라 `grid` 속성을 조정하여 적절한 레이아웃 제공",
          "중복되는 코드는 컴포넌트화하고, `props`로 데이터를 전달하여 가독성을 높이고 일관된 디자인 유지",
        ],
      },
    ],
    path: "/project-detail/4",
  },
  {
    Number: 5,
    Feature: ["팀 프로젝트", "웹 프론트엔드", "리드 경험"],
    SubTitle: "분실물 검색 및 회수 서비스",
    Title: "LAF",
    Period: "23.11.13 - 23.12.02",
    About: (
      <>
        분실물을 공유하고 주인과 매칭을 도와주는 서비스입니다.
        <br />
        주요 기능은 다음 세 가지입니다. <br />
        공공 API를 활용한 분실물 안내, 게시판 형식의 커뮤니티, 1:1 채팅 서비스
      </>
    ),
    URL: "https://github.com/elice-team10/Frontend",
    ImageSrc: laf,
    Type: "팀 프로젝트",
    Member: "프론트엔드 4명, 백엔드 2명",
    Stack: ["React", "Styled-components", "MUI", "axios", "React-Query"],
    Description: (
      <>
        잃어버린 사람과 주운 사람의 매칭을 위해 "당근마켓"의 채팅 기능을
        벤치마킹했습니다. 하지만 WebSocket의 기술적 부담이 있어 대체 방법이
        필요했습니다. React-Query의 폴링(polling) 방식을 도입하여 채팅 기능을
        구현했고, 데이터의 신선도와 캐시 관리를 통해 불필요한 네트워크 요청을
        최소화했습니다. 적절한 난이도로 2주 안에 서비스 목적을 달성하는 MVP를
        완성할 수 있었습니다.
      </>
    ),
    Explain: [
      {
        description: "채팅기능 구현",
        details: [
          "-  React-Query를 사용하여 데이터를 polling하는 채팅기능 구현",
          "-  staleTime, cacheTime으로 데이터 신선도와 캐시 관리",
        ],
      },
      {
        description: "관리자 페이지",
        details: [
          "- REST API 요청을 통해 회원, 게시글, 댓글 조회 및 삭제",
          "- MUI(UI 라이브러리)의 Data Table을 커스텀하여 사용",
        ],
      },
    ],
    path: "/project-detail/5",
  },
  {
    Number: 6,
    Feature: ["팀 프로젝트", "웹 프론트엔드"],
    SubTitle: "반려 식물 및 도구 쇼핑몰",
    Title: "Casa Verde",
    Period: "23.09.25 - 23.10.13",
    About: (
      <>
        반려 식물 및 가드닝 도구를 판매하는 쇼핑몰 서비스입니다. <br />
        누구나 집에서도 손쉽게 식물을 심고 <br />
        가꿀 수 있으면 좋겠다고 생각하여 기획하게 되었습니다.
      </>
    ),
    URL: "https://github.com/xeongjae/Backend",
    ImageSrc: casaVerde,
    Type: "팀 프로젝트",
    Member: "프론트엔드 3명, 백엔드 3명",
    Stack: ["HTML", "CSS", "JavaScript"],
    Description: (
      <>
        전반적인 서비스 기획을 맡았습니다.
        <br /> 페르소나를 선정을 통해 요구를 분석하고 <br />
        유사 서비스를 참고하여 구체적인 구현 기능을 설정했습니다. <br />
        개발 프로세스를 이해하고, 서비스 기획의 중요성을 깨달았습니다.
      </>
    ),
    Explain: [
      {
        description: "회원가입 시 이메일을 ID로 사용",
        details: [
          "-  정규 표현식을 활용한 이메일 유효성 검증",
          "-  REST API 요청을 통한 ID 중복검사",
        ],
      },
      {
        description: "간편한 주소 입력",
        details: [
          "- 카카오 맵 api 도입",
          "- 사용자에게 신뢰할 수 있는 배송지 정보를 수집",
        ],
      },
      {
        description: "JWT (JSON Web Token) 발급을 통한 로그인 관리",
        details: [
          "- 서버에 로그인 요청 시 JWT를 발급",
          "- 클라이언트(sessionStorage)에 JWT 저장",
          "- 이후 API 요청 시 JWT 검증",
        ],
      },
      {
        description: "상품 결제 기능",
        details: [
          "- 장바구니 리스트 중 선택적으로 구매 가능",
          "- 결제 후 가입한 이메일로 구매 내역 메일 전송",
        ],
      },
    ],
    path: "/project-detail/6",
  },
];
