import React from 'react';
import bg from '../assets/aboutCardbg.png';
import img from '../assets/shambavi.svg';
import classes from './aboutCard.module.css';
import instaa from '../assets/insta.svg';
import maill from '../assets/mail.svg';
import rolebg from "../assets/rolebg.svg"
import { Link } from 'react-router-dom';

const AboutCard = ({imag,name,role,phone,insta,mail}) => {
    return (
        <div
            className="relative bg-cover bg-no-repeat bg-center w-[320px] h-[455px]"
            style={{ backgroundImage: 'url(' + bg + ')' }}
        >
            <img
                src={img}
                alt=""
                className="absolute top-[60px] left-[62px] w-[200px] h-[205px]"
            />
            <h1
                className={` ${classes.textch} top-[295px] left-[50px] absolute font-grobold text-xl`}
            >
                Harsh Rathore
            </h1>
            <div className='top-[325px] left-[50px] absolute w-[80px] h-[35px]' >
            <img src={rolebg} alt="" />
            <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#4C3426] font-outfit font-bold'>Mentor</h1>
            </div>
            <p className="top-[360px] font-medium left-[50px] text-[#4C3426] absolute font-outfit text-lg">
                +91 9038638267
            </p>
            <Link>
                {' '}
                <img
                    className="top-[380px] font-medium right-[90px] absolute"
                    src={instaa}
                    alt=""
                />
            </Link>
            <Link>
                <img
                    className="top-[380px] font-medium right-[30px] absolute"
                    src={maill}
                    alt=""
                />
            </Link>
        </div>
    );
};

export default AboutCard;
