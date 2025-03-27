import React from "react";
import "./ProjectCard.scss";

import useThemeStore from "../../hooks/useThemeStore";

interface ProjectCardProps {
  Title: string;
  SubTitle: string;
  ImageSrc: string;
  Tag: string[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  Title,
  SubTitle,
  ImageSrc,
  Tag,
  onClick,
}) => {
  const { colorMode } = useThemeStore();

  return (
    <div
      onClick={onClick}
      className={`project-card ${colorMode ? "light-mode" : "dark-mode"}`}
    >
      <div className="img-box">
        <img src={ImageSrc} alt={Title} property="true" className="img" />
      </div>
      <div className="info">
        <h2 className="title">{Title}</h2>
        <div className="subtitle">{SubTitle}</div>
      </div>
      <div className="tag-container">
        {Tag.map((tag: string, i: number) => (
          <div key={i} className="tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
