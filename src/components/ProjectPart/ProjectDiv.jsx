import React from 'react';
import ProjectList from './ProjectList';
import Heading from './Heading';

const ProjectDiv = () => {
  return (
    <div
      id="projectpart"
      className="relative h-screen w-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        background: 'linear-gradient(45deg, rgba(18, 0, 72, 0.76), rgba(0, 1, 1, 0.678)), rgba(163, 0, 0, 0.673)',
      }}
    >
      <div className="heading text-center text-white">
        <Heading />
      </div>
      <div className="outer max-w-screen-lg mt-8">
        <ProjectList />
      </div>
    </div>
  );
}

export default ProjectDiv;
