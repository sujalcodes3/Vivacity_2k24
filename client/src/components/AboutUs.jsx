// react and library imports
import { Link } from "react-router-dom";

// customs
import classes from "./actionButton.module.css"
import styles from "./headings.module.css";
import { useScrollTop } from "../hooks/useScroll";

const AboutUs = () => {
    const res = useScrollTop(850)
    return ( 
        <>
            <div className="min-h-screen w-full flex flex-col relative justify-center items-center bg-no-repeat bg-cover bg-bottom">
                <img src='https://d3lhw1p67h4h5r.cloudfront.net/aboutBack.svg' className="w-2/3 mt-40 mx-auto" alt="about us background" />
                <div className="absolute w-2/3 mt-40 mx-auto bg-no-repeat bg-cover z-50">
                    <h1 className={` ${styles.headingGreen} mt-20 mb-7 font-grobold font-medium text-5xl text-white tracking-wider`}>About Us</h1>
                    <div className=" w-1/2 relative mx-auto mb-11 flex justify-center items-center">
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/aftermovie.webp' className="w-full" alt="aftermovie" />
                        <Link to={`https://www.youtube.com/watch?v=E64TKUqgi_4&t=1s`} target="_blank" className="absolute cursor-pointer">
                            <div className={`${classes.playbutton} w-[104px] relative h-[104px] bg-contain`}></div>
                        </Link>
                        
                    </div>
                    <p className=" w-5/6 mx-auto mb-24 font-outfit text-2xl text-white text-center tracking-wide">
                        Vivacity'24 unfolds "A Whimsical Odyssey" which is a playful journey inspired by classic games, guided by four charming characters. Vivacity’24 invites you to experience the essence of vibrant culture, where diversity and creativity converge in a nostalgic and enchanting atmosphere.
                    </p>
                </div>
                <div className={`absolute bottom-[-36px] left-24 transition-all duration-400 ${
                    res ? 'opacity-100 ease-in':'opacity-0 ease-out'
                }`}>
                    <img src='https://d3lhw1p67h4h5r.cloudfront.net/vibe-speech.gif' alt="dialog" className="w-[300px] relative left-[-15%]"/>
                    <img src='https://d3lhw1p67h4h5r.cloudfront.net/charR.gif' alt="character" className="w-[194px]"/>
                </div>
            </div>
            {/* <img src={Gradient} alt="gradient" className="w-full" /> */}
        </>
     );
}
 
export default AboutUs;