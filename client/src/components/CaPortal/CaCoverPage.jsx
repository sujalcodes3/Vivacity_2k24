import React, { useEffect, useState } from 'react';
import './CaPortalPage.css';
import { Link } from 'react-router-dom';
import Hamsburger from './Hamsburger';
// import { motion } from "framer-motion"

function CaCoverPage() {
    const [screenSize, setScreenSize] = useState(false);
    const [showmenu, setShowmenu] = useState(false);

    const changedisplay = () => {
        if (window.innerWidth <= 680) setScreenSize(true);
        else {
            setScreenSize(false);
            setShowmenu(false);
        }
    };

    window.addEventListener('resize', changedisplay);

    const hamsburgerhandler = () => {
        setShowmenu(!showmenu);
    };

    useEffect(() => {
        changedisplay();
    }, []);

    return (
        <div className="ca-coverphoto relative h-full bg-no-repeat bg-cover bg-center">
            <div className="flex Canavbar text-white text-xl h-10 justify-between w-full items-center px-16 py-8">
                <div>
                    <h4>
                        <Link to="/">Logo</Link>
                    </h4>
                </div>
                <div className="">
                    {screenSize ? (
                        <Hamsburger hamsburgerhandler={hamsburgerhandler} />
                    ) : (
                        <ul className="flex space-x-10">
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Log In</li>
                        </ul>
                    )}
                </div>
            </div>
            {/* <div className="">
      <ul className={`${showmenu ? "flex" : "hidden"}  text-white flex-col pb-4 text-left ps-16 space-y-4 Canavbar text-xl`}>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Log In</li>
            </ul>
      </div> */}
            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex-col justify-center flex h-screen items-center items text-white sm:w-9/12 w-10/12 mx-auto"
            >
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-4">
                    CAMPUS AMBASSADOR
                </h1>
                <p className="text-lg sm:text-xl md:text-3xl mb-7">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Assumenda ea eos velit quas cumque nulla.
                </p>
                <Link
                    to="/caregistration"
                    className="text-xl border-solid border-2 px-3 py-1 rounded-lg border-white"
                >
                    Register
                </Link>
            </div>
            <div className="">
                <ul
                    className={`${
                        showmenu ? 'flex ' : 'hidden'
                    } absolute top-16 w-full flex-col text-white pb-4 text-left ps-16 space-y-4 Canavbar text-xl`}
                >
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Log In</li>
                </ul>
            </div>
        </div>
    );
}

export default CaCoverPage;
