import classes from "./Cards.module.css";
import Image from "../assets/events/Razz.png";

// Large - img 400 200 top-76 left-32 

const EventCard = ({date,name,color = "#00FFF0",text = "group dance competition lorem ipsum lorem ipsum",image=Image}) => {
    return ( 
        <div className="relative w-fit h-fit">
            <div className={` ${classes.eventCardS} relative bg-cover bg-center z-20`}>
                <h2 className=" text-lg tracking-wider absolute top-4 right-4"
                style={{color: color}}>{date}</h2>
                <div className="absolute bottom-[70px] left-[50%] w-2/3">
                    <h1 className=" text-2xl relative left-[-50%] tracking-wider text-center"
                    style={{color: color}}>{name}</h1>
                </div>
                <div className="absolute bottom-8 left-[50%]">
                    <p className=" w-[300px] font-outfit text-sm text-white relative left-[-50%] tracking-wider text-center">
                        {text}
                    </p>
                </div>
            </div>
            <img src={image} className="w-[304px] h-[153px] z-0 absolute top-[56px] left-[23px]" alt="event picture" />
        </div>
        
     );
}
 
export default EventCard;