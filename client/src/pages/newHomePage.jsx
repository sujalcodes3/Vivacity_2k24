import Navbar from '../components/HomeNavbar';
import logo from '../assets/newHomePageImages/logo.png';
import ImageLayers from '../components/TestNewHome';
import classes from './NewHome.module.css';
import { ParallaxProvider } from 'react-scroll-parallax';

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
        </div>
    );
};

export default NewHomePage;
