import React from 'react';
import Project from './Project';
import amazonImage from './amazon.png';
import todoImage from './todo.png';

const ProjectList = () => {
  const projects = [
    {
      id: "01",
      projectImage: amazonImage,
      projectName: "Amazon Clone by React",
      projectDes: "Explore a modern shopping experience on my Amazon React page. Discover a curated selection of products with intuitive navigation and secure transactions, all powered by React for seamless browsing and purchasing. Happy shopping!",
      gitHubLink: "",
      demoLink: ""
    },
    {
      id: "02",
      projectImage: todoImage,
      projectName: "Basic Todo app",
      projectDes: "This React.js todo app provides a streamlined interface for task management, allowing real-time additions, deletions, and task completion. Its minimalist design enhances productivity with efficient functionality.",
      gitHubLink: "",
      demoLink: ""
    }
  ];

  return (
    <div className="scrollprojects flex justify-center items-center gap-8">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
