import React from "react";
import "./Project.scss";

import useThemeStore from "../hooks/useThemeStore";

import { useNavigate } from "react-router-dom";

import ProjectCard from "../components/project/ProjectCard";
import { ListChart } from "../library/ProjectCardData";

const Project: React.FC = () => {
  const { colorMode } = useThemeStore();

  const navigate = useNavigate();

  const navTo = (id: number): void => {
    navigate(`/project-detail/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className={`project ${colorMode ? "light-mode" : "dark-mode"}`}>
      <h2>Project</h2>
      <div className="contents">
        <h3>
          Personal
          <p>개인 프로젝트</p>
        </h3>
        <div className="grid-container">
          {ListChart.filter((el) => el.Type === "개인").map((items, idx) => (
            <ProjectCard
              key={idx}
              Title={items.Title}
              SubTitle={items.Description}
              ImageSrc={items.ImageSrc}
              Tag={items.Tag}
              onClick={() => navTo(items.Number)}
            />
          ))}
        </div>
      </div>
      <div className="contents">
        <h3>
          Team
          <p>팀 프로젝트</p>
        </h3>
        <div className="grid-container">
          {ListChart.filter((el) => el.Type === "팀").map((items, idx) => (
            <ProjectCard
              key={idx}
              Title={items.Title}
              SubTitle={items.Description}
              ImageSrc={items.ImageSrc}
              Tag={items.Tag}
              onClick={() => navTo(items.Number)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
