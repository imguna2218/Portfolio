import React from 'react';
import { FaDatabase, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython, FaJs, FaCuttlefish } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';

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
};

function SkillIconList() {
  const list = ['C', 'Python', 'Java', 'HTML', 'CSS', 'React', 'Node', 'MongoDB', 'Git', 'Tailwind CSS', 'Javascript'];

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

export default SkillIconList;
