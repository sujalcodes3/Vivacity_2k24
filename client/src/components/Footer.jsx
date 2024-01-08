import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import Logo from '../assets/footer_logo.webp';
import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer
            className={` snap-start flex flex-col lg:flex-row gap-10 ${classes.footer} bg-transparent text-white justify-around items-center px-4 py-12 border-t border-gray-300`}
        >
            <div className=" grow flex flex-col gap-4 w-1/4">
                <h1 className="text-4xl font-bold ">Contact Us</h1>
                <span className={`flex-col flex `}>
                    <p className={`text-xl font-semibold text-gray-200`}>
                        Ajay Shekhawat
                    </p>
                    <p className={`text-gray-400`}>+91 85295 28101</p>
                </span>
                <span className={`flex-col flex `}>
                    <p className={`text-xl font-semibold text-gray-200`}>
                        Prathmesh Ranjan
                    </p>
                    <p className={`text-gray-400`}>+91 70071 75380</p>
                </span>
            </div>
            <div className=" grow flex items-center justify-center">
                <img className={`lg:w-1/2`} src={Logo} alt="Viva Logo" />
            </div>
            <div className="w-1/4  flex items-center flex-col gap-4 justify-center">
                <h1 className="text-4xl font-bold ">Socials</h1>
                <div
                    className={`flex gap-6 w-max  flex-col rounded-lg border-2 border-gray-400 p-4 hover:shadow-lg hover:shadow-gray-700 transition-shadow duration-150 delay-50`}
                >
                    <div className={`flex gap-6`}>
                        <Link
                            to="https://www.youtube.com/@VivacityLNMIIT"
                            className={`text-gray-300   hover:text-red-500 transition-colors duration-150 delay-50`}
                            target="__blank"
                        >
                            <YouTube fontSize="large" />
                        </Link>
                        <Link
                            className={`text-gray-300   hover:text-pink-400 transition-colors duration-150 delay-50`}
                            to="https://www.instagram.com/vivacity_lnmiit/"
                            target="__blank"
                        >
                            <Instagram fontSize="large" />
                        </Link>
                    </div>
                    <div className={`flex gap-6`}>
                        <Link
                            className={`text-gray-300   hover:text-blue-600 transition-colors duration-150 delay-50`}
                            to="https://www.facebook.com/vivacity.lnmiit.5/"
                            target="__blank"
                        >
                            <Facebook fontSize="large" />
                        </Link>
                        <Link
                            className={`text-gray-300   hover:text-sky-500 transition-colors duration-150 delay-50`}
                            to="https://in.linkedin.com/company/vivacity-lnmiit"
                            target="__blank"
                        >
                            <LinkedIn fontSize="large" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
