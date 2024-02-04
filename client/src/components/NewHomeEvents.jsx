import EventCard from './EventCard';
import ActionButtonVariant from './ActionButtonVariant';

import { useScrollTop } from '../hooks/useScroll';
import classes from './headings.module.css';

const Events = () => {
    const res = useScrollTop(3700);
    return (
        <div
            className="overflow-x-hidden w-full relative min-h-screen bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center"
            style={{ backgroundImage: 'url(' + 'https://d3lhw1p67h4h5r.cloudfront.net/events-background.webp' + ')' }}
        >
            {/* <HomeNavbar/> */}
            <div className="absolute top-[-5rem] left-[50%] z-10">
                <img src='https://d3lhw1p67h4h5r.cloudfront.net/skull.webp' alt="skull" className="relative left-[-50%]" />
            </div>
            <img
                src='https://d3lhw1p67h4h5r.cloudfront.net/divider.webp'
                className="w-full absolute top-0"
                alt="divider"
            />

            <div className=" w-full flex justify-center lg:mt-0 mt-16">
                <div className="flex flex-col justify-start lg:mt-20 mt-8 lg:mr-[72px] mr-4 lg:h-[80px] h-[40px] lg:w-[41px] w-[20px]">
                    <img src='https://d3lhw1p67h4h5r.cloudfront.net/starLeft.webp' alt="star" />
                </div>
                <h1
                    className={`lg:mt-24 mt-10 mb-16 font-grobold font-medium lg:text-6xl text-4xl tracking-wide ${classes.heading} text-[#29009C]`}
                >
                    Events
                </h1>
                <div className="flex flex-col justify-center lg:mt-24 mt-10 lg:ml-16 ml-4 lg:h-[80px] h-[40px] lg:w-[41px] w-[20px]">
                    <img src='https://d3lhw1p67h4h5r.cloudfront.net/starRight.webp' alt="star" />
                </div>
            </div>

            <div className="w-full mx-auto flex flex-wrap justify-center gap-10 mb-14">
                <EventCard
                    name={'Razzmattaz'}
                    date={'9 Feb'}
                    color="#FFF500"
                    text="A group dance competition"
                    image='https://d3lhw1p67h4h5r.cloudfront.net/Razz.webp'
                />
                <EventCard
                    name={'Battle of Bands'}
                    date={'9 Feb'}
                    color="#FF6B00"
                    text="A competition between dexterous bands"
                    image='https://d3lhw1p67h4h5r.cloudfront.net/bob.webp'
                />
                <EventCard
                    name={'Hunkaar'}
                    date={'9 Feb'}
                    text="The Nukkad Natak exhibit"
                    image='https://d3lhw1p67h4h5r.cloudfront.net/hunkaar-event.webp'
                />
            </div>
            <div className=" w-full mx-auto flex flex-wrap justify-center gap-10 mb-20">
                <EventCard
                    name={'Vogue'}
                    date={'10 Feb'}
                    color="#FFF500"
                    text="Ultimate showcase of glamor via fashion walks"
                    image='https://d3lhw1p67h4h5r.cloudfront.net/vogue.webp'
                />
                <EventCard
                    name={'Afreen'}
                    date={'8 Feb'}
                    color="#FF6B00"
                    text="The Shayari Night where emotions are expressed in verses."
                    image='https://d3lhw1p67h4h5r.cloudfront.net/afreen.webp'
                />
                <EventCard
                    name={'Rangshala'}
                    date={'10 Feb'}
                    text="A profound display of emotions via drama and stage shows."
                    image='https://d3lhw1p67h4h5r.cloudfront.net/rangshala.webp'
                />
            </div>
            <div className=" mx-auto mb-52">
                <ActionButtonVariant title={"View More"} onclick='events'/>
            </div>
            {/* 


            */}
            <div
                className={`absolute bottom-4 left-10 z-50 transition-all duration-400 ${
                    res ? 'opacity-100 ease-in' : 'opacity-0 ease-out'
                }`}
            >
                <img
                    src='https://d3lhw1p67h4h5r.cloudfront.net/artistic-speech.gif'
                    alt="dialog"
                    className="lg:w-[300px] w-[150px] relative left-[-15%]"
                />
                <img
                    src='https://d3lhw1p67h4h5r.cloudfront.net/charR.gif'
                    alt="character"
                    className="lg:w-[194px] w-[100px]"
                />
            </div>
        </div>
    );
};

export default Events;
