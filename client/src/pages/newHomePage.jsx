import Navbar from '../components/HomeNavbar';
import logo from '../assets/newHomePageImages/logo.png';
import logoMob from "../assets/newHomePageImages/logo-mob.svg";
import mobileBackground from "../assets/newHomePageImages/newHome-mobile.png";
import hamburger from "../assets/hamburger.png"
import ImageLayers from '../components/TestNewHome';
import classes from './NewHome.module.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import ActionButton from '../components/NewHomeActionButton';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import NewArtists from '../components/NewArtists';
import Pronites from '../components/Pronites';
import Events from '../components/NewHomeEvents';
import char from "../assets/GIFs/charR.gif";
import welcome from "../assets/GIFs/welcome-speech.gif";
import AboutUsMobile from '../components/AboutUsMobile';
const NewHomePage = () => {
    return (
        <div>
            <div className={`${classes.desktop}`}>
                <div
                className={`h-screen ${classes.gradientBg} flex flex-col justify-start items-center gap-10 pt-4 `}
                >
                    <Navbar />
                    <div className={`w-full flex flex-col gap-8 items-center mt-10`}>
                        <img src={logo} className="z-20 w-[52%]" />
                        <ParallaxProvider>
                            <ImageLayers />
                        </ParallaxProvider>
                        <div className="flex justify-evenly w-2/4">
                            <ActionButton title="Explore Events" />
                            <ActionButton title="Register" />
                        </div>
                    </div>  
                </div>
            </div>
            
            <div className=' lg:hidden min-h-screen w-full relative bg-cover bg-center bg-no-repeat pb-16'
            >
                <img src={mobileBackground} alt="background" className='absolute top-0 h-full w-full z-0' />
                <div className=' w-full'>

            <div className='flex justify-end pr-4 pt-5 mb-16'>
            <img src={hamburger} alt="hamburger" className='w-[35px] h-[33px] block z-20' />
            </div>
                    <div className='w-2/3 mx-auto mb-8 z-20'>
                        <img src={logoMob} alt="logo" className=' w-full relative block z-20' />
                    </div>
                    
                    <div className="flex flex-col gap-4 items-center mx-auto w-1/2">
                            <ActionButton title="Explore Events" />
                            <ActionButton title="Register" />
                    </div>
                    <div className="flex flex-col ml-4">
                        <img src={welcome} alt="dialog" className="lg:w-[300px] w-[150px] z-20 relative left-[-5%]"/>
                        <img src={char} alt="character" className="lg:w-[300px] w-[80px] z-20"/>
                    </div>
                </div>
                <AboutUsMobile/>
            </div>

            <div className=' flex flex-col bg-[#000623]'>
                <div className={`${classes.desktop}`}>
                    <AboutUs/>
                </div>
                    <Pronites/>
                    {/*

                    */}
                    <Events/>
                    <NewArtists/>
                    <Footer/>
            </div>
        </div>
    );
};

export default NewHomePage;
