import React from 'react';
import Button from './NewHomeButton';
import classes from './Footer.module.css';
import { useEffect, useState } from 'react';
import logo from '../assets/logoNew.svg';
import hello1 from '../assets/hello1.gif';
import hamburger from '../assets/hamburger.svg';
import aboutleft from '../assets/leftAbout.gif';


const HamsburgerNavbar = () => {
    return (
        <div className={`flex lg:hidden pb-4 justify-between items-center `}>
            <div className="adjust1 relative w-[60px] h-[100px]">
                <img src={aboutleft} alt="" className="w-full h-full" />
                <div className="absolute -top-[6px] -right-[50px] w-[100px] h-[50px]">
                    <img src={hello1} alt="" className="w-full h-full" />
                </div>
            </div>{' '}
            <img
                src={logo}
                alt=""
                className={`${classes.adjust} sm:w-[276px] sm:h-[80px] w-[180px] h-[60px]`}
            />
            <div className="me-5">
                <img src={hamburger} alt="" />
            </div>
        </div>
    );
};

export default HamsburgerNavbar;
