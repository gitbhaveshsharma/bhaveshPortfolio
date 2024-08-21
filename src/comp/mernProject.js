import React from "react";
import { FaBlogger, FaExternalLinkAlt } from "react-icons/fa";
import "./dsProject.scss";
const ProjectList = () => {
  const links = [
    {
      label: "GURU GOBIND SINGH COUNCIL OF SKILLS...",
      githubUrl: "https://ggscsms.com",
      blogUrl: "#",
    },
    {
      label: "Nihongomax",
      githubUrl: "https://nihongomax.com/",
      blogUrl: "#",
    },
    {
      label: "labor2Hire",
      githubUrl: "#",
      blogUrl:
        "https://bhavesh-sharma.blogspot.com/2023/04/introducing-labor2hire-app-thats-set-to.html",
    },
  ];

  return (
    <div className="edu-flex-box">
      <div className="project">
        <h1>Projects:</h1>
      </div>

      <ul className="edu-list">
        {links.map((link, index) => (
          <li key={index}>
            <h1>{link.label}</h1>
            <a href={link.githubUrl} target="_blank" rel="noopener noreferrer">
              <span className="project-icon">
                {React.createElement(FaExternalLinkAlt)}
              </span>
            </a>
            <a href={link.blogUrl} target="_blank" rel="noopener noreferrer">
              <span className="project-icon">
                {React.createElement(FaBlogger)}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
