import React, { useEffect, useState } from 'react';
import classes from './NewAboutUs.module.css';
import Navbar from '../components/HomeNavbar';
import AboutCard from '../components/AboutCard';
import TeamData from '../Data/AboutUsData';
import Footer from '../components/Footer';
import DomainTemplate from '../components/DomainTemplate';
import aboutleft from '../assets/leftAbout.gif';
import aboutRight from '../assets/About_character_leftFace.gif'
import hello1 from '../assets/hello1.gif';
import Star from '../components/Star';
import HamsburgerNavbar from '../components/HamsburgerNavbar';
import { useMediaQuery } from 'react-responsive';
import secondAbout from '../assets/SecondAbout.gif';
import thirdAbout from '../assets/thirdAbout.gif';
import forthAbout from '../assets/ForthAbout.gif';
import fifthAbout from '../assets/FifthAbout.gif';
// import "./NewHome.css"

const NewAboutUs = () => {
    const isLargeScreen = useMediaQuery({ minWidth: 1024 });
    return (
        <div className={`${classes.aboutusbg} bg-[#FFC332] relative overflow-x-hidden`}>
            <Navbar />
            { isLargeScreen &&
                <div className=''>
                <img src={aboutleft} alt='leftimg' className='absolute z-10 h-46 w-40'/>
                <img src={hello1} alt='hello' className='absolute z-10 left-[80px] top-[140px] h-46 w-40'></img>
            </div> 
            }
            
            <HamsburgerNavbar />
            <div className="lg:mt-40 mt-10 ml-8">
                {/* <div className=""> */}
                <DomainTemplate data={TeamData.mentors} />
                <DomainTemplate data={TeamData.heads} />
                <DomainTemplate data={TeamData.council} />
                { isLargeScreen &&
                    <div className='relative'>
                        <img src={aboutRight} alt='rightimg' className='absolute z-10 h-46 w-40 bottom-[0px] right-0'/>
                        <img src={secondAbout} alt='hello' className='absolute z-10 right-[60px] bottom-[160px] h-46 w-40'></img>
                    </div> 
                }
                <DomainTemplate data={TeamData.creative} />
                <DomainTemplate data={TeamData.development} />
                { isLargeScreen &&
                    <div className='relative'>
                        <img src={aboutleft} alt='leftimg' className='absolute z-10 h-46 w-40 bottom-[-100px] left-0'/>
                        <img src={thirdAbout} alt='hello' className='absolute z-10 left-[65px] bottom-[65px] h-46 w-40'></img>
                    </div> 
                }
                <DomainTemplate data={TeamData.coverage} />
                <DomainTemplate data={TeamData.artist} />
                { isLargeScreen &&
                    <div className='relative'>
                        <img src={aboutRight} alt='rightimg' className='absolute z-10 h-46 w-40 bottom-[100px] right-0'/>
                        <img src={forthAbout} alt='hello' className='absolute z-10 right-[60px] bottom-[260px] h-46 w-40'></img>
                    </div> 
                }
                <DomainTemplate data={TeamData.sponsorship} />
                <DomainTemplate data={TeamData.events} />
                { isLargeScreen &&
                    <div className='relative'>
                        <img src={aboutleft} alt='leftimg' className='absolute z-10 h-46 w-40 bottom-[15px] left-0'/>
                        <img src={fifthAbout} alt='hello' className='absolute z-10 left-[60px] bottom-[175px] h-46 w-40'></img>
                    </div> 
                }

                <DomainTemplate data={TeamData.accommodation} />
            </div>
            <Footer />
            <img src={aboutRight} alt='leftimg' className='absolute z-10 h-46 w-40 bottom-[15px] right-[300px]'/>
            <div className="absolute hidden top-[105px] left-2 w-[120px] h-[195px]">
                <img src={aboutleft} alt="" className="w-full h-full" />
                <div className="absolute -top-[7px] -right-[110px] w-[220px] h-[105px]">
                    <img src={hello1} alt="" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default NewAboutUs;
