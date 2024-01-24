import React from 'react';
import classes from './NewAboutUs.module.css';
import Navbar from '../components/HomeNavbar';
import AboutCard from '../components/AboutCard';
import TeamData from '../Data/AboutUsData';
import Footer from '../components/Footer';
import DomainTemplate from '../components/DomainTemplate';
import Star from '../components/Star';

// import "./NewHome.css"

const NewAboutUs = () => {
    return (
        <div className={`${classes.aboutusbg} bg-[#FFC332] pt-4 `}>
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

        </div>
    );
};

export default NewAboutUs;
