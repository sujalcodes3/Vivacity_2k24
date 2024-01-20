import Background from "../assets/events-background.png";
import EventCard from "./EventCard";
import ActionButtonVariant from "./ActionButtonVariant";
import Divider from '../assets/divider.png';
import Skull from "../assets/skull.png";

const Events = () => {
    return ( 
        <div className=" w-full relative min-h-screen bg-cover bg-no-repeat bg-center p-0 m-0 flex flex-col items-center justify-center"
            style={{backgroundImage:"url("+Background+")"}}
        >
            <div className="absolute top-[-5rem] left-[50%] z-10">
                <img src={Skull} alt="skull" className=" left-[-50%]" />
            </div>
            <img src={Divider} className="w-full absolute top-0" alt="divider" />
            <h1 className="mt-52 mb-16 font-grobold font-medium text-6xl tracking-wide text-[#29009C]">Events</h1>
            <div className="w-full mx-auto flex flex-wrap justify-center gap-10 mb-14">
                <EventCard name={"Mukul Sharma"} date={"8 Feb"} color="#FFF500"/>
                <EventCard name={"Ravator"} date={"8 Feb"} color="#FF6B00"/>
                <EventCard name={"Kumar Varun"} date={"8 Feb"}/>
            </div>
            <div className=" w-full mx-auto flex flex-wrap justify-center gap-10 mb-20">
                <EventCard name={"EDM Night"} date={"8 Feb"} color="#FFF500"/>
                <EventCard name={"Creator's Panel"} date={"8 Feb"} color="#FF6B00"/>
                <EventCard name={"Amit Trivedi"} date={"8 Feb"}/>
            </div>
            <div className=" mx-auto mb-52">
                <ActionButtonVariant title={"View More"}/>
            </div>
        </div>
     );
}
 
export default Events;