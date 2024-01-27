// import React from 'react'
// Pronite Images
import P1 from '../../assets/EventsImages/P1.png';
import P2 from '../../assets/EventsImages/P2.png';
import P3 from '../../assets/EventsImages/P3.png';
import P4 from '../../assets/EventsImages/P4.png';
import P5 from '../../assets/EventsImages/P5.png';
import P6 from '../../assets/EventsImages/P6.png';
// Dance Events Images
import D1 from '../../assets/EventsImages/D1.png';
import D2 from '../../assets/EventsImages/D2.png';
import D3 from '../../assets/EventsImages/D3.png';
import D4 from '../../assets/EventsImages/D4.png';
import D5 from '../../assets/EventsImages/D5.png';
// Speaking Art Events
import SA1 from '../../assets/EventsImages/SA1.png';
import SA2 from '../../assets/EventsImages/SA2.png';
import SA3 from '../../assets/EventsImages/SA3.png';
import SA4 from '../../assets/EventsImages/SA4.png';
import SA5 from '../../assets/EventsImages/SA5.png';
import SA6 from '../../assets/EventsImages/SA6.png';
// Drama Event Images
import Drama1 from '../../assets/EventsImages/Drama1.png';
import Drama2 from '../../assets/EventsImages/Drama2.png';
import Drama3 from '../../assets/EventsImages/Drama3.png';
// Music Event Images
import Music1 from '../../assets/EventsImages/Music1.png';
import Music2 from '../../assets/EventsImages/Music2.png';
import Music3 from '../../assets/EventsImages/Music3.png';
import Music4 from '../../assets/EventsImages/Music4.png';
import Music5 from '../../assets/EventsImages/Music5.png';
// Photography Event Images
import Photo1 from '../../assets/EventsImages/Photo1.png';
import Photo2 from '../../assets/EventsImages/Photo2.png';
import Photo3 from '../../assets/EventsImages/Photo3.png';
import Photo4 from '../../assets/EventsImages/Photo4.png';
import Photo5 from '../../assets/EventsImages/Photo5.png';
import Photo6 from '../../assets/EventsImages/Photo6.png';
// Art Event Images
import Art1 from '../../assets/EventsImages/Art1.png';
import Art2 from '../../assets/EventsImages/Art3.png';
import Art3 from '../../assets/EventsImages/Art4.png';
import Art4 from '../../assets/EventsImages/Art5.png';
import Art5 from '../../assets/EventsImages/Art6.png';
// Quiz Event Images
import Quiz1 from '../../assets/EventsImages/Quiz1.png';
import Quiz2 from '../../assets/EventsImages/Quiz2.png';
// Other Events Images
import Fashion1 from '../../assets/EventsImages/Fashion1.png';
import Nukkad from '../../assets/EventsImages/Nukaad.png';
import Sahyog from '../../assets/EventsImages/Sahyog.png';
import Disco from '../../assets/EventsImages/Disco.png';
import Prom from '../../assets/EventsImages/PRom.png';
import Jamming from '../../assets/EventsImages/Jamming.png';
import Spectrum from '../../assets/EventsImages/Spectrum.png';

import EventCard from './EventsCards';
import classes from './Cards.module.css';
import LeftStar from '../../assets/EventsImages/LeftStar.png';
import RightStar from '../../assets/EventsImages/RightStar.png';

import bg1 from '../../assets/EventsImages/bg1.png';
import bg2 from '../../assets/EventsImages/bg2.png';
import bg3 from '../../assets/EventsImages/bg3.png';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import HomeNavbar from '../HomeNavbar';

import DanceEvent1 from '../../assets/EventsImages/GIF/DanceEvent1.gif';
import EventFlip from '../../assets/EventsImages/GIF/EventFlip.gif';
import DanceEventText from '../../assets/EventsImages/GIF/DanceEventText.gif';
import Danvinci from '../../assets/EventsImages/GIF/Danvinci.gif';
import FunText from '../../assets/EventsImages/GIF/FunText.gif';
import Cool from '../../assets/EventsImages/GIF/Cool.png';

import RegisterComponent from './RegisterComponent';
import Footer from '../Footer';
import HamsburgerNavbar from '../HamsburgerNavbar';

import { eventsData } from '../../Data/EventsData';

const Pronites = eventsData.filter(item => item.category === 'Pronites')[0]
    .data;
const DanceEvents = eventsData.filter(
    item => item.category === 'DanceEvents',
)[0].data;
const SpeakingArts = eventsData.filter(
    item => item.category === 'SpeakingArts',
)[0].data;
const DramaEvents = eventsData.filter(
    item => item.category === 'DramaEvents',
)[0].data;
const MusicEvents = eventsData.filter(
    item => item.category === 'MusicEvents',
)[0].data;
const photographyEvents = eventsData.filter(
    item => item.category === 'photographyEvents',
)[0].data;
const ArtEvents = eventsData.filter(item => item.category === 'ArtEvents')[0]
    .data;
const QuizEvents = eventsData.filter(item => item.category === 'QuizEvents')[0]
    .data;
