import React, { useEffect } from "react";
import "./ProjectModal.scss";
import TeenyboxContents from "./TeenyboxContents";
import MichiContents from "./MichiContents";
import PortfolioContents from "./PortfolioContents";
import LAFContents from "./LAFContents";
import CasaverdeContents from "./CasaverdeContents";

const gitLink = {
  1: "https://github.com/teeny-box/teenybox-frontend",
  2: "https://github.com/teeny-box/michi-frontend",
  3: "https://github.com/xeongjae/Portfolio",
  4: "https://github.com/elice-team10/Frontend",
  5: "https://github.com/SW-6-Casa-Verde/Backend",
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  if (!project) return null;

  const getBody = () => {
    switch (project.Number) {
      case 1:
        return <TeenyboxContents />;
      case 2:
        return <MichiContents />;
      case 3:
        return <PortfolioContents />;
      case 4:
        return <LAFContents />;
      case 5:
        return <CasaverdeContents />;
      default:
        return null;
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="button-box">
          <img
            src="/close.svg"
            className="close-button"
            alt="Close icon"
            onClick={onClose}
          />
          <a href={gitLink[project.Number]} target="_blank" rel="noreferrer">
            <img
              src="/github.svg"
              className="github-button"
              alt="github icon"
            />
          </a>
        </span>
        <header>
          <div className="back">
            <img src={project.logo} alt="사이트 로고" />
          </div>
          <div className="front flex-col">
            <div className="title flex-row">
              <img className="logo" src={project.logo} alt="사이트 로고" />
              <h2>{project.Title}</h2>
            </div>
            <div className="date">{project.Period}</div>
            <div className="tags flex-row">
              {project.Feature.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>
        <div className="body flex-col">{getBody()}</div>
      </div>
    </div>
  );
};

export default ProjectModal;
