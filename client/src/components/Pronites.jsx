import ProniteCard from "./ProniteCard";
import Background from "../assets/pronite-background.png";
import ActionButtonVariant from "./ActionButtonVariant";
import StarL from "../assets/starLeft.png";
import StarR from "../assets/starRight.png";
import classes from './headings.module.css';

const Pronites = () => {
    return (

        <>
            <div className=" w-full flex justify-center z-10 mt-44">
                <div className="flex flex-col justify-start mt-20 mr-[72px] h-[80px] w-[41px]">
                    <img src={StarL} alt="star" />
                </div>
                <h1 className={`mt-24 mb-16 font-grobold font-medium text-6xl tracking-wide ${classes.heading} text-[#29009C]`}>Pronites</h1>
                <div className="flex flex-col justify-center mt-24 ml-16 h-[80px] w-[41px]">
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
                <div className=" mx-auto mb-52">
                    <ActionButtonVariant title={"Register"}/>
                </div>
                <img src={StarL} alt="star" className="absolute w-[41px] bottom-56 left-28" />
                <img src={StarL} alt="star" className="absolute w-[20.5px] bottom-32 right-24" />
            </div>
        </>
        
     );
}
 
export default Pronites;