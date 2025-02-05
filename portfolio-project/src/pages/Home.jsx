import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './styles.css';

const Home = () => {
    const projects = [
        { title: 'Projekti 1', description: 'Kuvaus 1', image: 'image1.jpg' },
        { title: 'Projekti 2', description: 'Kuvaus 2', image: 'image2.jpg' },
    ];

    return (
        <div className="home">
            <h1>Tervetuloa!</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Home; 