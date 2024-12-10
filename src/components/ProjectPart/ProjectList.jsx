import React from 'react';
import Project from './Project';
import amazonImage from './amazon.png';
import threadsImage from './threads.jpg';
import spotifyImage from './spotify.webp';

const ProjectList = () => {
  const projects = [
    {
      id: "01",
      projectImage: spotifyImage,
      projectName: "Spotify Clone",
      projectDes: "A Spotify-inspired web application purely built with TypeScript and React. It is a clone of the popular music streaming platform. This project uses React, Tailwind CSS, and TypeScript for styling and state management.",
      gitHubLink: "https://github.com/imguna2218/Spotify-no-ads",
      demoLink: "https://spotify-no-ads.onrender.com/"
    },
    {
      id: "02",
      projectImage: threadsImage,
      projectName: "Infinite Threads",
      projectDes: "An infinite scrolling website for threads. Users can create, read, and reply to threads, as well as search for threads by keywords. This project uses React, Redux, and Tailwind CSS for styling and state management.",
      gitHubLink: "https://github.com/imguna2218/Portfolio",
      demoLink: ""
    },
    {
      id: "03",
      projectImage: amazonImage,
      projectName: "Amazon Clone by React",
      projectDes: "Explore a modern shopping experience on my Amazon React page. Discover a curated selection of products with intuitive navigation and secure transactions, all powered by React for seamless browsing and purchasing. Happy shopping!",
      gitHubLink: "",
      demoLink: ""
    }
  ];

  return (
    <div className="scrollprojects flex flex-col sm:flex-row overflow-y-auto sm:overflow-x-auto gap-8 p-4">
      {projects.map((project) => (
        <div key={project.id} className="project-card w-full sm:w-80 h-auto flex-shrink-0">
          <Project project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
