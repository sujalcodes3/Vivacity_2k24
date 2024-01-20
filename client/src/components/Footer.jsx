import Logo from '../assets/sticker2.jpg';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';
import instagram from '../assets/Instagram.jpg';
import facebook from '../assets/Facebook.jpg';
import twitter from '../assets/Twitter.jpg';
import youtube from '../assets/Youtube.jpg';

const Footer = () => {
    return (
        <footer
            className={` snap-start w-full flex flex-col lg:flex-row gap-10 ${classes.footer} bg-[#1F0036] text-white justify-around items-center lg:items-end px-8 py-8 border-t border-gray-300 z-50`}
        >
            <div className=" grow flex flex-col gap-4 w-1/8 items-start">
                <h1 className="text-white font-Outfit text-2xl font-semibold leading-140 tracking-wider">Fest Heads:</h1>
                <span className={`flex-col flex items-start font-outfit`}> 
                    <p className={`text-white font-Outfit text-xl font-normal leading-140 tracking-wider`}>
                        Prathmesh Ranjan
                    </p>
                    <p className={`text-white text-opacity-70 font-Outfit text-lg font-light leading-140 tracking-wider`}>+91 7007175380</p>
                </span>
                <span className={`flex-col flex items-start font-outfit`}>
                    <p className={`text-white text-left font-Outfit text-xl font-normal leading-140 tracking-wider`}>
                        Ajay Raj Singh Shekhawat
                    </p>
                    <p className={`text-white text-opacity-70 font-Outfit text-lg font-light leading-140 tracking-wider`}>+91 8529528101</p>
                </span>
            </div>
            <div className=" grow flex items-center justify-center">
                <img className={`h-48`} src={Logo} alt="Viva Logo" />
            </div>
            <div className="w-1/4 flex flex-col gap-4 items-end">
                    <div className={`flex gap-5`}>
                        <Link
                            className={`text-gray-300   hover:text-pink-400 transition-colors duration-150 delay-50`}
                            to="https://www.instagram.com/vivacity_lnmiit/"
                            target="__blank"
                        >
                            <img className={`w-10`} src={instagram} alt="Instagram Logo" />
                        </Link>
                        <Link
                            className={`text-gray-300   hover:text-blue-600 transition-colors duration-150 delay-50`}
                            to="https://www.facebook.com/vivacity.lnmiit.5/"
                            target="__blank"
                        >
                            <img className={`w-10`} src={facebook} alt="Facebook Logo" />
                        </Link>
                        <Link
                            className={`text-gray-300   hover:text-sky-500 transition-colors duration-150 delay-50`}
                            to="https://in.linkedin.com/company/vivacity-lnmiit"
                            target="__blank"
                        >
                            <img className={`w-10`} src={twitter} alt="Twitter Logo" />
                        </Link>
                        <Link
                            to="https://www.youtube.com/@VivacityLNMIIT"
                            className={`text-gray-300   hover:text-red-500 transition-colors duration-150 delay-50`}
                            target="__blank"
                        >
                            <img className={`w-10`} src={youtube} alt="Youtube Logo" />
                        </Link>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
