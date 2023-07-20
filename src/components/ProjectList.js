import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((element, index) => {
          console.log({ element });
          return (
            <ProjectItem
              key={index}
              name={element.name}
              about={element.about}
              technologies={element.technologies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;
