import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, demoLink, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image"/>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          <a href={demoLink} className="project-btn">Demo</a>
          <a href={githubLink} className="project-btn">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
