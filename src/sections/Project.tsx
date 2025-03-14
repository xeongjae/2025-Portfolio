import "./Project.scss";

import useThemeStore from "../hooks/useThemeStore";

import { useNavigate } from "react-router-dom";

import ProjectCard from "../components/project/ProjectCard";
import { ListChart } from "../library/ProjectCardData";

const Project: React.FC = () => {
  const { isLightMode } = useThemeStore();

  const navigate = useNavigate();

  const navTo = (id) => {
    navigate(`/project-detail/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className={`project ${isLightMode ? "light-mode" : "dark-mode"}`}>
      <h2>Web Project</h2>
      <div className="contents">
        <h3>
          Independent
          <p>수료 후 프로젝트</p>
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
          Academy
          <p>부트캠프 프로젝트</p>
        </h3>
        <div className="grid-container">
          {ListChart.filter((el) => el.Type === "부캠").map((items, idx) => (
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
