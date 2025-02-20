import { Children, useState } from "react";

function MichiContents({ handleButtonEnter, handleButtonLeave }) {
  const [buttonSelected, setButtonSelected] = useState(0);

  const handleButtonClick = (e) => {
    const idx = Number(e.currentTarget.dataset.index);
    setButtonSelected(idx);
  };

  const getWorkContents = () => {
    switch (buttonSelected) {
      case 0:
        return (
          <ul>
            <li>
              온라인 유저와 피드를 통해 대화를 시작하는 홈 스크린
              <ul>
                <li>REST API 요청을 활용한 피드 CRUD 기능 구현</li>
                <li>
                  웹소켓(WebSocket) 이벤트 구독을 통해 실시간 접속 유저 파악과
                  채팅방 참여
                </li>
                <li>
                  Stack Navigator와 Tab Navigator을 사용하여 화면 간의 이동을
                  관리
                </li>
                <li>
                  Recoil을 도입하여 빠르고 효율적인 전역 상태 관리 시스템 구축
                </li>
              </ul>
            </li>
          </ul>
        );

      case 1:
        return (
          <ul>
            <li>
              모바일 UI/UX 가이드를 조사하여 사용자 친화적인 애플리케이션을
              제작하도록 기여
            </li>
            <li>Github Actions를 활용하여 CI/CD(빌드 및 배포 자동화) 구축</li>
            <li>공통으로 사용되는 콘텐츠(컴포넌트, 훅)를 모듈화하여 문서화</li>
          </ul>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <div className="section infomation">
        <h2>✚ 추가 정보</h2>
        <ul>
          <li>활동명 : 스터디 팀 사이드 프로젝트</li>
          <li>인원: 백엔드 2, 프론트엔드 3, 디자인 1</li>
          <li>기여도: 프론트엔드 40%</li>
          <li>
            사용 기술: <span className="code">React Native</span>,{" "}
            <span className="code">TypeScript</span>,{" "}
            <span className="code">Recoil</span>,{" "}
            <span className="code">Xcode</span>,{" "}
            <span className="code">Figma</span>
          </li>
        </ul>
      </div>
      <div className="section service">
        <h2>💁🏻‍♀️ 서비스 내용</h2>
        <p>
          익명으로 모르는 사람과 랜덤 또는 선택하여 채팅할 수 있는 서비스입니다.
          <br />
          티니박스 프로젝트 중 사이드 프로젝트를 진행하게 되었습니다.
          <br />
          <br />
          핵심 기능은 두 가지 입니다.
          <ol>
            <li>실시간 온라인 사용자와 랜덤 매칭하여 채팅방 제공</li>
            <li>
              피드에 올라온 글 또는 온라인 사용자 정보를 통해 선택하여 채팅
            </li>
          </ol>
        </p>
      </div>
      <div className="section experience">
        <h2>✨ 성장 경험</h2>
        <h3>1. Rest API가 아닌 WebSocket을 사용한 양방향 통신 경험</h3>
        <p>
          프로젝트 초기에 접속 중인 사용자를 확인하기 위해 주기적으로 API 요청을
          보내야 했고, 이는 서버와 클라이언트 모두에 불필요한 부하를
          발생시켰습니다. WebSocket을 활용함으로써, 이러한 성능 문제를 해결하고
          접속 상태를 실시간으로 반영할 수 있었습니다.
        </p>
        <br />
        <br />
        <h3>2. 문제 상황 파악 후 효율적인 방안 제시</h3>
        <p>
          "티니박스" 프로젝트에서 공통 컴포넌트와 훅을 만들고 팀원들에게
          공유했으나, 시간이 지나면서 기존 코드를 잊고 새롭게 구현하는 일이
          잦았습니다. 이를 개선하기 위해 명세서를 작성하였습니다.
          <br />
          <br />
          명세서에는 각 컴포넌트와 훅의 기능과 사용법을 정리하여 문서화하였고,
          팀원들이 이를 통해 쉽게 재사용할 수 있도록 하였습니다. 이로 인해 반복
          코드 작성이 줄어들고, 디자인의 일관성이 유지되었습니다. 결과적으로 팀
          전체의 작업 효율성이 크게 향상되었습니다.
        </p>
      </div>
      <div className="section work">
        <h2>📑 작업 내용</h2>
        <div className="buttons flex-row">
          {Children.toArray(
            ["프론트엔드", "팀을 위한 기여"].map((str, idx) => (
              <div
                className={`button ${buttonSelected === idx ? "selected" : ""}`}
                data-index={idx}
                onMouseEnter={handleButtonEnter}
                onMouseLeave={handleButtonLeave}
                onClick={handleButtonClick}
              >
                {str}
              </div>
            ))
          )}
        </div>
        {getWorkContents()}
      </div>
    </>
  );
}

export default MichiContents;
