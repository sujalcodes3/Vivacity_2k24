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
import RuleBook from '../../assets/EventsImages/RuleBook.png';
import Register from '../../assets/EventsImages/Register.png';

import bg1 from '../../assets/EventsImages/bg1.png';
import bg2 from '../../assets/EventsImages/bg2.png';
import bg3 from '../../assets/EventsImages/bg3.png';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import HomeNavbar from '../HomeNavbar';

const Pronites = [
    {
        Title: 'DAY1',
        Day: '9 FEB',
        Desc: 'Film Making Competition: Script, shoot, and edit your way to make your story the most memorable of all!',
        Prize: 'PRIZE POOL 70K',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: P1,
    },
    {
        Title: 'DAY1',
        Day: '9 FEB',
        Desc: 'A photobooth to make these days more memorable. Caution: The nostalgia induced by these pictures is bound to be painful.',
        Prize: '',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: P2,
    },
    {
        Title: 'DAY 2',
        Day: '10 FEB',
        Desc: 'Solve clues, recreate frames, and immortalize moments in this campus-wide photography adventure.',
        Prize: 'PRIZE POOL 40K',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: P3,
    },
    {
        Title: 'DAY 2',
        Day: '10 FEB',
        Desc: 'Pre-defined themes and your lenses against the beautiful canvas of the world. Let your creativity show in this battle of pictures!',
        Prize: 'PRIZE POOL 40K',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: P4,
    },
    {
        Title: 'DAY 3',
        Day: '11 FEB',
        Desc: 'This is a Group Dance Competition. Team Size - Minimum of 8 and maximum of 30 members are allowed in a team with at least 6 and at ',
        Prize: '',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: P5,
    },
    {
        Title: 'DAY 3',
        Day: '11 FEB',
        Desc: 'The best clicks from the best! A showcase of imagination by our photography club: Imagination.',
        Prize: '',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: P6,
    },
];

const DanceEvents = [
    {
        Title: 'Razzmatazz',
        Day: '9 FEB',
        Desc: 'Set the stage on fire as you unleash the rhythm and showcase your choreography in this dance battle.',
        Prize: 'PRIZE CASH 50K',
        PrizeDesc: '& additional worth 50K',
        Color: '#FFF500',
        Img: D1,
    },
    {
        Title: 'street dance',
        Day: '10 FEB',
        Desc: 'Let the streets bear witness to electrifying performances and exhilarating beats. Let your spirits soar with street dance! ',
        Prize: 'PRIZE CASH 25K',
        PrizeDesc: '& additional worth 30K',
        Color: '#00FFF0',
        Img: D2,
    },
    {
        Title: 'Let’s tangle',
        Day: '10 FEB',
        Desc: 'Set the stage on fire as you unleash the rhythm and showcase your choreography in this dance battle.',
        Prize: 'PRIZE POOL 60K',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: D3,
    },
    {
        Title: 'MUDRA',
        Day: '9 FEB',
        Desc: 'Explore the allure of the classical arts! Let light descend onto the stage as you enamor yourself in elegant styles and witness the roots of dance itself!',
        Prize: 'PRIZE POOL 40K',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: D4,
    },
    {
        Title: 'pump it up',
        Day: '10 FEB',
        Desc: 'Let the beats flow and your body move! Engage yourself in solo western performances where rhythm is everything.',
        Prize: 'PRIZE POOL 40K',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: D5,
    },
];

const SpeakingArts = [
    {
        Title: 'duologue',
        Day: '10 FEB',
        Desc: 'Let the verses flow as you engage in blindfolded conversations that journey beyond the superficial!',
        Prize: '',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: SA1,
    },
    {
        Title: 'family fued',
        Day: '11 FEB',
        Desc: 'The classic Steve Harvey show! Come and be a witness to the recreation of one of the most popular reality shows of all time, at Family Feud: the game show!PRIZE POOL 30K',
        Prize: 'PRIZE POOL 30K',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: SA2,
    },
    {
        Title: 'potpourii',
        Day: '9 FEB',
        Desc: 'Let the puns flow and laughter rumble! A battle of puns, and a prize reserved only for the emperor!',
        Prize: 'PRIZE POOL 30K',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: SA3,
    },
    {
        Title: 'dare to spell',
        Day: '10 FEB',
        Desc: 'Show your linguistic prowess in this celestial conquest of spellings. Arm yourself with vocabulary and fight your way to the top. Do you dare?',
        Prize: 'PRIZE POOL 30K',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: SA4,
    },
    {
        Title: 'spotlight',
        Day: '9 FEB',
        Desc: 'Poetry, storytelling, music, or stand-ups! A little something for everyone as you step into the spotlight in Spotlight!',
        Prize: 'PRIZE POOL 45K',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: SA5,
    },
    {
        Title: 'open discussion',
        Day: '10 FEB',
        Desc: 'Diverse voices come together for conversations that run far beyond the norm; may it be rants, confessions, or even the dream you had yesterday, everything goes!',
        Prize: 'PRIZE POOL 30K',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: SA6,
    },
];

