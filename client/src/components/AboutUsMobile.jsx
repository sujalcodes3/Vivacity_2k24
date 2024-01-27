import About from "../assets/about-mob.svg";
import classes from "./actionButton.module.css"
import AfterMovie from "../assets/aftermovie.png";
import styles from "./headings.module.css";
import vibe from "../assets/GIFs/vibe-speech.gif";
import char from "../assets/GIFs/charL.gif";

const AboutUsMobile = () => {
    return ( 
    <div className=" lg:hidden w-full relative mt-16">
        <img src={About} className="w-2/3 relative mx-auto z-20" alt="about us background" />

        <div className="w-full absolute top-0 flex flex-col items-center">
            <div className="w-2/3 z-40 flex flex-col items-center">
                <h1 className={` ${styles.headingGreen} mt-4 mb-2  font-grobold font-medium text-2xl text-white tracking-wider`}>About Us</h1>
                <div className=" w-1/2 relative mb-6 flex justify-center items-center">
                    <img src={AfterMovie} className="w-full" alt="aftermovie" />
                    <div className="absolute ">
                        <div className={`${classes.playbutton} w-[52px] relative h-[52px] bg-contain`}></div>
                    </div>
                    
                </div>
                <p className=" w-5/6 mx-auto mb-4 font-outfit text-xs text-white text-center tracking-wide">
                    Vivacity'24 unfolds "A Whimsical Odyssey" which is a playful journey inspired by classic games, guided by four charming characters. Vivacity’24 invites you to experience the essence of vibrant culture, where diversity and creativity converge in a nostalgic and enchanting atmosphere.
                </p>
            </div>
        </div>
        
        <div className=" absolute right-8 bottom-0 flex flex-col items-end">
            <img src={vibe} alt="dialog" className="lg:w-[300px] w-[150px] z-50 relative right-[-5%]"/>
            <img src={char} alt="character" className="lg:w-[300px] w-[80px] z-50"/>
        </div>
    </div> );
}
 
export default AboutUsMobile;