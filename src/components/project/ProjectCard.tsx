import "./ProjectCard.scss";

import useThemeStore from "../../hooks/useThemeStore";

const ProjectCard = ({ Title, SubTitle, ImageSrc, Tag, onClick }) => {
  const { colorMode } = useThemeStore();

  return (
    <div onClick={onClick} className={`project-card ${colorMode ? "light-mode" : "dark-mode"}`}>
      <div className="img-box">
        <img
          src={ImageSrc}
          alt={Title}
          property="true"
          className="img"
        />
      </div>
      <div className="info">
        <h2 className="title">{Title}</h2>
        <div className="subtitle">{SubTitle}</div>
      </div>
      <div className="tag-container">
        {Tag.map((tag, i) => (
          <div key={i} className="tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;