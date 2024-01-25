import React from 'react';
import classes from './NewAboutUs.module.css';
import Navbar from '../components/HomeNavbar';
import AboutCard from '../components/AboutCard';
import TeamData from '../Data/AboutUsData';
import Footer from '../components/Footer';
import DomainTemplate from '../components/DomainTemplate';
import aboutleft from "../assets/leftAbout.gif"
import hello1 from "../assets/hello1.gif"
import Star from '../components/Star';

// import "./NewHome.css"

const NewAboutUs = () => {
    return (
        <div className={`${classes.aboutusbg} bg-[#FFC332] relative`}>
            <Navbar />
            <div className="mt-20">
                <DomainTemplate data={TeamData.mentors} />
                <DomainTemplate data={TeamData.heads} />
                <DomainTemplate data={TeamData.council} />
                <DomainTemplate data={TeamData.creative} />
                <DomainTemplate data={TeamData.development} />
                <DomainTemplate data={TeamData.coverage} />
                <DomainTemplate data={TeamData.events} />
                <DomainTemplate data={TeamData.artist} />
                <DomainTemplate data={TeamData.sponsorship} />
                <DomainTemplate data={TeamData.accommodation} />
            </div>
            <Footer />
            <div className='absolute top-[105px] left-2 w-[120px] h-[195px]'>
            <img src={aboutleft} alt="" className='w-full h-full'/>
            <div className='absolute -top-[7px] -right-[110px] w-[220px] h-[105px]'>
            <img src={hello1} alt="" className='w-full h-full'/>
            </div>
            </div>
        </div>
    );
};

export default NewAboutUs;
