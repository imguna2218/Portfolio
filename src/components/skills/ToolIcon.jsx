import React from 'react';

function ToolIcon({ icon: Icon }) {
  return (
    <div className="w-[220px] h-[130px] bg-gradient-to-r from-red-500 to-black rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-red-700 hover:scale-[1.05]">
      <Icon className="text-white text-[100px]" />
    </div>
  );
}

export default ToolIcon;
