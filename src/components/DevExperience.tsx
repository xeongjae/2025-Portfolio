import "./DevExperience.scss";

import { SiGithub } from "react-icons/si";

import useThemeStore from "../hooks/useThemeStore";

const DevExperience: React.FC = () => {
  const { colorMode } = useThemeStore();

  return (
    <div className="career-container">
      <div className="career-content">
        <div className="section-title">🔥 Dev Experience 🔥</div>
        <div className="career-list">
          <div className="career-item">
            <div className="career-info">
              <div className="job-title">스터디 운영</div>
              <div className="company-position">React docs</div>
              <div className="date">2024.12.17 ~ 2025.01.14</div>
            </div>
            <div className="career-details">
              <div className="company-name">
                리엑트 공식문서 스터디
                <a
                  href="https://github.com/xeongjae/react-docs-study"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`link-button ${colorMode ? "light-mode" : ""}`}
                >
                  Github <SiGithub />
                </a>
              </div>
              <div className={`description ${colorMode ? "light-mode" : ""}`}>
                <p>
                  <span className="spot">•</span> 공식 문서를 통해 리액트를
                  학습하고, 토론과 공식 문서 예제 풀이
                </p>
                <p>
                  <span className="spot">•</span> 인프런 강의 - 얄코의
                  리액트(React) 를 통해 React 19 기능까지 추가 학습
                </p>
                <p>
                  <span className="spot">•</span> 매주 학습한 내용을 github에
                  정리
                </p>
                <p>
                  <span className="spot">•</span> 전반적인 스터디 운영 담당
                </p>
              </div>
            </div>
          </div>
          {/* Web Publisher 경력 */}
          <div className="career-item">
            <div className="career-info">
              <div className="job-title">스터디 운영</div>
              <div className="company-position">
                모던 자바스크립트 Deep Dive
              </div>
              <div className="date">2024.11.12 - 2024.12.17</div>
            </div>
            <div className="career-details">
              <div className="company-name">
                모던 자바스크립트 Deep Dive 다회독 스터디
                <a
                  href="https://github.com/xeongjae/javascript-deep-dive-study"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`link-button ${colorMode ? "light-mode" : ""}`}
                >
                  Github <SiGithub />
                </a>
              </div>
              <div className={`description ${colorMode ? "light-mode" : ""}`}>
                <p>
                  <span className="spot">•</span>JS 기반 프로젝트 경험이 있는
                  사람들과 함께 '모던 자바스크립트 Deep Dive' 정독
                </p>
                <p>
                  <span className="spot">•</span>예제 코드를 만들어 동작 원리를
                  이해하고, 머릿속에서 흐름을 시뮬레이션할 수 있도록 학습
                </p>
                <p>
                  <span className="spot">•</span>인원 모집부터 스터디 운영 담당
                </p>
                <p>
                  <span className="spot">•</span>스터디 종료 후 개인적으로 세
                  번째로 정독하며 개념을 더욱 깊이 이해
                </p>
              </div>
            </div>
          </div>

          {/* 교육 이수 */}
          <div className="career-item">
            <div className="career-info">
              <div className="job-title">교육이수</div>
              <div className="company-position">엘리스 그룹</div>
              <div className="date">2023.08.08 ~ 2023.12.15</div>
            </div>
            <div className="career-details">
              <div className="company-name">엘리스 SW엔지니어 6기</div>
              <div className={`description ${colorMode ? "light-mode" : ""}`}>
                <p>
                  <span className="spot">•</span> JavaScript, React 등 학습
                </p>
                <p>
                  <span className="spot">•</span> 매일 강도 높은 과제 수행 및
                  페어 프로그래밍과 코드 리뷰 경험
                </p>
                <p>
                  <span className="spot">•</span> 협업 프로젝트 2회 진행, 최종
                  프로젝트 리더 역할 수행
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevExperience;
