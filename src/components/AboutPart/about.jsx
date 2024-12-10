import React, { useState } from 'react';
import imageSrc from './myImage.jpg';
import FindMe from './FindMe';
import AboutContent from './AboutConent';

const About = () => {
  const [style, setStyle] = useState({ transform: 'rotateY(0deg) rotateX(0deg)' });

  // Function to handle mouse movement over the image
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = clientX / window.innerWidth - 2.5;
    const y = clientY / window.innerHeight - 2.5;

    setStyle({
      transform: `rotateY(${x * 30}deg) rotateX(${y * 30}deg)`, // Tilt the image based on mouse position
    });
  };

  // Reset the image transform on mouse leave
  const handleMouseLeave = () => {
    setStyle({ transform: 'rotateY(0deg) rotateX(0deg)' });
  };

  return (
    <div
      id="aboutpart"
      className="flex flex-col h-screen w-screen bg-cover bg-center"
      style={{
        background:
          'linear-gradient(45deg, rgba(0, 0, 0, 0.673), rgba(18, 0, 72, 0.76)), rgba(163, 1, 1, 0.678)',
      }}
    >
      {/* Main content (Content + Image) */}
      <div id="mainContent" className="flex flex-1">
        {/* Content Div */}
        <div id="contentDiv" className="flex-1 flex flex-col justify-center items-center">
          <div id="abtcontent" className="abtcontent text-white text-left w-4/5 p-8">
            <AboutContent />
          </div>
        </div>

        {/* Image Div */}
        <div id="imageDiv" className="flex-1 flex justify-center items-center">
          <div
            id="actualImageDiv"
            className="myimage rounded-full overflow-hidden"
            style={{
              width: '40%',
              padding: '40px',
              transition: 'transform 0.1s ease-out', // Smooth transition when the image returns to its original state
            }}
            onMouseMove={handleMouseMove} // Track mouse movement over the image
            onMouseLeave={handleMouseLeave} // Reset transform on mouse leave
          >
            <img
              src={imageSrc}
              alt="Image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>

      {/* FindMe icons */}
      <div id="findMeIcons" className="flex justify-center items-center py-4">
        <FindMe />
      </div>
    </div>
  );
};

export default About;
