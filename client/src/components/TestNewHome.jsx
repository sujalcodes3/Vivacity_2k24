import land from '../assets/newHomePageImages/4_bottom.png';
import { useParallax } from 'react-scroll-parallax';
import welcomeSpeech from '../assets/GIFs/welcome-speech.gif'
import firstLeft from '../assets/newHomePageImages/1_left.png';
import secondLeft from '../assets/newHomePageImages/2_left.png';
import firstRight from '../assets/newHomePageImages/3_right.png';

import char from "../assets/GIFs/charL.gif";
import cloud1 from '../assets/GIFs/cloud1.gif';
import cloud2 from '../assets/GIFs/cloud2.gif';

import { useScrollTop } from '../hooks/useScroll';

export default function ImageLayers() {
    const { ref } = useParallax({ speed: 30 });

    const res = useScrollTop(70);

    return (
        <div className={`w-screen flex items-center justify-center`}>
            <img className={`top-[5%]  absolute`} src={firstLeft} />
            <img className={`top-1/4  absolute`} src={secondLeft} />
            <img className={`top-1/4 absolute`} src={firstRight} />
            <div className="absolute w-full top-[5%] flex justify-around ">
                <img
                    src={cloud2}
                    alt="moving clouds"
                    className=" w-1/3 relative"
                />
                <img
                    src={cloud1}
                    alt="moving clouds"
                    className=" w-2/3 relative"
                />
            </div>
            <img className={`top-[31.7%] absolute w-screen`} ref={ref} src={land} />
            <div></div>
            <div className={`absolute right-20 top-[35%] z-50 transition-all duration-400 ${
                res ? "opacity-0 ease-out" : ""
            }`}>
                    <img src={welcomeSpeech} alt="dialog" className="lg:w-[300px] w-[150px] relative "/>
                    <img src={char} alt="character" className="lg:w-[194px] w-[100px]"/>
            </div>
        </div>
    );
}
