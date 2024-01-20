import classes from "./Cards.module.css";

const EventCard = ({date,name,color = "#00FFF0",text = "group dance competition lorem ipsum lorem ipsum"}) => {
    return ( 
        <div className={` ${classes.eventCard} w-[470px] h-[421px] relative bg-cover bg-center`}>
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
     );
}
 
export default EventCard;