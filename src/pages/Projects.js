import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Remix the Archive",
    path: "remix-archive",
    description: (
      <>
        A large-scale generative art exhibition, developed from concept to completion, leading a multidisciplinary team to craft a fully immersive 360° experience.
      </>
    ),
    year: "2024",
    role: "Project Manager",
    coverage: "Art Exhibition"
  },
  {
    name: "Alusta Space",
    path: "alusta-space",
    description: (
      <>
       A versatile exhibition space shaped by architectural innovation, transforming industrial heritage into a sustainable and contemporary art venue.
      </>
    ),
    year: "2024",
    role: "Project Manager",
    coverage: "Construction"
  },
  {
    name: "Combine24",
    path: "combine24",
    description: (
      <>
        A pioneering digital art competition elevating Finland's national art collection. Bridging institutional heritage with emerging art forms through a carefully curated selection process and international outreach.
      </>
    ),
    year: "2024",
    role: "Project Manager",
    coverage: "Art Competition"
  },
  {
    name: "Alusta.art",
    path: "alusta-platform",
    description: (
      <>
        A decentralized art platform built on the Zora protocol. Enabling artists to tokenize, distribute, and monetize their work while maintaining full creative control and transparent ownership.
      </>
    ),
    year: "2023",
    role: "Project Manager",
    coverage: "Consumer Application"
  },
  {
    name: "Metaspace",
    path: "metaspace",
    description: (
      <>
        A WebGL-powered platform for virtual art exhibitions. Creating immersive digital spaces where artists and collectors can showcase their work in thoughtfully designed virtual environments.
      </>
    ),
    year: "21-22",
    role: "Project Manager",
    coverage: "Consumer Application"
  },
  {
    name: "Blockchain Research Group",
    path: "jyu-blockchain-research-group",
    description: (
      <>
        An academic blockchain research initiative established during graduate studies at the University of Jyväskylä. Worked on research projects, teaching, and funding. Developed a strong interest in Ethereum.
      </>
    ),
    year: "18-19",
    role: "Project Manager",
    coverage: "Academia"
  }
];

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project">
          <div>
            <Link to={`/projects/${project.path}`} className="project-title-link">
              <h2 className="project-title">{project.name}</h2>
            </Link>
          </div>
          <div>
            <p className="project-description">{project.description}</p>
            <div className="project-meta">
              <p className="project-year">
                <strong>Year:</strong> {project.year}
              </p>
              <p className="project-role">
                <strong>Role:</strong> {project.role}
              </p>
              <p className="project-coverage">
                <strong>Theme:</strong> {project.coverage}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Projects;