import classes from "./Cards.module.css";

const ProniteCard = ({date,name,color = "#00FFF0",image}) => {
    return (
        <div>
            <div className={` ${classes.proniteCard} w-[263px] h-[370px] relative`}>
            <h2 className=" text-lg tracking-wider absolute top-6 right-4"
            style={{color: color}}>{date}</h2>
            <div className="absolute bottom-8 left-[50%]">
                <h1 className=" text-2xl relative left-[-50%] tracking-wider text-center"
                style={{color: color}}>{name}</h1>
            </div>
        </div>
            <img src={image} className="w-[214px] h-[188px] z-0 absolute top-[70px] left-7" alt="pronite picture" />
        </div>  
     );
}
 
export default ProniteCard;