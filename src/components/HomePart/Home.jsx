import React from 'react';
import Div1 from './Div1';
import imageSrc from './image.jpg'; // Import the image from the same directory as Home.jsx


const Home = () => {
  return (
    <div id='homepart' className="relative h-screen w-screen flex bg-cover bg-center" style={{ backgroundImage: "url('https://s3.envato.com/files/c3319b36-9683-4a08-88be-d4cec9e31e8d/inline_image_preview.jpg')" }}>
      <div id='nameAndText' className="w-1/2 flex justify-center items-center" style={{ background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.76), rgba(18, 1, 72, 0.678)), rgba(0, 0, 0, 0.673)' }}>
        <div id='div1' className="text-center text-white p-10">
          <Div1 />
        </div>
      </div>
      <div id='homeimage' className="w-1/2 flex justify-center items-center">
        <img src={imageSrc} alt="Image" className="w-full h-full" />
      </div>
    </div>
    // height = { "500px"} width = { "500px"}
  );
};

export default Home;
