import { Children, useState } from "react";

function CasaverdeContents({ handleButtonEnter, handleButtonLeave }) {
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
            <li>로그인 및 회원가입, 결제 파트 담당</li>
            <li>JWT와 SessionStoragy를 사용하여 로그인 정보 저장</li>
            <li>카카오 맵 api 도입으로 간편한 주소 입력</li>
            <li>정규 표현식을 활용한 아이디 유효성 검사 로직을 구현</li>
          </ul>
        );

      case 1:
        return (
          <ul>
            <li>
              전반적인 서비스 기획
              <ul>
                <li>페르소나를 선정하여 사용자가 원하는 서비스에 대해 고민</li>
                <li>유사 서비스를 참고하여 구체적인 구현 기능을 설정</li>
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
          <li>활동명 : 엘리스 SW 6기 1차 프로젝트</li>
          <li>인원: 백엔드 3, 프론트엔드 3</li>
          <li>기여도: 프로젝트 기획, 프론트엔드 30%</li>
          <li>
            사용 기술: <span className="code">HTML</span>,{" "}
            <span className="code">CSS</span>,{" "}
            <span className="code">JavaScript</span>,{" "}
            <span className="code">GitLab</span>
          </li>
        </ul>
      </div>
      <div className="section service">
        <h2>💁🏻‍♀️ 서비스 내용</h2>
        <p>
          반려 식물 및 가드닝 도구를 판매하는 온라인 쇼핑몰 서비스입니다. <br />{" "}
          누구나 집에서도 손쉽게 식물을 심고 가꿀 수 있으면 좋겠다고 생각하여
          기획하게 되었습니다.
          <br />
          <br />
          <small>엘리스(부트캠프)에서 제공한 기능을 구현하였습니다.</small>
        </p>
      </div>
      <div className="section experience">
        <h2>✨ 성장 경험</h2>
        <h3>1. 서비스 기획 경험</h3>
        <p>
          제 아이템이 채택되면서 전반적인 서비스 기획을 맡게 되었습니다.
          <br />
          페르소나를 선정을 통해 사용자 요구를 분석하고 유사 서비스를 참고하여
          구체적인 구현 기능을 설정했습니다. <br />
          개발 프로세스를 이해하고, 서비스 기획의 중요성과 전략적 접근의
          필요성을 깨달았습니다.
        </p>
        <br />
        <br />
        <h3>2. API 적용을 통한 기능 고도화</h3>
        <p>
          사용자에게 신뢰할 수 있는 배송지 정보를 수집하기 위해 카카오 맵 API를
          도입하였습니다.
          <br />이 결과, 현실적인 배송지 데이터를 확보할 수 있게 되었습니다.
        </p>
        <br />
        <br />
        <h3>2. Git 협업</h3>
        <p>
          형상 관리 툴을 사용하여 협업하기 위해 브랜치명, 커밋 메시지 등을
          일관성있게 통일하는 법을 배우고 함께 코드를 관리하는 법을 배우게
          되었습니다. 충돌 및 해결 과정을 경험하며 push, pull을 통해 코드를 자주
          업데이트하고 관리하기 위해 노력하였습니다.
        </p>
      </div>
      <div className="section work">
        <h2>📑 작업 내용</h2>
        <div className="buttons flex-row">
          {Children.toArray(
            ["프론트엔드", "기획"].map((str, idx) => (
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

export default CasaverdeContents;
