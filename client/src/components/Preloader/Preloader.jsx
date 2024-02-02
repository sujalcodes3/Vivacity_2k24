import React, { useEffect } from 'react';
import * as bodymovin from 'bodymovin'; // Modified import statement
import './Preloader.css';

export default function PreLoader(){
  useEffect(() => {
    const animData = {
      wrapper: document.querySelector('#animationWindow'),
      animType: 'svg',
      loop: true,
      prerender: true,
      autoplay: true,
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/LEGO_loader.json'
    };
    const anim = bodymovin.loadAnimation(animData);
    anim.setSpeed(3.4);

    // Clean up function
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className="bg-yellow-300 h-screen flex justify-center items-center">
    <div id="animationWindow" className="w-full h-full">
      {/* Animation will be rendered here */}
    </div>
  </div>
  );
};