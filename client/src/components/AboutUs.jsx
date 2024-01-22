import About from "../assets/aboutBack.svg";
import classes from "./actionButton.module.css"
import AfterMovie from "../assets/aftermovie.png";
import styles from "./headings.module.css";

const AboutUs = () => {
    return ( 
        <>
            <div className="min-h-screen w-full flex flex-col relative justify-center items-center bg-no-repeat bg-cover bg-bottom">
                <img src={About} className="w-3/4 mt-40 mx-auto" alt="about us background" />
                <div className="absolute w-2/3 mt-40 mx-auto bg-no-repeat bg-cover z-50">
                    <h1 className={` ${styles.headingGreen} mt-20 mb-7 font-grobold font-medium text-5xl text-white tracking-wider`}>About Us</h1>
                    <div className=" w-1/2 relative mx-auto mb-11 flex justify-center items-center">
                        <img src={AfterMovie} className="w-full" alt="aftermovie" />
                        <div className="absolute ">
                            <div className={`${classes.playbutton} w-[104px] relative h-[104px] bg-contain`}></div>
                        </div>
                        
                    </div>
                    <p className=" w-5/6 mx-auto mb-24 font-outfit text-2xl text-white text-center tracking-wide">
                        Vivacity'24 unfolds "A Whimsical Odyssey" which is a playful journey inspired by classic games, guided by four charming characters. Vivacity’24 invites you to experience the essence of vibrant culture, where diversity and creativity converge in a nostalgic and enchanting atmosphere.
                    </p>
                </div>
            </div>
            {/* <img src={Gradient} alt="gradient" className="w-full" /> */}
        </>
     );
}
 
export default AboutUs;