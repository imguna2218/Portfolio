import React from 'react'
import Title from './Title'
import SkillIconList from './SkillIconList';
import ToolsTitle from './ToolsTitle';
import ToolIconList from './ToolIconList';

function SkillsDiv() {
  return (
    <div id="skills"
      className="relative h-auto min-h-screen w-screen bg-cover bg-center p-10"
      style={{ background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.76), rgba(18, 1, 72, 0.678)), rgba(0, 0, 0, 0.673)' }}
    >
      <Title />
      <div className="skillIcons mt-8">
        <SkillIconList />
      </div>
      <div className="tools mt-24">
        <ToolsTitle />
        <ToolIconList />
      </div>
    </div>
  )
}

export default SkillsDiv
