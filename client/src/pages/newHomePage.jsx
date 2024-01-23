import Navbar from '../components/HomeNavbar';
import logo from '../assets/newHomePageImages/logo.png';
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
            <div className=' flex flex-col w-full bg-[#000623]'>
                    <AboutUs/>
                    <Pronites/>
                    <Events/>
                    <NewArtists/>
                    <Footer/>
            </div>
        </div>
    );
};

export default NewHomePage;