const DramaEvents = [
    {
        Title: 'rangshala',
        Day: '10 FEB',
        Desc: 'Write, perform, and present acts that captivate the audience in this showcase of talent and cinematography.',
        Prize: 'PRIZE CASH 35K',
        PrizeDesc: '& additional worth 40k',
        Color: '#FF6B00',
        Img: Drama1,
    },
    {
        Title: 'paddhati',
        Day: '11 FEB',
        Desc: 'You and your character against the world! Let your theatrics run wild in this solo-act-only competition where the only one in the limelight is you!',
        Prize: 'PRIZE POOL 40K',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: Drama2,
    },
    {
        Title: 'mukhauta',
        Day: '9 FEB',
        Desc: 'A show devoid of words! Let the expressions speak louder than words in Mukhauta: the show of mimes.',
        Prize: 'PRIZE POOL 40K',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: Drama3,
    },
];

const MusicEvents = [
    {
        Title: 'battle of bands',
        Day: '9 FEB',
        Desc: 'Energized beats and flowing verses: bands stand apart and battle for the crown; need we say more?',
        Prize: 'PRIZE CASH 70K',
        PrizeDesc: '& additional worth 70K',
        Color: '#00FFF0',
        Img: Music1,
    },
    {
        Title: 'malhaar',
        Day: '11 FEB',
        Desc: 'Duet with a partner as your symphonies collide against each other in this competition of melodies.',
        Prize: 'PRIZE POOL 60K',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: Music2,
    },
    {
        Title: 'bandish',
        Day: '10 FEB',
        Desc: 'Let your harmonies roar through the halls in this solo singing contest. Will you stand out, or crumble underneath the sea of voices that are vying to be heard?',
        Prize: 'PRIZE POOL 40K',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: Music3,
    },
    {
        Title: 'AAROH',
        Day: '11 FEB',
        Desc: 'Let the voices be deafened and the instruments roar! A competition only for the beats and the tunes!',
        Prize: 'PRIZE POOL 40K',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: Music4,
    },
    {
        Title: 'gully war',
        Day: '9 FEB',
        Desc: 'Let the beats drop and the voices soar. Be a witness to the battlefield as rappers try to out-rap each other in this all out war!',
        Prize: 'PRIZE POOL 50K',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: Music5,
    },
];

const photographyEvents = [
    {
        Title: 'film making competition',
        Day: '10 FEB',
        Desc: 'Film Making Competition: Script, shoot, and edit your way to make your story the most memorable of all!',
        Prize: 'PRIZE POOL 70K',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: Photo1,
    },
    {
        Title: 'photobooth',
        Day: '10 FEB',
        Desc: 'A photobooth to make these days more memorable. Caution: The nostalgia induced by these pictures is bound to be painful.',
        Prize: '',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: Photo2,
    },
    {
        Title: 'image hunt',
        Day: '9 FEB',
        Desc: 'Solve clues, recreate frames, and immortalize moments in this campus-wide photography adventure.',
        Prize: 'PRIZE POOL 40K',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: Photo3,
    },
    {
        Title: 'pixels',
        Day: '10 FEB',
        Desc: 'Pre-defined themes and your lenses against the beautiful canvas of the world. Let your creativity show in this battle of pictures!',
        Prize: 'PRIZE POOL 40K',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: Photo4,
    },
    {
        Title: 'perspective',
        Day: '10 FEB',
        Desc: 'A summit of popular content creators that provide us with our favorite content. That, and a plethora of different perspectives in Perspective! ',
        Prize: '',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: Photo5,
    },
    {
        Title: 'kalakriti',
        Day: '10 FEB',
        Desc: 'The best clicks from the best! A showcase of imagination by our photography club: Imagination.',
        Prize: '',

        PrizeDesc: '',
        Color: '#FFF500',
        Img: Photo6,
    },
];

