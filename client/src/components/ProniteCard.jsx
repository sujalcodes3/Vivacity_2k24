import classes from "./Cards.module.css";

const ProniteCard = ({date,name,color = "#00FFF0",image}) => {
    return (
        <div className="w-fit h-fit relative">
            <div className={` ${classes.proniteCard} bg-center relative`}>
                <h2 className=" lg:text-lg text-sm tracking-wider absolute font-rocketship lg:top-6 top-4 right-4"
                style={{color: color}}>{date}</h2>
                <div className="absolute lg:bottom-8 bottom-6 left-[50%]">
                    <h1 className=" lg:text-2xl text-xl font-rocketship relative left-[-50%] tracking-wider text-center"
                    style={{color: color}}>{name}</h1>
                </div>
            </div>
            <img src={image} className="lg:w-[214px] w-[155px] lg:h-[188px] h-[137px] z-0 absolute lg:top-[70px] top-12 lg:left-7 left-4" alt="" />
        </div>  
     );
}
 
export default ProniteCard;
