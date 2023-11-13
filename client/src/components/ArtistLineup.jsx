import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei'
import { useRef, useState } from 'react';
import { degToRad } from 'three/src/math/MathUtils';
import Background from '../assets/Noise2.gif';
import Artists from '../assets/desktop-artists.svg';
import ArtistsMob from '../assets/mobile-artists.svg';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
const ArtistLineup = () => {

    const [isDesktop,setIsDesktop] = useState(true);

    window.addEventListener("resize", ()=>{
        if(window.innerWidth < 1024){
            setIsDesktop(false);
        }
        else{
            setIsDesktop(true);
        }
    });

    useEffect( ()=>{
        if(window.innerWidth < 1024){
            setIsDesktop(false);
        }
    } , []);

    return (
        <>  
            <div className='min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center' style={{backgroundImage:'url('+Background+')'}}>
                <img className='w-full' src={isDesktop?Artists:ArtistsMob} alt="Artists" />
            </div>
        </>
    );
};

export default ArtistLineup;
