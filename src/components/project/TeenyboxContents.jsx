import { Children, useState } from "react";

function TeenyboxContents() {
  const [buttonSelected, setButtonSelected] = useState(0);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    const idx = Number(e.currentTarget.dataset.index);
    setButtonSelected(idx);
  };

  const getWorkContents = () => {
    switch (buttonSelected) {
      case 0:
        return (
          <ul>
            <li>
              메인 페이지, 헤더(페이지 네브, 연극 검색), 마이페이지(찜, 후기,
              사용자 정보 관리), 관리자페이지
              <ul>
                <li>
                  swiper(라이브러리) 대신 직접 설계한 로직으로 더 가볍고
                  부드러운 Infinite Scroll을 구현
                </li>
                <li>
                  외부 API 필터링을 통해 실시간 인기 연극, 선호 지역 최신 연극
                  등 다양한 카테고리를 구성
                </li>
                <li>
                  연극 검색 모달과 Local Storage를 사용한 최근 검색어 구현
                </li>
                <li>
                  전역 변수(Context API)를 통해 사용자 정보 관리 및 필요한
                  컴포넌트에 활용
                </li>
              </ul>
            </li>
            <li>
              코드 퀄리티 향상
              <ul>
                <li>
                  코드 리뷰를 통해 잠재적 결함을 찾아내고, 피드백을 통해 코드
                  개선
                </li>
                <li>dayjs를 추가하여 날짜 포멧 코드의 일관성 향상</li>
                <li>
                  SCSS의 Variable, @mixin 기능을 사용하여 반응형 개발을 위한
                  코드 간략화
                </li>
              </ul>
            </li>
            <li>
              UI/UX 개선
              <ul>
                <li>웹 디자이너 팀원과 협업하여 배너 슬라이드 추가</li>
                <li>다양한 기기를 고려한 반응형 웹 전환</li>
              </ul>
            </li>
          </ul>
        );

      case 1:
        return (
          <ul>
            <li>
              기획 개선
              <ul>
                <li>찜 목록, 후기, 게시글 테이블에 정렬 기능을 추가 향상</li>
                <li>
                  인터파크, 예스24의 해당 연극 예매 페이지로 바로 이동 가능한
                  버튼 링크 추가
                </li>
              </ul>
            </li>
            <li>
              디자인
              <ul>
                <li>피그마로 목업을 작성하고 디자이너와 협업</li>
                <li>와이어프레임 제작</li>
              </ul>
            </li>
          </ul>
        );

      case 2:
        return (
          <ul>
            <li>Git Flow 전략을 통한 버전 관리</li>
            <li>
              실제 서비스 사이트와 개발 사이트를 함께 운영하며 서비스 관리
            </li>
            <li>실행 환경에 따라 환경 변수(.env 파일)를 분리하여 사용</li>
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
          <li>활동명 : 스터디 팀 프로젝트</li>
          <li>인원: 백엔드 3, 프론트엔드 3, 디자인 1</li>
          <li>기여도: 프론트엔드 40%</li>
          <li>
            사용 기술: <span className="code">HTML</span>,{" "}
            <span className="code">CSS</span>,{" "}
            <span className="code">JavaScript</span>,{" "}
            <span className="code">React</span>,{" "}
            <span className="code">Context API</span>,{" "}
            <span className="code">SCSS</span>,{" "}
            <span className="code">MUI</span>,{" "}
            <span className="code">Figma</span>
          </li>
        </ul>
      </div>
      <div className="section service">
        <h2>💁🏻‍♀️ 서비스 내용</h2>
        <p>
          연극을 찾고 홍보할 수 있는 연극 정보 사이트입니다. <br />
          디자이너와 협업하며 해당 직군과의 업무 이해도를 높일 수 있었습니다.
          <br /> 실제 서비스화를 목표로 진행하였습니다. <br />
          <br />
          핵심 기능은 세 가지 입니다.
          <ol>
            <li>현재 대한민국 연극 상영 정보 제공</li>
            <li>카테고리별 연극 추천</li>
            <li>후기, 연극 홍보, 자유 게시판 등 다양한 커뮤니티 기능</li>
          </ol>
        </p>
      </div>
      <div className="section experience">
        <h2>✨ 성장 경험</h2>
        <h3>API 요청 최적화</h3>
        <p>
          API로 데이터를 불러와 랜더링하는 과정에서 페이지 로딩 시간이 길어지는
          문제가 발생했습니다.
          <br />
          모든 데이터를 받아 필터링하던 기존 방식에서 필요한 데이터만 서버에서
          받을 수 있도록 쿼리 파라미터로 필터링과 페이지네이션 조건을
          설정했습니다.
          <br />그 결과, 불필요한 데이터 전송을 줄여 응답 시간을 99.2%
          단축시켰습니다.
        </p>
        <br />
        <br />
        <h3>서비스 운영 실패를 통한 성장</h3>
        <p>
          실제 도메인을 배포하여 서비스를 운영하기 위해 실행 환경에 따른 환경
          변수 제어와 반응형 웹으로의 전환 등 다양한 노력을 기울였습니다.
          <br />
          또한 사용자가 원하는 기능, 차별성, 홍보 전략 등을 고민하며 다양한
          도전을 하게 되었습니다. <br />
          결과적으로 사용자 유치는 이루지 못했지만, 서비스 개선을 위한 고민과
          노력을 통해 많은 경험을 얻을 수 있었습니다.
        </p>
      </div>
      <div className="section work">
        <h2>📑 작업 내용</h2>
        <div className="buttons flex-row">
          {Children.toArray(
            ["프론트엔드", "기획 및 디자인", "서비스 운영"].map((str, idx) => (
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

export default TeenyboxContents;
