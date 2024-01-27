import classes from './Cards.module.css';
// Large - img 400 200 top-76 left-32

const EventCard = ({ Day, Title, Color, Desc, Prize, PrizeDesc, Img }) => {
    return (
        <div className=" relative  ">
            <div
                className={` ${classes.eventCardS} relative  bg-cover bg-center  z-0`}
            >
                <h2
                    className={`${classes.EventDate}  tracking-wider font-rocketship absolute lg:top-3 top-2 right-4`}
                    style={{ color: Color }}
                >
                    {Day}
                </h2>
                <div className="absolute lg:top-[16%] lg:left-[53%] top-[20%] left-[53%]">
                    <div className={`${classes.EventTitle} mb-2`}>
                        <h1
                            className="  font-rocketship relative"
                            style={{ color: Color }}
                        >
                            {Title}
                        </h1>
                    </div>
                    <div className={`${classes.EventDesc} `}>
                        <p className="font-outfit text-white relative tracking-wider text-left ">
                            {Desc}
                        </p>
                    </div>
                </div>

                <div
                    className={`absolute  lg:bottom-8 bottom-6  lg:left-5 left-3  `}
                >
                    {PrizeDesc === '' && (
                        <p
                            className={`${classes.EventPrize} font-rocketship  lg:w-[150px] w-[90px]`}
                        >
                            {Prize}
                        </p>
                    )}
                    {PrizeDesc !== '' && (
                        <div>
                            <p
                                className={`${classes.EventPrize} font-rocketship lg:left-[7%] sm:left-[5%] `}
                            >
                                {Prize}
                            </p>
                            <p
                                className={`${classes.EventPrizeDesc}font-rocketship text-[#ff1879] lg:text-[15px] text-[11px] leading-5`}
                            >
                                {PrizeDesc}
                            </p>
                        </div>
                    )}
                </div>
                <img
                    src={Img}
                    className="lg:w-[172px] lg:h-[115px] w-[118px] h-[78px] z-100 absolute lg:top-[48px] lg:left-[25px] top-[34px] left-[15px]"
                    alt="event picture"
                />
            </div>
        </div>
    );
};

export default EventCard;
