import { useState, useEffect } from "react";
import "./Project.scss";
import ProjectCard from "../components/project/ProjectCard";
import { ListChart } from "../library/ProjectCardData";
import ProjectModal from "../components/project/ProjectModal";

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  useEffect(() => {
    // selectedProject 상태가 변경될 때마다 실행
    console.log("Selected project:", selectedProject);
  }, [selectedProject]);

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <div className="project">
      <div className="title-box">
      </div>
      <div className="contents-box">
        <div className="contents">
          <div className="grid-container">
            {ListChart.map((items, idx) => (
              <ProjectCard
                key={idx}
                Title={items.Title}
                SubTitle={items.SubTitle}
                ImageSrc={items.ImageSrc}
                Page={items.Page}
                Tag={items.Tag}
                onClick={() => handleCardClick(items)} 
              />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Project;