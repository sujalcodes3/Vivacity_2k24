import { Link } from "react-router-dom";

import classes from "./actionButton.module.css"
import styles from "./headings.module.css";

const AboutUsMobile = () => {
    return ( 
    <div className=" lg:hidden w-full relative mt-16">
        <img src="https://d3lhw1p67h4h5r.cloudfront.net/about-mob.svg" className="w-2/3 relative mx-auto z-20" alt="about us background" />

        <div className="w-full absolute top-0 flex flex-col items-center">
            <div className="w-2/3 z-40 flex flex-col items-center">
                <h1 className={` ${styles.headingGreen} mt-4 mb-2  font-grobold font-medium text-2xl text-white tracking-wider`}>About Us</h1>
                <div className=" w-1/2 relative mb-4 flex justify-center items-center">
                    <img src="https://d3lhw1p67h4h5r.cloudfront.net/aftermovie.webp" className="w-full" alt="aftermovie" />
                        <Link to={`https://www.youtube.com/watch?v=E64TKUqgi_4&t=1s`} target="_blank" className="absolute cursor-pointer">
                            <div className={`${classes.playbutton} w-[52px] relative h-[52px] bg-contain`}></div>
                        </Link>
                    
                </div>
                <p className=" w-5/6 mx-auto mb-4 font-outfit text-[10px] xs:text-xs text-white text-center tracking-wide">
                    Vivacity'24 unfolds "A Whimsical Odyssey" which is a playful journey inspired by classic games, guided by four charming characters. Vivacity’24 invites you to experience the essence of vibrant culture, where diversity and creativity converge in a nostalgic and enchanting atmosphere.
                </p>
            </div>
        </div>
        
        <div className=" absolute right-8 bottom-0 flex flex-col items-end">
            <img src="https://d3lhw1p67h4h5r.cloudfront.net/vibe-speech.gif" alt="dialog" className="lg:w-[300px] w-[150px] z-50 relative right-[-5%]"/>
            <img src="https://d3lhw1p67h4h5r.cloudfront.net/charL.gif" alt="character" className="lg:w-[300px] w-[80px] z-50"/>
        </div>
    </div> );
}
 
export default AboutUsMobile;