const ArtEvents = [
    {
        Title: 'tattoo tales',
        Day: '10 FEB',
        Desc: "Let your skin become the portrait. Become the canvas of someone's imagination! ",
        Prize: 'PRIZE POOL 30K',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: Art1,
    },
    {
        Title: 'splash',
        Day: '11 FEB',
        Desc: 'Our face painting competition, let the paint splash and the faces sparkle! Become both the muse and the painting! ',
        Prize: 'PRIZE POOL 30K',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: Art2,
    },
    {
        Title: 'eclectic',
        Day: '11 FEB',
        Desc: 'May the eccentricity flow, as we bring together a plethora of eras and artistic styles that spans the history of the world. This is eclectic!',
        Prize: 'PRIZE POOL 30K',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: Art3,
    },
    {
        Title: 'hue-niverse',
        Day: '9 FEB',
        Desc: 'Artists compete with the only weapon in their arsenal: a single color. A single hue in a hue-niverse. ',
        Prize: 'PRIZE POOL 30K',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: Art4,
    },
    {
        Title: '#FF6B00',
        Day: '10 FEB',
        Desc: 'Let the colors collide and creativity run boundless. Engulf yourself in vivid imagery where artists push the boundaries of art itself! ',
        Prize: 'PRIZE POOL 30K',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: Art5,
    },
];

const QuizEvents = [
    {
        Title: 'bamboozled',
        Day: '11 FEB',
        Desc: 'Form trios and compete for a spot in the movie auction! Become a conqueror in this elusive quiz of cinematography. ',
        Prize: '',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: Quiz1,
    },
    {
        Title: 'movie auction',
        Day: '11 FEB',
        Desc: 'The TOP 8 teams of BAMBOOZLED engage in a bidding war for their chance to shine in the cinematic spotlight.',
        Prize: 'PRIZE POOL 50K',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: Quiz2,
    },
];

const FashionEvents = [
    {
        Title: 'hunkaar',
        Day: '9 FEB',
        Desc: 'Let the streets breathe life and the energy grow! From the daily struggles of life to the social issues that have stifled the world. This is an arena of commentary, passion, and theater. Showcase your talent for the stage in our official nukkad natak competition: Hunkaar! ',
        Prize: 'CASH POOL 50K',
        PrizeDesc: 'additional worth 70K',
        Color: '#FF6B00',
        Img: Fashion1,
    },
];
const NukkadEvents = [
    {
        Title: 'hunkaar',
        Day: '9 FEB',
        Desc: 'Let the streets breathe life and the energy grow! From the daily struggles of life to the social issues that have stifled the world. This is an arena of commentary, passion, and theater. Showcase your talent for the stage in our official nukkad natak competition: Hunkaar! ',
        Prize: 'PRIZE POOL 50K',
        PrizeDesc: 'additional worth 50K',
        Color: '#FFF500',
        Img: Nukkad,
    },
];

const SocialEvents = [
    {
        Title: 'sahyog',
        Day: '10 FEB',
        Desc: "Help us do our part! Let's extend a hand to the less fortunate. A show just for the homeless children, as we provide them a platform to showcase their own talents and assist them in receiving the support for their dreams that they need. This is sahyog: the helping hand.",
        Prize: '',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: Sahyog,
    },
];

const ExcitingEvents = [
    {
        Title: 'prom night',
        Day: '10 FEB',
        Desc: 'Dress to impress and dance the night away, as you sway to music with your special someone at our official Prom Night!',
        Prize: '',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: Prom,
    },
    {
        Title: 'silent disco',
        Day: '9 FEB',
        Desc: 'Let the beats flow directly into your years and vibe to the otherworldly experience of a silent disco!',
        Prize: '',
        PrizeDesc: '',
        Color: '#FF6B00',
        Img: Disco,
    },
    {
        Title: '',
        Day: '9-11 FEB',
        Desc: 'A night of music and camaradderie! Join us, as we gather around a campfire with the people we adore, and the music we love. A night to never be forgotten!',
        Prize: '',
        PrizeDesc: '',
        Color: '#00FFF0',
        Img: Jamming,
    },
    {
        Title: 'stage spectrum',
        Day: '10 FEB',
        Desc: 'A Kaleidoscope of Infinite Possibilities Show the world what you can do at our open mic!',
        Prize: '',
        PrizeDesc: '',
        Color: '#FFF500',
        Img: Spectrum,
    },
];
// {
//     Title: '',
//     Day: '10 FEB',
//     Desc: '',
//     Prize: 'PRIZE POOL K',
//     Color: '',
//     Img: ,
// },

