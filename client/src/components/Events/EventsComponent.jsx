import React from 'react'

import EventCard from './EventsCards';
import HomeNavbar from '../HomeNavbar';
import RegisterComponent from './RegisterComponent';
import Footer from '../Footer';
import HamsburgerNavbar from '../HamsburgerNavbar';

import classes from './Cards.module.css';

import { eventsData } from '../../Data/EventsData';

import wintext from "../../assets/EventsImages/GIF/WinText.gif"
import heretext from "../../assets/EventsImages/GIF/HereText.svg"



const Pronites = eventsData.filter(item => item.category === 'Pronites')[0]
    .data;
const DanceEvents = eventsData.filter(
    item => item.category === 'DanceEvents',
)[0].data;
const derule = eventsData.filter(
    item => item.category === 'DanceEvents',
)[0].Rulebook;
const SpeakingArts = eventsData.filter(
    item => item.category === 'SpeakingArts',
)[0].data;
const sarule = eventsData.filter(
    item => item.category === 'SpeakingArts',
)[0].Rulebook;
const DramaEvents = eventsData.filter(
    item => item.category === 'DramaEvents',
)[0].data;
const drrule = eventsData.filter(
    item => item.category === 'DramaEvents',
)[0].Rulebook;
const MusicEvents = eventsData.filter(
    item => item.category === 'MusicEvents',
)[0].data;
const merule = eventsData.filter(
    item => item.category === 'MusicEvents',
)[0].Rulebook;
const photographyEvents = eventsData.filter(
    item => item.category === 'photographyEvents',
)[0].data;
const perule = eventsData.filter(
    item => item.category === 'photographyEvents',
)[0].Rulebook;
const ArtEvents = eventsData.filter(item => item.category === 'ArtEvents')[0]
    .data;
const aerule = eventsData.filter(item => item.category === 'ArtEvents')[0]
    .Rulebook;
const QuizEvents = eventsData.filter(item => item.category === 'QuizEvents')[0]
    .data;
const qerule = eventsData.filter(item => item.category === 'QuizEvents')[0]
    .data;
const FashionEvents = eventsData.filter(
    item => item.category === 'FashionEvents',
)[0].data;
const ferule = eventsData.filter(
    item => item.category === 'FashionEvents',
)[0].Rulebook;
const NukkadEvents = eventsData.filter(
    item => item.category === 'NukkadEvents',
)[0].data;
const nukkrule = eventsData.filter(
    item => item.category === 'NukkadEvents',
)[0].Rulebook;
const SocialEvents = eventsData.filter(
    item => item.category === 'SocialEvents',
)[0].data;
const serule = eventsData.filter(
    item => item.category === 'SocialEvents',
)[0].Rulebook;
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
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>Artist Lineup</h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
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
                                        Prize=""
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
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Dance Events
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
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
                            src={heretext}
                            className="lg:top-[100px] w-1/3"
                            alt=""
                        />
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/DanceEvent1.gif' className="w-1/4" alt="" />
                    </div>
                    <RegisterComponent rulebook={derule}/>
                </div>
                <div
                    className={`${classes.EventsDiv} mb-12 py-12   flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Speaking Arts
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
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
                    <RegisterComponent rulebook={sarule}/>
                </div>
                <div className={`${classes.EventsDiv} py-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Drama Events
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {DramaEvents.map(item => {
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
                    <RegisterComponent rulebook={drrule}/>
                </div>
            </div>
            <div className={` ${classes.EventBG2}  h-full bg-cover`}>
                <div className="h-12"></div>
                <div
                    className={`${classes.EventsDiv} relative mb-12 py-12  flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Music Events
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {MusicEvents.map(item => {
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
                    <div className="absolute bottom-0 lg:right-0 right-2 flex flex-col items-end w-1/2 ">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/FunText.gif'
                            className="lg:top-[100px] w-1/3"
                            alt=""
                        />
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/EventFlip.gif' className="w-1/4" alt="" />
                    </div>
                    <RegisterComponent rulebook={merule}/>
                </div>
                <div
                    className={`${classes.EventsDiv} mb-12 py-12 flex flex-col`}
                >
                    <div className="flex flex-row lg:gap-4 gap-1">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Photography Events
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {photographyEvents.map(item => {
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
                    <RegisterComponent rulebook={perule}/>
                </div>
                <div
                    className={`${classes.EventsDiv} relative mb-12 py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Art Events
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {ArtEvents.map(item => {
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
                            src='https://d3lhw1p67h4h5r.cloudfront.net/Danvinci.gif'
                            className="lg:top-[100px] w-1/3"
                            alt=""
                        />
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/DanceEvent1.gif' className="w-1/4" alt="" />
                    </div>
                    <RegisterComponent rulebook={aerule}/>
                </div>
                <div className={`${classes.EventsDiv} py-12 flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Quizzing Events
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {QuizEvents.map(item => {
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
                    <RegisterComponent rulebook={qerule}/>
                </div>
            </div>
            <div className={` ${classes.EventBG3} h-full bg-cover`}>
                <div className="h-12"></div>
                <div
                    className={`${classes.EventsDiv} relative mb-12 py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Fashion Events
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full   flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {FashionEvents.map(item => {
                            return (
                                <div key={Math.random()} className="px-16">
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
                            src={wintext}
                            className="lg:top-[100px] w-1/3"
                            alt=""
                        />
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/DanceEvent1.gif' className="w-1/4" alt="" />
                    </div>
                    <RegisterComponent rulebook={ferule}/>
                </div>
                <div
                    className={`${classes.EventsDiv} mb-12 py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Nukkad Events
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {NukkadEvents.map(item => {
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
                    <RegisterComponent rulebook={nukkrule}/>
                </div>
                <div
                    className={`${classes.EventsDiv} relative mb-12 py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Social Events
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {SocialEvents.map(item => {
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
                    <div className="absolute bottom-0 flex flex-col lg:right-0 right-2 items-end sm:mr-4 w-1/2">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/FunText.gif'
                            className="lg:top-[100px] w-1/3"
                            alt=""
                        />
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/EventFlip.gif' className="w-1/4" alt="" />
                    </div>
                    <RegisterComponent rulebook={serule}/>

                </div>

                {/*
                 */}

                <div
                    className={`${classes.EventsDiv} relative py-12 flex flex-col`}
                >
                    <div className="flex flex-row gap-4">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Exciting Pursuits
                        </h1>
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp'
                            className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px]"
                        ></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {ExcitingEvents.map(item => {
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
                            src='https://d3lhw1p67h4h5r.cloudfront.net/Cool.webp'
                            className="lg:top-[100px] lg:w-1/4 w-1/3"
                            alt=""
                        />
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/DanceEvent1.gif' className="w-1/4" alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EventsComponent;
