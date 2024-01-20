import ProniteCard from "./ProniteCard";
import Background from "../assets/pronite-background.png";
import ActionButtonVariant from "./ActionButtonVariant";

const Pronites = () => {
    return ( 
        <div className=" w-full min-h-screen bg-cover bg-no-repeat bg-center p-0 m-0 flex flex-col items-center justify-center"
            style={{backgroundImage:"url("+Background+")"}}
         >
            <h1 className="mt-52 mb-16 font-grobold font-medium text-6xl tracking-wide text-[#29009C]">Pronites</h1>
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
              
        </div>
     );
}
 
export default Pronites;