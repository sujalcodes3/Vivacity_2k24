import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, ScrollControls, useScroll } from '@react-three/drei'
import { useState } from 'react';
import { degToRad } from 'three/src/math/MathUtils';

const ArtistLineup = () => {

    const [titleText, setTitleText] = useState('');
    const seperation = 20;

    const HandleScroll = () => {
        const scroll = useScroll();
        useFrame((state, delta) => {
            state.camera.position.set(0, 12, (1 - scroll.offset) * 200);
            state.camera.rotation.set(degToRad(-40), 0, 0);
        })
    }

    const Card = (props) => {

        const [activeColor, setActiveColor] = useState(false);

        const handleHover = (e) => {
            e.stopPropagation();
            setActiveColor(true);
            setTitleText(props.name);
        }

        const handleHoverOut = (e) => {
            e.stopPropagation();
            setActiveColor(false)
            setTitleText('');
        }

        return (
            <mesh
                position={props.position}
                rotation={[degToRad(-40), 0, 0]}
                onPointerOver={handleHover}
                onPointerOut={handleHoverOut}
            >
                <planeGeometry args={[10, 16]} />
                <meshBasicMaterial color={activeColor ? "red" : "orange"} />
            </mesh>
        )
    }

    return (
        <>
            <div className="h-screen w-full">
                <Canvas>
                    <ScrollControls pages={5}>
                        <PerspectiveCamera makeDefault near={1} far={60} />

                        <Card position={[8, 0, seperation * 9]} name="Card 1" />
                        <Card position={[-8, 0, seperation * 8]} name="Card 2" />
                        <Card position={[8, 0, seperation * 7]} name="Card 3" />
                        <Card position={[-8, 0, seperation * 6]} name="Card 4" />
                        <Card position={[8, 0, seperation * 5]} name="Card 5" />
                        <Card position={[-8, 0, seperation * 4]} name="Card 6" />
                        <Card position={[8, 0, seperation * 3]} name="Card  7" />
                        <Card position={[-8, 0, seperation * 2]} name="Card 8" />
                        <Card position={[8, 0, seperation * 1]} name="Card 9" />
                        <Card position={[-8, 0, seperation * 0]} name="Card 10" />

                        <HandleScroll />
                    </ScrollControls>
                </Canvas>
            </div>
            
        </>

    )
}

export default ArtistLineup;