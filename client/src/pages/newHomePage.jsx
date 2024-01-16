import Navbar from '../components/HomeNavbar';
import logo from '../assets/newHomePageImages/logo.png';
import ImageLayers from '../components/TestNewHome';
import classes from './NewHome.module.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import ActionButton from '../components/NewHomeActionButton';
const NewHomePage = () => {
    return (
        <div
            className={`h-screen ${classes.gradientBg} flex flex-col justify-start items-center gap-20 pt-4 `}
        >
            <Navbar />
            <img src={logo} className="z-10 w-[56%]" />
            <ParallaxProvider>
                <ImageLayers />
            </ParallaxProvider>
            <div className="flex justify-evenly w-2/4">
                <ActionButton title="Explore Events" />
                <ActionButton title="Register" />
            </div>
        </div>
    );
};

export default NewHomePage;
