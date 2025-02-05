import React from 'react';
import './styles.css';

const ProjectCard = ({ title, description, image }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default ProjectCard; 