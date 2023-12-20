import React from 'react';
import './Card.css'; // Assuming you save your CSS in a file named Card.css

const Incentives = ({ coverImage,content }) => {
  return (
      <div className='card-par'>
      <div className="card bg-black w-full h-full">
        <div className="wrapper">
          <img src={coverImage} className="cover-image" alt="Cover" />
        </div>
        <div className='character px-10 font-extrabold text-xl text-white'>
          <p>{content}</p>
        </div>
      </div>
      </div>
  );
};

export default Incentives;
