import { Children, useState } from "react";

function LAFContents() {
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
              관리자페이지, 채팅방, 채팅목록
              <ul>
                <li>REST API 활용하여 회원, 게시글, 댓글 조회 및 삭제</li>
                <li>
                  React-Query를 사용하여 데이터를 polling하는 채팅기능 구현
                </li>
                <li>staleTime, cacheTime으로 데이터 신선도와 캐시 관리</li>
              </ul>
            </li>
          </ul>
        );

      case 1:
        return (
          <ul>
            <li>
              프로젝트 도중 아무도 구현해본 적 없는 채팅기능이 필요할 때,
              자발적으로 기능 구현을 담당
            </li>
            <li>
              애자일 방법론(스크럼)을 적용하여 3주 안에 성공적으로 프로젝트 완성
              <ul>
                <li>
                  데일리 스크럼 회의를 통해 빠르게 진행 상황을 파악하고,
                  팀원들의 작업량 적절히 분배
                </li>
                <li>
                  스프린트를 작성하고 체계적으로 진행하여 프론트엔드 마감일 2일
                  단축
                </li>
              </ul>
            </li>
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
          <li>활동명 : 엘리스 SW 6기 2차 프로젝트</li>
          <li>인원: 백엔드 2, 프론트엔드 4</li>
          <li>기여도: 팀 리드, 프론트엔드 40%</li>
          <li>
            사용 기술: <span className="code">HTML</span>,{" "}
            <span className="code">CSS</span>,{" "}
            <span className="code">JavaScript</span>,{" "}
            <span className="code">React</span>,{" "}
            <span className="code">Styled-components</span>,{" "}
            <span className="code">React-Query</span>,{" "}
            <span className="code">axios</span>,{" "}
            <span className="code">MUI</span>
          </li>
        </ul>
      </div>
      <div className="section service">
        <h2>💁🏻‍♀️ 서비스 내용</h2>
        <p>
          주운 물건을 공유하고 물건의 주인과 매칭을 도와주는 서비스입니다.
          <br />
          팀 리드 경험을 통해 목표 달성을 위한 원활한 소통과 협력의 중요성을
          경험했습니다.
          <br />
          <br />
          핵심 기능은 세 가지 입니다.
          <ol>
            <li>공공 API를 활용한 분실물 안내</li>
            <li>분실물을 직접 공유하는 커뮤니티</li>
            <li>주인과 주운 사람이 상호작용하는 1:1 채팅</li>
          </ol>
        </p>
      </div>
      <div className="section experience">
        <h2>✨ 성장 경험</h2>
        <h3>1. 기획을 기술적으로 녹여내기 위한 고심</h3>
        <p>
          잃어버린 사람과 주운 사람의 매칭을 위해 "당근마켓"의 채팅 기능을
          벤치마킹했습니다.
          <br /> 하지만 WebSocket의 기술적 부담이 있어 대체 방법이 필요했습니다.
          React-Query의 폴링(polling) 방식을 도입하여 채팅 기능을 구현했고,
          데이터의 신선도와 캐시 관리를 통해 불필요한 네트워크 요청을
          최소화했습니다.
          <br />
          적절한 난이도로 2주 안에 서비스 목적을 달성하는 MVP를 완성할 수
          있었습니다.
        </p>
        <br />
        <br />
        <h3>2. 팀 리드</h3>
        <p>
          간담회를 통해 프로젝트를 어떻게 생각하고 어떤 목표로 임하는지
          이야기하는 시간을 가졌습니다. <br />
          전체 스크럼을 통해 작업 진행 상황을 공유하고 하루의 목표를 설정한 뒤,
          백/프론트 파트 별 스크럼을 진행하여 이슈와 피드백을 노션에 문서화
          했습니다.
          <br />
          <br />
          특히 프로젝트가 진행됨에 따라 개발 진행 중에는 음성 채팅 채널에
          상주하도록 하였습니다. <br />
          데일리 스크럼 이후에도 문제가 생기거나 계획이 변경되었을 때 곧바로
          공유함으로써 빠르게 진행할 수 있었습니다.
        </p>
      </div>
      <div className="section work">
        <h2>📑 작업 내용</h2>
        <div className="buttons flex-row">
          {Children.toArray(
            ["프론트엔드", "적극적 팀 리딩"].map((str, idx) => (
              <div
                className={`button ${buttonSelected === idx ? "selected" : ""}`}
                data-index={idx}
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

export default LAFContents;
