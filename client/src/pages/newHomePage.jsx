import Navbar from '../components/HomeNavbar';

import ImageLayers from '../components/TestNewHome';
import classes from './NewHome.module.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import ActionButton from '../components/NewHomeActionButton';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import NewArtists from '../components/NewArtists';
import Pronites from '../components/Pronites';
import Events from '../components/NewHomeEvents';
import AboutUsMobile from '../components/AboutUsMobile';
import HamsburgerNavbar from '../components/HamsburgerNavbar';

const NewHomePage = () => {
    return (
        <div>
            <div className={`${classes.desktop}`}>
                <div
                    className={`h-screen ${classes.gradientBg} relative flex flex-col justify-start items-center gap-10 pt-4 `}
                >
                    <Navbar />

                    <div
                        className={`w-full flex flex-col gap-8 items-center mt-10`}
                    >
                        <img src="https://d3lhw1p67h4h5r.cloudfront.net/logo.webp" className="z-20 w-[52%]" />
                        <ParallaxProvider>
                            <ImageLayers />
                        </ParallaxProvider>
                        <div className="flex justify-evenly w-2/4">
                            <ActionButton title="Explore Events" onclick='events'/>
                            <ActionButton title="Vivacity’24 Photos!" onclick='https://drive.google.com/drive/mobile/folders/11yZnh3dhk3nHlufzQ52TC5wFr-IthA32?usp=sharing'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" lg:hidden min-h-screen overflow-x-hidden w-full relative bg-cover bg-center bg-no-repeat pb-10">
                <HamsburgerNavbar />
                <img
                    src='https://d3lhw1p67h4h5r.cloudfront.net/newHome-mobile.webp'
                    alt="background"
                    className="absolute top-0 h-full w-full z-0"
                />
                <div className=" w-full">
                    {/* <div className="flex justify-end pr-4 pt-5 mb-16"></div> */}
                    <div className="w-[90%] mx-auto mb-8 z-20">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/logo-mob.svg'
                            alt="logo"
                            className=" w-full relative block z-20"
                        />
                    </div>

                    <div className="flex flex-col gap-4 items-center mx-auto w-1/2">
                        <ActionButton title="Explore Events" onclick='events'/>
                        <ActionButton title="Vivacity’24 Photos!" onclick='https://drive.google.com/drive/folders/11yZnh3dhk3nHlufzQ52TC5wFr-IthA32?usp=sharing'/>
                    </div>
                    <div className="flex flex-col ml-4">
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/welcome-speech.gif'
                            alt="dialog"
                            className="lg:w-[300px] w-[150px] z-20 relative left-[-5%]"
                        />
                        <img
                            src='https://d3lhw1p67h4h5r.cloudfront.net/charR.gif'
                            alt="character"
                            className="lg:w-[300px] w-[80px] z-20"
                        />
                    </div>
                </div>

                <AboutUsMobile />
            </div>

            <div className=" flex flex-col bg-[#000623]">
                <div className={`${classes.desktop}`}>
                    <AboutUs />
                </div>
                <Pronites />
                {/*

                    */}
                <Events />
                <NewArtists />
                <Footer />
            </div>
        </div>
    );
};

export default NewHomePage;
