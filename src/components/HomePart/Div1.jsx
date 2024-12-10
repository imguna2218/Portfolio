import Typing from 'react-typing-effect';
import { motion } from 'framer-motion';

const Div1 = () => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-white">Hi There <b>👋🏻</b></h1>
      <h1 className="text-2xl md:text-4xl font-bold mb-10 md:mb-20 text-white">I'M GUNA SEKHAR PARISA</h1>
      <Typing
        text={[
          'MERN STACK DEVELOPER', 'STUDENT'
        ]}
        speed={100}
        eraseSpeed={50}
        typingDelay={100}
        eraseDelay={3000}
        cursorClassName="text-white"
        className="font-bold text-xl md:text-4xl text-left text-white"
      />
    </>
  );
};

export default Div1;
