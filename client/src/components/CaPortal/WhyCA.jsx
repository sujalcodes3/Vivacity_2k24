// import React from 'react';
// import networking from '../../assets/networking.jpg';
// import marketing from '../../assets/marketing.jpg';
// import strategy from '../../assets/strategy.jpg';
// import communication from '../../assets/communication.jpg';

// function WhyCA() {
//     return (
//         <div id="WhyCA" className="text-white mt-36 px-6 sm:px-12 md:px-16">
//             <h1 className="text-3xl md:text-5xl mb-16">
//                 Why Campous Ambassador?
//             </h1>
//             <div>
//                 <div className="flex md:flex-row flex-col w-full mx-auto mb-14">
//                     <div className="md:w-6/12 w-full px-0 md:px-5 md:order-1 order-2 text-left py-2">
//                         <h1 className="mb-2 text-xl sm:text-2xl">Networking</h1>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing
//                             elit. Amet ducimus eius velit? Sed aliquid, suscipit
//                             esse repellendus ad tempora quibusdam amet similique
//                             cupiditate, voluptate adipisci quo inventore!
//                             Accusantium corporis recusandae quae voluptas
//                             praesentium consectetur id iste mollitia nam
//                             deleniti a maiores et, quam veritatis deserunt error
//                             possimus distinctio nisi porro!
//                         </p>
//                     </div>
//                     <div className="md:w-6/12 w-full md:order-2 order-1">
//                         <img
//                             className="w-full h-full"
//                             src={networking}
//                             alt=""
//                         />
//                     </div>
//                 </div>

//                 <div className="flex md:flex-row flex-col w-full mx-auto mb-14">
//                     <div className="md:w-6/12 w-full md:order-1 order-1">
//                         <img className="w-full h-full" src={strategy} alt="" />
//                     </div>
//                     <div className="md:w-6/12 w-full px-0 md:px-5 md:order-2 order-2 text-left py-2">
//                         <h1 className="mb-2 text-xl sm:text-2xl">
//                             Strategy development
//                         </h1>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing
//                             elit. Amet ducimus eius velit? Sed aliquid, suscipit
//                             esse repellendus ad tempora quibusdam amet similique
//                             cupiditate, voluptate adipisci quo inventore!
//                             Accusantium corporis recusandae quae voluptas
//                             praesentium consectetur id iste mollitia nam
//                             deleniti a maiores et, quam veritatis deserunt error
//                             possimus distinctio nisi porro!
//                         </p>
//                     </div>
//                 </div>
//                 <div className="flex md:flex-row flex-col w-full mx-auto mb-14">
//                     <div className="md:w-6/12 w-full px-0 md:px-5 md:order-1 order-2 text-left py-2">
//                         <h1 className="mb-2 text-xl sm:text-2xl">Marketing</h1>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing
//                             elit. Amet ducimus eius velit? Sed aliquid, suscipit
//                             esse repellendus ad tempora quibusdam amet similique
//                             cupiditate, voluptate adipisci quo inventore!
//                             Accusantium corporis recusandae quae voluptas
//                             praesentium consectetur id iste mollitia nam
//                             deleniti a maiores et, quam veritatis deserunt error
//                             possimus distinctio nisi porro!
//                         </p>
//                     </div>
//                     <div className="md:w-6/12 w-full md:order-2 order-1">
//                         <img className="w-full h-full" src={marketing} alt="" />
//                     </div>
//                 </div>
//                 <div className="flex md:flex-row flex-col w-full mx-auto mb-14">
//                     <div className="md:w-6/12 w-full md:order-1 order-1">
//                         <img
//                             className="w-full h-full"
//                             src={communication}
//                             alt=""
//                         />
//                     </div>
//                     <div className="md:w-6/12 w-full px-0 md:px-5 md:order-2 order-2 text-left py-2">
//                         <h1 className="mb-2 text-xl sm:text-2xl">
//                             Communication
//                         </h1>
//                         <p>
//                             Lorem ipsum dolor sit amet consectetur adipisicing
//                             elit. Amet ducimus eius velit? Sed aliquid, suscipit
//                             esse repellendus ad tempora quibusdam amet similique
//                             cupiditate, voluptate adipisci quo inventore!
//                             Accusantium corporis recusandae quae voluptas
//                             praesentium consectetur id iste mollitia nam
//                             deleniti a maiores et, quam veritatis deserunt error
//                             possimus distinctio nisi porro!
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default WhyCA;

import React, { useEffect } from 'react';
import data from './Data/IncentivesData';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './CaPortalPage.css';

const WhyCA = () => {
    useEffect(() => {
        const items = document.querySelectorAll('.timeline li');

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight) &&
                rect.right <=
                    (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        function handleScroll() {
            items.forEach(item => {
                if (isElementInViewport(item)) {
                    item.classList.add('in-view');
                } else {
                    item.classList.remove('in-view');
                }
            });
        }

        handleScroll(); // Call the function on initial load
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="timeline w-full px-6 sm:px-12 md:px-16  py-20">
            <h1 className="text-3xl text-white md:text-5xl mb-10">Why CA?</h1>
            <ul>
                {data.map(e => (
                    <li>
                        <div className="bg-[#2b2a2afa] text-white  backdrop-blur-xl opacity-50 h-[250px] flex md:w-[300px] lg:w-[450px] xl:w-[500px]  relative bottom-0 p-4 rounded-xl ">
                            {/* <div className="w-[40%]">
                                <img src={e.image} alt="" className="h-full" />
                            </div> */}
                            <div className="text-center text-lg leading-6 px-2 items-center flex">
                                <p>{e.content}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {/* <Timeline position="alternate-reverse">
                {data.map(e => (
                    <TimelineItem className='timeline'>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <li>
                                <div className="flex h-[250px] w-[500px] relative bottom-0 p-4 bg-white rounded-sm ">
                                    <div className="w-[40%]">
                                        <img
                                            src={e.image}
                                            alt=""
                                            className="h-full"
                                        />
                                    </div>
                                    <div className="text-center w-[60%] text-lg leading-6 px-2 items-center flex">
                                        <p>{e.content}</p>
                                    </div>
                                </div>
                            </li>
                        </TimelineContent>
                    </TimelineItem>
                ))} */}
            {/* </Timeline> */}
        </section>
    );
};

export default WhyCA;
