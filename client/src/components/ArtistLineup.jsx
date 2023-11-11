import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei'
import { useRef, useState } from 'react';
import { degToRad } from 'three/src/math/MathUtils';
import Background from '../assets/Noise2.gif';
import Sponsors from '../assets/sponsors01.svg';
import { motion } from 'framer-motion';

const ArtistLineup = () => {

    const artistRef = useRef();

    const [titleText, setTitleText] = useState('');
    const seperation = 20;

    const HandleScroll = () => {
        const scroll = useScroll();
        useFrame((state, delta) => {
            state.camera.position.set(0, 12, (1 - scroll.offset - 0.03) * 200);
            state.camera.rotation.set(degToRad(-40), 0, 0);
        });
    };

    const Card = props => {
        const [activeColor, setActiveColor] = useState(false);

        const handleHover = e => {
            e.stopPropagation();
            setActiveColor(true);
            setTitleText(props.name);
        };

        const handleHoverOut = e => {
            e.stopPropagation();
            setActiveColor(false);
            setTitleText('');
        };

        return (
            <mesh
                position={props.position}
                rotation={[degToRad(-40), 0, 0]}
                onPointerOver={handleHover}
                onPointerOut={handleHoverOut}
            >
                <planeGeometry args={[10, 16]} />
                <meshBasicMaterial color={activeColor ? 'red' : 'orange'} />
            </mesh>
        );
    };

    return (
        <>  
            <div className='min-h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center' style={{backgroundImage:'url('+Background+')'}}>
                <img src={Sponsors} alt="Sponsors" />
            </div>
        </>
    );
};

export default ArtistLineup;
