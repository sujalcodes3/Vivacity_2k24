import React from 'react';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import Button from './NewHomeButton';

import classes from './Footer.module.css';

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
                <img src="https://d3lhw1p67h4h5r.cloudfront.net/aboutleft.gif" alt="" className="w-full h-full" />
                <div className="absolute -top-[6px] -right-[50px] w-[100px] h-[50px]">
                    <img src='https://d3lhw1p67h4h5r.cloudfront.net/hello1.gif' alt="" className="w-full h-full" />
                </div>
            </div>{' '}
            <img
                src='https://d3lhw1p67h4h5r.cloudfront.net/logoNew.svg'
                alt=""
                className={`${classes.adjust} sm:w-[276px] sm:h-[80px] w-[180px] h-[60px]`}
            />
            <div className="me-5 z-[100]">
                <img
                    src='https://d3lhw1p67h4h5r.cloudfront.net/hamburger.webp'
                    alt=""
                    className="cursor-pointer w-12"
                    onClick={handleMenuToggle}
                />
            </div>
            <motion.div
                className={`flex flex-col  gap-y-8 justify-center  items-center w-screen h-screen absolute right-0 top-0 pt-24 pb-16 z-[80] px-4 ${classes.header}`}
                initial={{
                    x: 0,
                }}
                animate={{
                    x: menuOpen ? 0 : 1000,
                }}
                transition={{
                    // delay: 0.5,
                    duration: 0.5,
                }}
            >
                <div className="w-screen h-screen flex flex-col justify-evenly items-center">
                    <Link to = "/">
                        <img src='https://d3lhw1p67h4h5r.cloudfront.net/logoNew.svg' alt="logo" />
                    </Link>
                    <div className="h-full flex flex-col justify-around">
                        <Button title="Our Team" onclick='about'/>
                        <Button title="Events"  onclick='events'/>
                        <Button title="Sponsors" onclick=''/>
                        <Button title="Register"  onclick= 'registration'/>
                        <Button title="Buy Merch" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HamsburgerNavbar;
