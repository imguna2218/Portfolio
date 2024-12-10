import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="projectblock flex justify-center items-center bg-gray-100 rounded-full mb-8 hover:transform hover:scale-105 duration-150">
      <div className="outer bg-gradient-to-br from-red-500 to-black p-6 rounded-lg shadow-md w-full text-center">
        <div className="image bg-cover bg-center h-40 rounded-lg mb-4" style={{ backgroundImage: `url(${project.projectImage})` }}></div>
        <div className="content">
          <h3 className="text-white text-xl font-bold mb-2">{project.projectName}</h3>
          <p className="text-gray-300 mb-4 h-[160px]">{project.projectDes}</p>
          <div className="buttons flex justify-center gap-4">
            <button className="bg-gradient-to-br from-blue-500 to-black text-white px-4 py-2 rounded-md hover:bg-gradient-to-br hover:from-black hover:to-blue-500 transition duration-300">GitHub</button>
            <button className="bg-gradient-to-br from-blue-500 to-black text-white px-4 py-2 rounded-md hover:bg-gradient-to-br hover:from-black hover:to-blue-500 transition duration-300">Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
