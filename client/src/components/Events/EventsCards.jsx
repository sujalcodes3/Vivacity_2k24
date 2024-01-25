import classes from './Cards.module.css';
// Large - img 400 200 top-76 left-32

const EventCard = ({ Day, Title, Color, Desc, Prize, PrizeDesc, Img }) => {
    return (
        <div className=" relative  ">
            <div
                className={` ${classes.eventCardS} relative  bg-cover bg-center  z-0`}
            >
                <h2
                    className={`${classes.EventDate} text-lg tracking-wider font-rocketship absolute top-2 right-4`}
                    style={{ color: Color }}
                >
                    {Day}
                </h2>
                <div
                    className={`${classes.EventTitle} absolute  top-[18%] left-[53%]`}
                >
                    <h1
                        className="  font-rocketship relative"
                        style={{ color: Color }}
                    >
                        {Title}
                    </h1>
                </div>
                <div
                    className={`${classes.EventDesc} absolute top-[33%] left-[53%]`}
                >
                    <p className="font-outfit text-white relative tracking-wider text-left">
                        {Desc}
                    </p>
                </div>

                <div className={`absolute  bottom-8   `}>
                    {PrizeDesc === '' && (
                        <p
                            className={`${classes.EventPrize} font-rocketship left-8  lg:w-[150px]`}
                        >
                            {Prize}
                        </p>
                    )}
                    {PrizeDesc !== '' && (
                        <div>
                            <p
                                className={`${classes.EventPrize} font-rocketship lg:left-[5%] sm:left-[4%] `}
                            >
                                {Prize}
                            </p>
                            <p
                                className={`${classes.EventPrizeDesc}font-rocketship text-[#ff1879] text-[15px] leading-5`}
                            >
                                {PrizeDesc}
                            </p>
                        </div>
                    )}
                </div>
                <img
                    src={Img}
                    className="lg:w-[172px] lg:h-[115px] w-[126px] h-[110px] z-100 absolute lg:top-[48px] lg:left-[25px] top-[48px] left-[2px]"
                    alt="event picture"
                />
            </div>
        </div>
    );
};

export default EventCard;
