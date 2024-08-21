import React from "react";
import { FaBlogger, FaGithub } from "react-icons/fa";
import "./dsProject.scss"
const ProjectList = () => {
  const links = [
    {
      label: "Fake News Detection",
      githubUrl:
        "https://github.com/gitbhaveshsharma/Fake-News-and-Article.git",
      blogUrl:
        "https://bhavesh-sharma.blogspot.com/2023/04/fake-news-and-article-in-todays-fast.html",
    },
    {
      label: "Fraud Detection",
      githubUrl:"#",
      blogUrl:
        "https://bhavesh-sharma.blogspot.com/2023/04/fake-news-and-article-in-todays-fast.html",
    },
    {
      label: "Future's Power: Predicting Energy Consumption",
      githubUrl: "https://github.com/facebook",
      blogUrl: "#",
    },
    {
      label: "Superstone Project PowerBI",
      githubUrl:
        "https://github.com/gitbhaveshsharma/Superstone_Project_PowerBI.git",
      blogUrl: "#",
    },
  ];

  return (
    <div className="edu-flex-box project">
      <h1>Projects:</h1>
      <ul className="edu-list">
        {links.map((link, index) => (
          <li key={index}>
            <h2>{link.label}</h2>
            <a href={link.githubUrl} target="_blank" rel="noopener noreferrer">
              <span className="project-icon">
                {React.createElement(FaGithub)}
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
