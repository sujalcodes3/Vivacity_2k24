import React from 'react';
import bg from '../assets/aboutCardbg.png';
import img from '../assets/shambavi.svg';
import classes from './aboutCard.module.css';
import instaa from '../assets/insta.svg';
import maill from '../assets/mail.svg';
import { Link } from 'react-router-dom';

const AboutCard = ({imag,name,role,phone,insta,mail}) => {
    return (
        <div
            className="relative bg-cover bg-no-repeat bg-center w-[340px] h-[500px]"
            style={{ backgroundImage: 'url(' + bg + ')' }}
        >
            <img
                src={img}
                alt=""
                className="absolute top-[66px] left-[62px] w-[220px] h-[225px]"
            />
            <h1
                className={` ${classes.textch} top-[330px] left-[50px] absolute font-grobold text-xl`}
            >
                Harsh Rathore
            </h1>
            <p className="top-[390px] font-medium left-[50px] text-[#4C3426] absolute font-outfit text-lg">
                +91 9038638267
            </p>
            <Link>
                {' '}
                <img
                    className="top-[420px] font-medium right-[90px] absolute"
                    src={instaa}
                    alt=""
                />
            </Link>
            <Link>
                <img
                    className="top-[420px] font-medium right-[30px] absolute"
                    src={maill}
                    alt=""
                />
            </Link>
        </div>
    );
};

export default AboutCard;
