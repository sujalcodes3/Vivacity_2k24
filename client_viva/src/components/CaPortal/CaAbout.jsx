import React from 'react';
import WhyCA from './WhyCA';
import Incentives from './Incentives';
import FAQ from './FAQ';
function CaAbout() {
  return (
    <div className="px-6 sm:px-12 md:px-16">
      <div id="aboutus" className="text-white">
        <h1 className="text-3xl md:text-5xl mb-5">About Us</h1>
        <p className="text-lg md:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          perferendis veniam corrupti illo veritatis. Qui mollitia velit
          similique officiis, sunt molestiae earum harum totam saepe. Deserunt
          fugiat quae sequi possimus animi deleniti laudantium voluptates qui
          esse commodi consequatur necessitatibus suscipit iure, sapiente,
          similique quaerat fugit hic quisquam debitis voluptate natus! Nostrum,
          voluptas! Exercitationem, voluptatum tempore facere consequatur error
          repellat alias autem necessitatibus, iure, quidem sapiente quam esse
          placeat voluptas quo a culpa consequuntur accusantium eveniet
          assumenda expedita aliquam. Possimus itaque beatae labore temporibus
          fugit ut rerum iure, quam vel! Obcaecati placeat veritatis eos sunt
          fuga possimus atque voluptatem, modi saepe.
        </p>
      </div>
      <WhyCA />
      <Incentives />
      <FAQ />
    </div>
  );
}

export default CaAbout;
