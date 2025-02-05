import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "Remix the Archive",
    path: "remix-archive",
    description: (
      <>
        A generative art exhibition in Helsinki in autumn 2024. A full-scale exhibition build from concept to completion. Blending art, technology, and spatial design to craft a 360° experience.
      </>
    ),
    year: "2024",
    role: "Project Manager",
    coverage: "Art Exhibition, Generative Art"
  },
  {
    name: "Alusta Space",
    path: "alusta-space",
    description: (
      <>
        A creative space for exhibitions and events. Old office building converted into a modern and versatile gallery space with a strong focus on sustainability and adaptive design.
      </>
    ),
    year: "2024",
    role: "Project Manager",
    coverage: "Art Gallery, Refurbishment"
  },
  {
    name: "Combine24",
    path: "combine24",
    description: (
      <>
        A global digital art competition in 2024 to elevate Finland's national art collection and highlight innovative art forms. Museum-led art competition, developed and executed from concept to completion.
      </>
    ),
    year: "2024",
    role: "Project Manager",
    coverage: "Art Competition, Art Collection"
  },
  {
    name: "Alusta.art",
    path: "alusta-platform",
    description: (
      <>
        A platform for releasing and collecting digital art. Empowering creators with tools to publish, share, and sell digital art on-chain. Strong brand, CMS-based curation layer and UI built on the Zora protocol.
      </>
    ),
    year: "2023",
    role: "Project Manager",
    coverage: "Digital Art, Web3 Platform"
  },
  {
    name: "Metaspace",
    path: "metaspace",
    description: (
      <>
        Virtual worlds and galleries for artists and collectors to showcase digital art. A WebGL-based platform with beautifully designed gallery spaces. A startup adventure from my friends' basement.
      </>
    ),
    year: "21-22",
    role: "Project Manager",
    coverage: "Virtual Gallery, 3D"
  },
  {
    name: "JYU Blockchain Research Group",
    path: "jyu-blockchain-research-group",
    description: (
      <>
        We founded a blockchain research group at the University of Jyväskylä. Worked on research projects, funding, and co-led a blockchain course. Developed a strong interest in Ethereum.
      </>
    ),
    year: "18-19",
    role: "Project Manager",
    coverage: "Distributed Systems, Blockchain"
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