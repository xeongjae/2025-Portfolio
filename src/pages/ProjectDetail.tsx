import "./ProjectDetail.scss";

import { useParams } from "react-router-dom";
import { ProjectDetailData } from "../library/ProjectDetailData";

import Header from "../components/Header";
import useThemeStore from "../hooks/useThemeStore";

import { SiGithub } from "react-icons/si";

const ProjectDetail: React.FC = () => {
  const { colorMode } = useThemeStore();

  const { id } = useParams(); // URL에서 ID 가져오기
  const project = ProjectDetailData.find(
    (item) => item.Number.toString() === id
  ); // ID로 데이터 찾기

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className={`project-detail ${colorMode ? "light-mode" : "dark-mode"}`}>
      <Header />
      <div className="detail-top">
        <div className="info-box">
          <div className="feature-box">
            {project.Feature.map((items) => (
              <span className="feature">{items}</span>
            ))}
          </div>
          <p className="sub-title">{project.SubTitle}</p>
          <p className="title">{project.Title}</p>
          <p className="period">{project.Period}</p>
          <p className="detail-description">{project.About}</p>
          <div className="link-button-box">
            <a
              href={project.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-button"
            >
              Github <SiGithub />
            </a>
          </div>
        </div>
        <div className="img-box">
          <img className="img" src={project.ImageSrc} alt={project.Title} />
        </div>
      </div>
      <div className="detail-mid">
        <div className="project-introduce-box">
          <h2>👋 프로젝트 소개</h2>
          <div className="project-introduce-contents">
            <div>
              <span className="spot">•</span> {project.Type}
              <p className="description">{project.Member}</p>
            </div>
            <div>
              <span className="spot">•</span> 사용기술
            </div>
            <div className="stack-box">
              {project.Stack.map((items) => (
                <span className="stack">{items}</span>
              ))}
            </div>
            <div>
              <span className="spot">•</span> 프로젝트 설명
              <p className="description">{project.Description}</p>
            </div>
          </div>
        </div>
        <div className="project-explain-box">
          <h2>🤔 어떤 기능을 담당했나요?</h2>
          <div className="project-explain-contents">
            {project.Explain.map((items, index) => (
              <div key={index}>
                <h4>
                  <span className="spot">•</span> {items.description}
                </h4>
                {items.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {project.Problem && (
        <div className="detail-bot">
          <h2>💥 문제는 없었나요?</h2>
          <div className="grid-container">
            {project.Problem.map((items, index) => (
              <div key={index} className="card">
                <h3>{items.title}</h3>
                <div className="problem">
                  <h4 className="problem-title">⛔ 문제발생</h4>
                  {items.contents[0]}
                </div>
                <div className="solution">
                  <h4 className="solution-title">🙆🏻‍♂️ 해결방법</h4>
                  {items.contents[1]}
                </div>
                <div className="learned">
                  <h4 className="learned-title">😎 알게된 점</h4>
                  {items.contents[2]}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
