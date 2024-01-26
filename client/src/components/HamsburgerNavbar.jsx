import React from 'react';
import Button from './NewHomeButton';
import classes from './Footer.module.css';
import { useEffect, useState } from 'react';
import logo from '../assets/logoNew.svg';
import hello1 from '../assets/hello1.gif';
import hamburger from '../assets/hamburger.svg';
import aboutleft from '../assets/aboutleft.gif';
import { slide as Menu } from 'react-burger-menu';
import { motion } from 'framer-motion';

const HamsburgerNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    };
    useEffect(() => {
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    return (
        <div className={`flex lg:hidden pb-4  justify-between items-center`}>
            <div className={`adjust1 relative w-[60px] h-[100px] `}>
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
            <div className="me-5 z-[100]">
                <img
                    src={hamburger}
                    alt=""
                    className="cursor-pointer w-12"
                    onClick={handleMenuToggle}
                />
            </div>
            <motion.div
                className={`flex flex-col  gap-y-8 justify-center  items-center w-screen h-screen absolute right-0 top-0 pt-24 pb-16 z-[50] px-4 ${classes.header}`}
                initial={{
                    x : 0
                }}
                animate={{
                    x: menuOpen ? 0 : 1000,
                }}
                transition={{
                    // delay: 0.5,
                    duration: 0.5,
                }}
            >
                <div className='w-screen h-screen flex flex-col justify-evenly items-center'>
                    <img src={logo} alt="logo" />
                    <div className='h-full flex flex-col justify-around'>
                        <Button title="About Us" />
                        <Button title="Events" />
                        <Button title="Sponsors" />
                    <Button title="Register" /></div>
                </div>
            </motion.div>
        </div>
    );
};

export default HamsburgerNavbar;
