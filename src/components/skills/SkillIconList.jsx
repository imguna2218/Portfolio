import React from 'react';
import { FaCuttlefish, FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiThreedotjs } from 'react-icons/si';

const icons = {
  'C': FaCuttlefish,
  'Python': FaPython,
  'Java': FaJava,
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'React': FaReact,
  'Node': FaNodeJs,
  'MongoDB': SiMongodb,
  'Git': FaGitAlt,
  'Tailwind CSS': SiTailwindcss,
  'Javascript': FaJs,
  'TypeScript': SiTypescript,
  'Three.js': SiThreedotjs,
};

function SkillIconList() {
  const list = ['C', 'Python', 'Java', 'HTML', 'CSS', 'React', 'Node', 'MongoDB', 'Git', 'Tailwind CSS', 'Javascript', 'TypeScript', 'Three.js'];

  return (
    <div className="flex justify-center flex-wrap gap-4 p-10">
      {list.map(skill => {
        const IconComponent = icons[skill];
        return (
          <div key={skill} className="w-[200px] h-[130px] bg-gradient-to-r from-red-500 to-black rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-red-700 hover:scale-[1.05] md:w-[30%] lg:w-[18%]">
            <IconComponent className="text-white text-[90px]" />
          </div>
        );
      })}
    </div>
  );
}

export default SkillIconList;
