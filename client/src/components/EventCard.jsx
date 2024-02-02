import classes from "./Cards.module.css";
import Image from "../assets/events/Razz.png";

// Large - img 400 200 top-76 left-32 

const EventCard = ({date,name,color = "#00FFF0",text = "group dance competition lorem ipsum lorem ipsum",image=Image}) => {
    return ( 
        <div className="relative">
            <div className={` ${classes.eventCardS} relative bg-cover bg-center z-20`}>
                <h2 className=" lg:text-lg text-sm tracking-wider font-rocketship absolute lg:top-4 top-[9px] lg:right-4 right-2"
                style={{color: color}}>{date}</h2>
                <div className="absolute lg:bottom-[70px] bottom-[45px] left-[50%] w-5/6 lg:2/3">
                    <h1 className=" lg:text-2xl text-xl font-rocketship relative left-[-50%] tracking-wider text-center"
                    style={{color: color}}>{name}</h1>
                </div>
                <div className="absolute lg:bottom-8  bottom-[14px] left-[50%]">
                    <p className=" lg:w-[300px] w-[210px] mx-auto  font-outfit lg:text-sm text-xs text-white relative left-[-50%] tracking-wider text-center">
                        {text}
                    </p>
                </div>
            </div>
            <img src={image} className="lg:w-[304px] w-[204px] lg:h-[153px] h-[110px] z-0 absolute lg:top-[56px] top-7 lg:left-[23px] left-[11.5px]" alt="event picture" />
        </div>
        
     );
}
 
export default EventCard;