import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const project = projects.map((pr, indx) => {
    return (
      <ProjectItem key={indx} name={pr.name} about={pr.about} technologies={pr.technologies}/>
    )
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {project}
      </div>
    </div>
  );
}

export default ProjectList;