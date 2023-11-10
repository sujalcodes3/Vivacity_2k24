import React, { useEffect, useState } from 'react';
import './CaPortalPage.css';
import { Link } from 'react-router-dom';
import Hamsburger from './Hamsburger';
import Logo from "../../assets/VivaLogo.png"
import VivaLogo from '../../assets/VivaL.png';
import vivalo from "../../assets/VIVACITY.svg"
// import { motion } from "framer-motion"

function CaCoverPage() {

    return (
        <div className="ca-coverphoto h-full bg-no-repeat bg-cover bg-center">
            <div className="flex Canavbar text-white text-xl h-10 justify-between w-full items-center px-16 pt-12">
                <li className='w-20 h-20 list-none'>
                    <Link to="/"><img
                        className="cursor-pointer"
                        src={VivaLogo}
                        alt="Vivacity"
                    ></img></Link>
                </li>

                <li className='list-none bg-blue-500 hover:bg-blue-600 text-white text-2xl py-2 px-6 rounded-lg '>
                    <Link to="/">Log In</Link>
                </li>
            </div>

            <div
                className="flex-col justify-center flex h-screen items-center items text-white sm:w-9/12 w-10/12 mx-auto"
            >
                <img src={vivalo} alt="" />
                <Link
                    to="/caregistration"
                    className="text-xl mt-8 font-semibold px-3 py-2 rounded-lg bg-[#EEB199]  text-[#010516]" style={{fontFamily:"'Orbitron', sans-serif",fontWeight:600}}
                >
                    REGISTER
                </Link>
            </div>
        </div>
    );
}

export default CaCoverPage;
