import Navbar from '../components/HomeNavbar';
import logo from '../assets/newHomePageImages/logo.png';
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
            
            <div className=' lg:hidden min-h-screen w-full bg-cover bg-center bg-no-repeat'
            >
                <img src={mobileBackground} alt="background" className='absolute top-0' />
                <div className='h-1/2 w-full flex flex-col'>
                    <div className='flex justify-end pr-12'>
                        <img src={hamburger} alt="hamburger" className='w-[35px] block' />
                    </div>
                </div>   
            </div>

            <div className=' flex flex-col w-full bg-[#000623]'>
                <div className={`${classes.desktop}`}>
                    <AboutUs/>
                </div>
                    
                    <Pronites/>
                    <Events/>
                    <NewArtists/>
                    <Footer/>
            </div>
        </div>
    );
};

export default NewHomePage;
