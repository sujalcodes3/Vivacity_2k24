import classes from "./Cards.module.css";
import Image from "../assets/Razz.png";

const EventCard = ({date,name,color = "#00FFF0",text = "group dance competition lorem ipsum lorem ipsum",image=Image}) => {
    return ( 
        <div className="relative w-fit h-fit">
            <div className={` ${classes.eventCard} w-[470px] h-[421px] relative bg-cover bg-center z-20`}>
                <h2 className=" text-lg tracking-wider absolute top-6 right-4"
                style={{color: color}}>{date}</h2>
                <div className="absolute bottom-24 left-[50%]">
                    <h1 className=" text-2xl relative left-[-50%] tracking-wider text-center"
                    style={{color: color}}>{name}</h1>
                </div>
                <div className="absolute bottom-10 left-[50%]">
                    <p className=" w-[300px] font-outfit text-lg text-white relative left-[-50%] tracking-wider text-center">
                        {text}
                    </p>
                </div>
            </div>
            <img src={image} className="w-[400px] h-[200px] z-0 absolute top-[76px] left-8" alt="event picture" />
        </div>
        
     );
}
 
export default EventCard;