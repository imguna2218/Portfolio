import React from 'react';
import { motion } from 'framer-motion';

const iconVariant = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      yoyo: Infinity
    }
  }
}

function SkillIcon({ icon: Icon }) {
  return (
    <motion.div
      variants={iconVariant}
      whileHover="hover"
      className="w-[220px] h-[130px] bg-gradient-to-r from-red-500 to-black rounded-2xl flex items-center justify-center shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-red-700 hover:scale-[1.05]">
      <Icon className="text-white text-[100px]" />
    </motion.div>
  );
}

export default SkillIcon;
