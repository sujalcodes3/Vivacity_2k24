import React from 'react'
import networking from "../../assets/networking.jpg";
import marketing from "../../assets/marketing.jpg";
import strategy from "../../assets/strategy.jpg";
import communication from "../../assets/communication.jpg";


function WhyCA() {
  return (
    <div id="WhyCA" className="text-white mt-36">
       <h1 className="text-3xl md:text-5xl mb-16">Why Campous Ambassador?</h1>
        <div>

          <div className="flex md:flex-row flex-col w-full mx-auto mb-14">
            <div className="md:w-6/12 w-full px-0 md:px-5 md:order-1 order-2 text-left py-2">
              <h1 className="mb-2 text-xl sm:text-2xl">Networking</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ducimus eius velit? Sed aliquid, suscipit esse repellendus ad
                tempora quibusdam amet similique cupiditate, voluptate adipisci
                quo inventore! Accusantium corporis recusandae quae voluptas
                praesentium consectetur id iste mollitia nam deleniti a maiores
                et, quam veritatis deserunt error possimus distinctio nisi
                porro!
              </p>
            </div>
            <div className="md:w-6/12 w-full md:order-2 order-1">
              <img className='w-full h-full' src={networking} alt="" />
            </div>
          </div>

          
          <div className="flex md:flex-row flex-col w-full mx-auto mb-14">
          <div className="md:w-6/12 w-full md:order-1 order-1">
              <img className='w-full h-full' src={strategy} alt="" />
            </div>
            <div className="md:w-6/12 w-full px-0 md:px-5 md:order-2 order-2 text-left py-2">
              <h1 className="mb-2 text-xl sm:text-2xl">Strategy development</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ducimus eius velit? Sed aliquid, suscipit esse repellendus ad
                tempora quibusdam amet similique cupiditate, voluptate adipisci
                quo inventore! Accusantium corporis recusandae quae voluptas
                praesentium consectetur id iste mollitia nam deleniti a maiores
                et, quam veritatis deserunt error possimus distinctio nisi
                porro!
              </p>
            </div>
           
          </div>
          <div className="flex md:flex-row flex-col w-full mx-auto mb-14">
            <div className="md:w-6/12 w-full px-0 md:px-5 md:order-1 order-2 text-left py-2">
              <h1 className="mb-2 text-xl sm:text-2xl">Marketing</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ducimus eius velit? Sed aliquid, suscipit esse repellendus ad
                tempora quibusdam amet similique cupiditate, voluptate adipisci
                quo inventore! Accusantium corporis recusandae quae voluptas
                praesentium consectetur id iste mollitia nam deleniti a maiores
                et, quam veritatis deserunt error possimus distinctio nisi
                porro!
              </p>
            </div>
            <div className="md:w-6/12 w-full md:order-2 order-1">
              <img className='w-full h-full' src={marketing} alt="" />
            </div>
          </div>
          <div className="flex md:flex-row flex-col w-full mx-auto mb-14">
          <div className="md:w-6/12 w-full md:order-1 order-1">
              <img className='w-full h-full' src={communication} alt="" />
            </div>
            <div className="md:w-6/12 w-full px-0 md:px-5 md:order-2 order-2 text-left py-2">
              <h1 className="mb-2 text-xl sm:text-2xl">Communication</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ducimus eius velit? Sed aliquid, suscipit esse repellendus ad
                tempora quibusdam amet similique cupiditate, voluptate adipisci
                quo inventore! Accusantium corporis recusandae quae voluptas
                praesentium consectetur id iste mollitia nam deleniti a maiores
                et, quam veritatis deserunt error possimus distinctio nisi
                porro!
              </p>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default WhyCA
