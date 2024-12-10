import React from 'react';
import KnowMe from './KnowMe';
import imageSrc from './image1.jpg';

function WhoAmI() {
  return (
    <div
      id="knowmepart"
      className="relative h-screen w-screen bg-cover bg-center flex p-24"
      style={{
        background:
          'linear-gradient(45deg, rgba(18, 0, 72, 0.76), rgba(0, 0, 0, 0.68)), rgba(0, 0, 0, 0.675)',
      }}
    >
      <div className="knowcontent p-2">
        <KnowMe />
      </div>
      <div className="knowimage flex items-center justify-center mb-20" style={{ width: '40%' }}>
        <img
          src={imageSrc}
          alt="Image"
          style={{ width: '300px', height: '300px' }}
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default WhoAmI;
