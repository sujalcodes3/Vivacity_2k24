import classes from "./Cards.module.css";

const ProniteCard = ({date,name,color = "#00FFF0",image}) => {
    return (
        <div className="w-fit h-fit relative">
            <div className={` ${classes.proniteCard} bg-center relative`}>
                <h2 className=" text-lg tracking-wider absolute font-rocketship top-6 right-4"
                style={{color: color}}>{date}</h2>
                <div className="absolute bottom-8 left-[50%]">
                    <h1 className=" text-2xl font-rocketship relative left-[-50%] tracking-wider text-center"
                    style={{color: color}}>{name}</h1>
                </div>
            </div>
            <img src={image} className="w-[214px] h-[188px] z-0 absolute top-[70px] left-7" alt="pronite picture" />
        </div>  
     );
}
 
export default ProniteCard;