const FashionEvents = eventsData.filter(
    item => item.category === 'FashionEvents',
)[0].data;
const NukkadEvents = eventsData.filter(
    item => item.category === 'NukkadEvents',
)[0].data;
const SocialEvents = eventsData.filter(
    item => item.category === 'SocialEvents',
)[0].data;
const ExcitingEvents = eventsData.filter(
    item => item.category === 'ExcitingEvents',
)[0].data;

const EventsComponent = () => {
    return (
        <div
            className={`${classes.EventMainBG} h-full w-full bg-cover bg-center relative overflow-x-hidden`}
        >
            <div className={` ${classes.EventBG1} h-full bg-cover `}>
                <HomeNavbar />
                <HamsburgerNavbar />
                <div
                    className={`${classes.EventsDiv} mb-12 py-12  flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>Pronites</h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {Pronites.map(item => {
                            return (
                                <div key={Math.random()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    className={`${classes.EventsDiv} mb-12 py-12 relative  flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Dance Events
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {DanceEvents.map(item => {
                            return (
                                <div key={Math.random()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute bottom-0 left-4 lg:left-[40px] w-1/2">
                        <img
                            src={DanceEventText}
                            className="lg:top-[100px] w-1/3"
                            alt=""
                        />
                        <img src={DanceEvent1} className="w-1/4" alt="" />
                    </div>
                    <RegisterComponent />
                </div>
                <div
                    className={`${classes.EventsDiv} mb-12 py-12   flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Speaking Arts
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {SpeakingArts.map(item => {
                            return (
                                <div key={Math.random()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <RegisterComponent />
                </div>
                <div className={`${classes.EventsDiv} py-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Drama Events
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {DramaEvents.map(item => {
                            return (
                                <div key={new Date()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <RegisterComponent />
                </div>
            </div>
            <div className={` ${classes.EventBG2}  h-full bg-cover`}>
                <div className="h-12"></div>
                <div
                    className={`${classes.EventsDiv} relative mb-12 py-12  flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Music Events
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {MusicEvents.map(item => {
                            return (
                                <div key={new Date()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute bottom-0 lg:right-0 right-2 flex flex-col items-end w-1/2 ">
                        <img
                            src={DanceEventText}
                            className="lg:top-[100px] w-1/3"
                            alt=""
                        />
                        <img src={EventFlip} className="w-1/4" alt="" />
                    </div>
                    <RegisterComponent />
                </div>
                <div
                    className={`${classes.EventsDiv} mb-12 py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Photography Events
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {photographyEvents.map(item => {
                            return (
                                <div key={new Date()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <RegisterComponent />
                </div>
                <div
                    className={`${classes.EventsDiv} relative mb-12 py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Art Events
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {ArtEvents.map(item => {
                            return (
                                <div key={new Date()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute bottom-0 left-4 lg:left-[40px] w-1/2">
                        <img
                            src={Danvinci}
                            className="lg:top-[100px] w-1/3"
                            alt=""
                        />
                        <img src={DanceEvent1} className="w-1/4" alt="" />
                    </div>
                    <RegisterComponent />
                </div>
                <div className={`${classes.EventsDiv} py-12 flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Quizzing Events
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {QuizEvents.map(item => {
                            return (
                                <div key={new Date()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <RegisterComponent />
                </div>
            </div>
            <div className={` ${classes.EventBG3} h-full bg-cover`}>
                <div className="h-12"></div>
                <div
                    className={`${classes.EventsDiv} relative mb-12 py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Fashion Events
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full   flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {FashionEvents.map(item => {
                            return (
                                <div key={new Date()} className="px-16">
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute bottom-0 left-4 lg:left-[40px] w-1/2">
                        <img
                            src={DanceEventText}
                            className="lg:top-[100px] w-1/3"
                            alt=""
                        />
                        <img src={DanceEvent1} className="w-1/4" alt="" />
                    </div>
                    <RegisterComponent />
                </div>
                <div
                    className={`${classes.EventsDiv} mb-12 py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Nukkad Events
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {NukkadEvents.map(item => {
                            return (
                                <div key={new Date()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <RegisterComponent />
                </div>
                <div
                    className={`${classes.EventsDiv} relative mb-12 py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Social Events
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {SocialEvents.map(item => {
                            return (
                                <div key={new Date()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute bottom-0 flex flex-col lg:right-0 right-2 items-end sm:mr-4 w-1/2">
                        <img
                            src={FunText}
                            className="lg:top-[100px] w-1/3"
                            alt=""
                        />
                        <img src={EventFlip} className="w-1/4" alt="" />
                    </div>
                </div>

                {/*
                 */}

                <div
                    className={`${classes.EventsDiv} relative py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src={LeftStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Exciting Pursuits
                        </h1>
                        <img
                            src={RightStar}
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {ExcitingEvents.map(item => {
                            return (
                                <div key={new Date()}>
                                    <EventCard
                                        Day={item.Day}
                                        Title={item.Title}
                                        Color={item.Color}
                                        Desc={item.Desc}
                                        Img={item.Img}
                                        Prize={item.Prize}
                                        PrizeDesc={item.PrizeDesc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="absolute bottom-0 left-4 lg:left-[40px] w-1/2">
                        <img
                            src={Cool}
                            className="lg:top-[100px] lg:w-1/4 w-1/3"
                            alt=""
                        />
                        <img src={DanceEvent1} className="w-1/4" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EventsComponent;
