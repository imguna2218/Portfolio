import React from 'react';
import Typing from 'react-typing-effect';

function KnowMe() {
  return (
    <>
      <h1 className="knowtitle text-center text-3xl font-bold mb-8">Know Who I am!</h1>
      <p className="text-xl text-white mb-3">
        Hi everyone, I'm <b className="text-red-500">Guna Sekhar Parisa</b> from{' '}
        <b className="text-red-500">Vijayawada, India.</b>
      </p>
      <p className="text-xl text-white mb-3">
        I am currently a student at <b className="text-red-500">Lakireddy Bali Reddy College of Engineering.</b>
      </p>
      <p className="text-xl text-white mb-6">I am studying Computer Science.</p>
      <p className="text-xl text-white mb-6">Apart from that, some other activities I love to do:</p>
      <ol className="list-none text-white ml-8">
        <li className="mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.707 7.707a1 1 0 011.414 0L10 11.586l3.879-3.879a1 1 0 111.414 1.414l-4.586 4.586a1 1 0 01-1.414 0L4.293 9.121a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Cricket
        </li>
        <li className="mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.707 7.707a1 1 0 011.414 0L10 11.586l3.879-3.879a1 1 0 111.414 1.414l-4.586 4.586a1 1 0 01-1.414 0L4.293 9.121a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Playing chess
        </li>
        <li className="mb-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-green-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.707 7.707a1 1 0 011.414 0L10 11.586l3.879-3.879a1 1 0 111.414 1.414l-4.586 4.586a1 1 0 01-1.414 0L4.293 9.121a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Gym
        </li>
      </ol>

      <div className='mt-20'></div>

      <div className="quote text-center">
        {/* <Typing
          text={[
            '"Programming is Pressure... And I love to be Under Pressure .."'
          ]}
          speed={100}
          eraseSpeed={50}
          typingDelay={100}
          eraseDelay={3000}
          cursorClassName="text-red-300"
          className="quote italic mt-20 mb-4 text-xl text-left text-red-300"
        /> */}
        <p className="quote italic mt-20 mb-4 text-xl text-left text-red-300">"Programming is Pressure... And I love to be Under Pressure .."</p>
        <div className="mt-4"></div> {/* This adds some margin between the two lines */}
        <Typing
          text={[
            '- Guna Sekhar Parisa'
          ]}
          speed={280}
          eraseSpeed={50}
          typingDelay={100}
          eraseDelay={3000}
          cursorClassName="text-red-300"
          className="quote italic text-xl text-left text-red-300"
        />
      </div>
    </>
  );
}

export default KnowMe;
