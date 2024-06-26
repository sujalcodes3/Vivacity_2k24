import { Link } from 'react-router-dom';
import classes from './Footer.module.css';

import { useMediaQuery } from 'react-responsive';

const Footer = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 960 });
    return (
        <footer
            className={` snap-start w-full flex flex-col lg:flex-row gap-10 ${classes.footer} bg-[#1F0036] text-white justify-around items-center lg:items-end px-8 py-8 z-50`}
        >   
            <div className='lg:hidden'>
                <div className=" grow flex items-center justify-center">
                    <img className={`h-48`} src='https://d3lhw1p67h4h5r.cloudfront.net/sticker2.webp' alt="Viva Logo" />
                </div>
            </div>
            
            <div className=" grow flex flex-col gap-4 w-1/8 items-start">
                <h1 className="text-white w-full lg:w-fit font-outfit text-center lg:text-left text-2xl font-semibold leading-140 tracking-wider">Fest Heads:</h1>
                <span className={`flex-col flex items-start font-outfit`}>
                    <p className={`text-white w-full lg:w-fit text-center lg:text-left font-outfit text-xl font-normal leading-140 tracking-wider`}>
                        Ajay Raj Singh Shekhawat
                    </p>
                    <p className={`text-white w-full lg:w-fit text-center lg:text-left text-opacity-70 font-Outfit text-lg font-light leading-140 tracking-wider`}>+91 8529528101</p>
                </span>
                <span className={`flex-col flex w-full lg:w-fit items-start font-outfit`}> 
                    <p className={`text-white w-full lg:w-fit text-center lg:text-left font-outfit text-xl font-normal leading-140 tracking-wider`}>
                        Prathmesh Ranjan
                    </p>
                    <p className={`text-white w-full lg:w-fit text-center lg:text-left text-opacity-70 font-outfit text-lg font-light leading-140 tracking-wider`}>+91 7007175380</p>
                </span>
                
            </div>
            <div className='hidden grow lg:flex items-center justify-center'>
                <div className=" grow flex items-center justify-center">
                    <img className={`h-48`} src='https://d3lhw1p67h4h5r.cloudfront.net/sticker2.webp' alt="Viva Logo" />
                </div>
            </div>

            <div className={`w-1/4 flex flex-col gap-4 ${isSmallScreen ? "items-center" : "items-end"}`}>

                    <div className={`flex gap-5`}>
                        <Link
                            className={`text-gray-300 min-w-10 hover:text-pink-400 transition-colors duration-150 delay-50`}
                            to="https://www.instagram.com/vivacity_lnmiit/"
                            target="__blank"
                        >
                            <img className={`w-10`} src='https://d3lhw1p67h4h5r.cloudfront.net/Instagram.webp' alt="Instagram Logo" />
                        </Link>
                        <Link
                            className={`text-gray-300 min-w-10  hover:text-blue-600 transition-colors duration-150 delay-50`}
                            to="https://www.facebook.com/vivacity.lnmiit.5/"
                            target="__blank"
                        >
                            <img className={`w-10`} src='https://d3lhw1p67h4h5r.cloudfront.net/Facebook.webp' alt="Facebook Logo" />
                        </Link>
                        <Link
                            className={`text-gray-300 min-w-10  hover:text-sky-500 transition-colors duration-150 delay-50`}
                            to="https://in.linkedin.com/company/vivacity-lnmiit"
                            target="__blank"
                        >
                            <img className={`w-10`} src='https://d3lhw1p67h4h5r.cloudfront.net/Twitter.webp' alt="Twitter Logo" />
                        </Link>
                        <Link
                            to="https://www.youtube.com/@VivacityLNMIIT"
                            className={`text-gray-300  min-w-10 hover:text-red-500 transition-colors duration-150 delay-50`}
                            target="__blank"
                        >
                            <img className={`w-10`} src='https://d3lhw1p67h4h5r.cloudfront.net/Youtube.webp' alt="Youtube Logo" />
                        </Link>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
