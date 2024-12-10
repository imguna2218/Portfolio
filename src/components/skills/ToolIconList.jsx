import React from 'react';
import { FaGithub, FaWindows } from 'react-icons/fa';
import { SiVisualstudiocode, SiPostman } from 'react-icons/si';

const icons = {
  'VS Code': SiVisualstudiocode,
  'Windows': FaWindows,
  'GitHub': FaGithub,
  'Postman': SiPostman
};

function ToolIconList() {
  const list = ['VS Code', 'Windows', 'GitHub', 'Postman'];

  return (
    <div className="flex justify-center flex-wrap gap-8 p-10">
      {list.map(skill => {
        const IconComponent = icons[skill];
        return (
          <div key={skill} className="w-[220px] h-[130px] bg-gradient-to-r from-red-500 to-black rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-red-700 hover:scale-[1.05]">
            <IconComponent className="text-white text-[100px]" />
          </div>
        );
      })}
    </div>
  );
}

export default ToolIconList;
