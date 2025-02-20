import { Children, useState } from "react";

function PortfolioContents({ handleButtonEnter, handleButtonLeave }) {
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
              다양한 애니메이션과 라이브러리 활용
              <ul>
                <li>
                  페이지 최상단 GSAP 라이브러리를 활용해 구름이 흩어지는 효과를
                  만들고, 동적인 분위기를 연출
                </li>
                <li>
                  Typed.js와 Intersection Observer를 사용해 해당 섹션이 나타날때
                  타이핑 애니메이션이 등장하게 구현
                </li>
                <li>
                  현재 위치한 섹션이 헤더 메뉴에서 강조 표시되도록 하고, 클릭 시
                  해당 위치로 스크롤 구현
                </li>
              </ul>
            </li>
            <li>
              반응형 웹 디자인
              <ul>
                <li>
                  화면 크기에 따라 그리드 속성을 변경하여 적절한 레이아웃을 제공
                </li>
                <li>
                  중복되는 코드는 컴포넌트화하고, Props로 데이터를 전달하여
                  가독성을 높이고 일관된 디자인을 유지
                </li>
              </ul>
            </li>
          </ul>
        );

      case 1:
        return (
          <ul>
            <li>
              배포 경험
              <ul>
                <li>Netlify를 사용하여 손쉽게 프트폴리오 사이트 배포</li>
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
          <li>활동명 : 개인 사이드 프로젝트</li>
          <li>인원: 1인</li>
          <li>기여도: 디자인, 프론트엔드, 배포</li>
          <li>
            사용 기술: <span className="code">HTML</span>,{" "}
            <span className="code">CSS</span>,{" "}
            <span className="code">JavaScript</span>,{" "}
            <span className="code">React</span>,{" "}
            <span className="code">SCSS</span>,{" "}
            <span className="code">GSAP</span>,{" "}
            <span className="code">Netlify</span>
          </li>
        </ul>
      </div>
      <div className="section service">
        <h2>💁🏻‍♀️ 서비스 내용</h2>
        <p>
          포트폴리오 용도로 제작한 웹사이트입니다. <br />
          지금 보고 있는 바로 이 웹사이트에 해당합니다.
        </p>
      </div>
      <div className="section experience">
        <h2>✨ 성장 경험</h2>
        <h3>사용자 관점에서의 개발</h3>
        <p>
          포트폴리오를 보는 사용자들에게 편안하게 탐색할 수 있는 환경을
          제공하면서도 <br />
          직관적이면서도 인터랙티브한 요소를 넣어 웹사이트의 완성도를 높이고자
          했습니다.
        </p>
      </div>
      <div className="section work">
        <h2>📑 작업 내용</h2>
        <div className="buttons flex-row">
          {Children.toArray(
            ["프론트엔드", "배포"].map((str, idx) => (
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

export default PortfolioContents;
