import React, { useEffect, useState } from 'react';
import classes from './NewAboutUs.module.css';
import Navbar from '../components/HomeNavbar';
import AboutCard from '../components/AboutCard';
import TeamData from '../Data/AboutUsData';
import Footer from '../components/Footer';
import { useMediaQuery } from 'react-responsive';

import DomainTemplate from '../components/DomainTemplate';
import HamsburgerNavbar from '../components/HamsburgerNavbar';

const NewAboutUs = () => {
    const isLargeScreen = useMediaQuery({ minWidth: 1024 });
    return (
        <div className={`${classes.aboutusbg} bg-[#FFC332] relative overflow-x-hidden`}>
            <Navbar />
            { isLargeScreen &&
                <div className=''>
                <img src='https://d3lhw1p67h4h5r.cloudfront.net/leftAbout.gif' alt='leftimg' className='absolute z-10 h-46 w-40'/>
                <img src='https://d3lhw1p67h4h5r.cloudfront.net/hello1.gif' alt='hello' className='absolute z-10 left-[80px] top-[140px] h-46 w-40'></img>
            </div> 
            }
            
            <HamsburgerNavbar />
            <div className="lg:mt-40 mt-10 ">
                <p className={`lg:hidden text-4xl font-grobold text-white mb-10 drop-shadow-[0_0_4.8px_#5C2E00]`}>About us</p>
                {/* <div className=""> */}
                <DomainTemplate data={TeamData.mentors} />
                <DomainTemplate data={TeamData.heads} />
                <DomainTemplate data={TeamData.council} />
                { isLargeScreen &&
                    <div className='relative'>
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/About_character_leftFace.gif' alt='rightimg' className='absolute z-10 h-46 w-40 bottom-[0px] right-0'/>
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/SecondAbout.gif' alt='hello' className='absolute z-10 right-[60px] bottom-[160px] h-46 w-40'></img>
                    </div> 
                }
                <DomainTemplate data={TeamData.creative} />
                <DomainTemplate data={TeamData.development} />
                { isLargeScreen &&
                    <div className='relative'>
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/leftAbout.gif' alt='leftimg' className='absolute z-10 h-46 w-40 bottom-[-100px] left-0'/>
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/thirdAbout.gif' alt='hello' className='absolute z-10 left-[65px] bottom-[65px] h-46 w-40'></img>
                    </div> 
                }
                <DomainTemplate data={TeamData.coverage} />
                <DomainTemplate data={TeamData.artist} />
                { isLargeScreen &&
                    <div className='relative'>
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/About_character_leftFace.gif' alt='rightimg' className='absolute z-10 h-46 w-40 bottom-[100px] right-0'/>
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/ForthAbout.gif' alt='hello' className='absolute z-10 right-[60px] bottom-[260px] h-46 w-40'></img>
                    </div> 
                }
                <DomainTemplate data={TeamData.sponsorship} />
                <DomainTemplate data={TeamData.events} />
                { isLargeScreen &&
                    <div className='relative'>
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/leftAbout.gif' alt='leftimg' className='absolute z-10 h-46 w-40 bottom-[15px] left-0'/>
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/FifthAbout.gif' alt='hello' className='absolute z-10 left-[60px] bottom-[175px] h-46 w-40'></img>
                    </div> 
                }

                <DomainTemplate data={TeamData.accommodation} />
            </div>
            <Footer />
            {isLargeScreen && <img src='https://d3lhw1p67h4h5r.cloudfront.net/About_character_leftFace.gif' alt='leftimg' className='absolute z-10 h-46 w-40 bottom-[15px] right-[300px]'/>}
            <div className="absolute hidden top-[105px] left-2 w-[120px] h-[195px]">
                <img src='https://d3lhw1p67h4h5r.cloudfront.net/leftAbout.gif' alt="" className="w-full h-full" />
                <div className="absolute -top-[7px] -right-[110px] w-[220px] h-[105px]">
                    <img src='https://d3lhw1p67h4h5r.cloudfront.net/hello1.gif' alt="" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default NewAboutUs;