const EventsComponent = () => {
    return (
        <div>
            <div className={` ${classes.EventBG1} h-full bg-cover`}>
                <HomeNavbar />
                <div className="h-12"></div>
                <div className={`${classes.EventsDiv} mb-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>Pronites</h1>
                        <img src={RightStar}></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {Pronites.map(item => {
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
                </div>
                <div className={`${classes.EventsDiv} mb-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Dance Events
                        </h1>
                        <img src={RightStar}></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {DanceEvents.map(item => {
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
                    <div className="flex flex-row gap-6">
                        <Link to="">
                            <img src={RuleBook} alt="" />
                        </Link>
                        <Link to="/normalregistration">
                            <img src={Register} alt="" />
                        </Link>
                    </div>
                </div>
                <div className={`${classes.EventsDiv} mb-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Speaking Arts
                        </h1>
                        <img src={RightStar}></img>
                    </div>
                    <div className="w-full  flex flex-wrap justify-center lg:gap-8 gap-6   ">
                        {SpeakingArts.map(item => {
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
                    <div className="flex flex-row gap-6">
                        <Link to="">
                            <img src={RuleBook} alt="" />
                        </Link>
                        <Link to="/normalregistration">
                            <img src={Register} alt="" />
                        </Link>
                    </div>
                </div>
                <div className={`${classes.EventsDiv}   flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Drama Events
                        </h1>
                        <img src={RightStar}></img>
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
                    <div className="flex flex-row gap-6">
                        <Link to="">
                            <img src={RuleBook} alt="" />
                        </Link>
                        <Link to="/normalregistration">
                            <img src={Register} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={` ${classes.EventBG2} h-full bg-cover`}>
                <div className="h-12"></div>
                <div className={`${classes.EventsDiv} mb-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Music Events
                        </h1>
                        <img src={RightStar}></img>
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
                    <div className="flex flex-row gap-6">
                        <Link to="">
                            <img src={RuleBook} alt="" />
                        </Link>
                        <Link to="/normalregistration">
                            <img src={Register} alt="" />
                        </Link>
                    </div>
                </div>
                <div className={`${classes.EventsDiv} mb-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Photography Events
                        </h1>
                        <img src={RightStar}></img>
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
                    <div className="flex flex-row gap-6">
                        <Link to="">
                            <img src={RuleBook} alt="" />
                        </Link>
                        <Link to="/normalregistration">
                            <img src={Register} alt="" />
                        </Link>
                    </div>
                </div>
                <div className={`${classes.EventsDiv} mb-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Art Events
                        </h1>
                        <img src={RightStar}></img>
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
                    <div className="flex flex-row gap-6">
                        <Link to="">
                            <img src={RuleBook} alt="" />
                        </Link>
                        <Link to="/normalregistration">
                            <img src={Register} alt="" />
                        </Link>
                    </div>
                </div>
                <div className={`${classes.EventsDiv}  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Quizzing Events
                        </h1>
                        <img src={RightStar}></img>
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
                    <div className="flex flex-row gap-6">
                        <Link to="">
                            <img src={RuleBook} alt="" />
                        </Link>
                        <Link to="/normalregistration">
                            <img src={Register} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={` ${classes.EventBG3} h-full bg-cover`}>
                <div className="h-12"></div>
                <div className={`${classes.EventsDiv} mb-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Fashion Events
                        </h1>
                        <img src={RightStar}></img>
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
                    <div className="flex flex-row gap-6">
                        <Link to="">
                            <img src={RuleBook} alt="" />
                        </Link>
                        <Link to="/normalregistration">
                            <img src={Register} alt="" />
                        </Link>
                    </div>
                </div>
                <div className={`${classes.EventsDiv} mb-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Nukkad Events
                        </h1>
                        <img src={RightStar}></img>
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
                    <div className="flex flex-row gap-6">
                        <Link to="">
                            <img src={RuleBook} alt="" />
                        </Link>
                        <Link to="/normalregistration">
                            <img src={Register} alt="" />
                        </Link>
                    </div>
                </div>
                <div className={`${classes.EventsDiv} mb-12  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Social Events
                        </h1>
                        <img src={RightStar}></img>
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
                </div>
                <div className={`${classes.EventsDiv}  flex flex-col`}>
                    <div className="flex flex-row gap-4">
                        <img src={LeftStar}></img>
                        <h1 className={`${classes.EventDivTitle}`}>
                            Exciting Pursuits
                        </h1>
                        <img src={RightStar}></img>
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
                </div>
            </div>
        </div>
    );
};

export default EventsComponent;
