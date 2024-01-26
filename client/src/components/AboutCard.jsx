import React from 'react';
import bg from '../assets/aboutCardbg.png';
import img from '../assets/shambavi.svg';
import classes from './aboutCard.module.css';
import instaa from '../assets/insta.svg';
import maill from '../assets/mail.svg';
import rolebg from '../assets/rolebg.svg';
import { Link } from 'react-router-dom';

const AboutCard = ({ imag, name, role, phone, insta, mail }) => {
    return (
        <div
            className="relative bg-cover bg-no-repeat bg-center sm:w-[320px] sm:h-[455px] w-[150px] h-[200px]"
            style={{ backgroundImage: 'url(' + bg + ')' }}
        >
            <img
                src={img}
                alt=""
                className="absolute w-[90px] top-[20px] left-[31px] h-[100px] sm:top-[60px] sm:left-[62px] sm:w-[200px] sm:h-[205px]"
            />
            <h1
                className={` ${classes.textch} w-fit top-[130px] left-[25px] h-fit text-[10px] sm:top-[295px] sm:left-[50px] absolute font-grobold sm:text-xl`}
            >
                Harsh Rathore
            </h1>
            <div className=" w-[50px] top-[145px] left-[17px] h-[15px] sm:top-[325px] sm:left-[50px] absolute sm:w-[80px] sm:h-[35px]">
                <img src={rolebg} alt="" className="w-full h-full" />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#4C3426] font-outfit font-bold text-[8px] sm:text-base">
                    Mentor
                </h1>
            </div>
            <p className="top-[160px] left-[23px] sm:top-[360px] font-medium sm:left-[50px] text-[#4C3426] absolute font-outfit text-[8px] sm:text-lg">
                +91 9038638267
            </p>

            {/* !!..COMMENT OUT THIS CODE AFTER ADDING DATA, AND COMMENT THE CODE PRESENT BELOW IT..!! */}
            
            {/* {insta === '' ? null : (
                <Link>
                    {' '}
                    <img
                        className="top-[172px] right-[45px] w-[20px] h-[20px] sm:top-[380px] sm:w-[45px] sm:h-[45px] font-medium sm:right-[90px] absolute"
                        src={instaa}
                        alt=""
                    />
                </Link>
            )}
            {mail === '' ? null : (
                <Link>
                    <img
                        className="top-[172px] right-[20px] w-[20px] h-[20px] sm:top-[380px] sm:w-[45px] sm:h-[45px] font-medium sm:right-[30px] absolute"
                        src={maill}
                        alt=""
                    />
                </Link>
            )} */}
             <Link>
                    {' '}
                    <img
                        className="top-[172px] right-[45px] w-[20px] h-[20px] sm:top-[380px] sm:w-[45px] sm:h-[45px] font-medium sm:right-[90px] absolute"
                        src={instaa}
                        alt=""
                    />
                </Link>
                <Link>
                    <img
                        className="top-[172px] right-[20px] w-[20px] h-[20px] sm:top-[380px] sm:w-[45px] sm:h-[45px] font-medium sm:right-[30px] absolute"
                        src={maill}
                        alt=""
                    />
                </Link>
        </div>
    );
};

export default AboutCard;
