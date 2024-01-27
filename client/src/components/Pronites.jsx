import ProniteCard from "./ProniteCard";
import Background from "../assets/pronite-backgrounds.png";
import ActionButtonVariant from "./ActionButtonVariant";
import StarL from "../assets/starLeft.png";
import StarR from "../assets/starRight.png";
import classes from './headings.module.css';
import { useNavigate } from "react-router-dom";
import char from "../assets/GIFs/charL.gif";
import favart from '../assets/GIFs/favart-speech.gif';
import { useScrollTop } from "../hooks/useScroll";

const Pronites = () => {
    const res = useScrollTop(2300)

    const navigate = useNavigate();
    return (

        <>
            <div className=" w-full flex justify-center z-10 lg:mt-44 mt-8">
                <div className="flex flex-col justify-start lg:mt-20 mt-8 lg:mr-[72px] mr-4 lg:h-[80px] h-[40px] lg:w-[41px] w-[20px]">
                    <img src={StarL} alt="star" />
                </div>
                <h1 className={`lg:mt-24 mt-10 mb-16 font-grobold font-medium lg:text-6xl text-4xl tracking-wide ${classes.heading} text-[#29009C]`}>Pronites</h1>
                <div className="flex flex-col justify-center lg:mt-24 mt-10 lg:ml-16 ml-4 lg:h-[80px] h-[40px] lg:w-[41px] w-[20px]">
                    <img src={StarR} alt="star" />
                </div>
            </div>

            <div className=" w-full relative min-h-screen bg-cover bg-no-repeat bg-center p-0 m-0 flex flex-col items-center justify-center"
            style={{backgroundImage:"url("+Background+")"}}
            >
                <div className="w-fit mx-auto flex flex-wrap justify-center gap-16 mb-14">
                    <ProniteCard name={"Mukul Sharma"} date={"8 Feb"} color="#FFF500"/>
                    <ProniteCard name={"Ravator"} date={"8 Feb"} color="#FF6B00"/>
                    <ProniteCard name={"Kumar Varun"} date={"8 Feb"}/>
                    <ProniteCard name={"Ankita Arya"} date={"8 Feb"} color="#FFF500"/>
                </div>
                <div className="w-fit mx-auto flex flex-wrap justify-center gap-16 mb-20">
                    <ProniteCard name={"EDM Night"} date={"8 Feb"} color="#FFF500"/>
                    <ProniteCard name={"Creator's Panel"} date={"8 Feb"} color="#FF6B00"/>
                    <ProniteCard name={"Amit Trivedi"} date={"8 Feb"}/>
                    <ProniteCard name={"Day 3 DJ Night"} date={"8 Feb"} color="#FF6B00"/>
                </div>
                <div className=" mx-auto mb-52" onClick={(e) => {navigate('/NormalRegistration')}}>
                    <ActionButtonVariant title={"Register"}/>
                </div>

                <img src={StarL} alt="star" className="absolute lg:block hidden w-[41px] bottom-56 left-28" />
                <img src={StarL} alt="star" className="absolute lg:block hidden w-[20.5px] bottom-32 right-[22%]" />

                <div className={` absolute bottom-4 flex flex-col transition-all duration-400 right-0 z-50 items-end ${
                    res ? "opacity-100 ease-in" : "opacity-0 ease-out"
                }`}>
                    <img src={favart} alt="dialog" className="lg:w-[300px] w-[150px] relative left-0"/>
                    <img src={char} alt="character" className="lg:w-[194px] w-[100px]"/>
                </div>
            </div>
        </>
        
     );
}
 
export default Pronites;
