import land from '../assets/newHomePageImages/4_bottom.png';
import { useParallax } from 'react-scroll-parallax';
import firstLeft from '../assets/newHomePageImages/1_left.png';
import secondLeft from '../assets/newHomePageImages/2_left.png';
import firstRight from '../assets/newHomePageImages/3_right.png';
import character from '../assets/newHomePageImages/HomePageCharacters.svg';
import cloud1 from '../assets/GIFs/cloud1.gif';
import cloud2 from '../assets/GIFs/cloud2.gif';
import { useScrollTop } from '../hooks/useScroll';

export default function ImageLayers() {
    const { ref } = useParallax({ speed: 30 });

    const res = useScrollTop();

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
            <img className={`top-[31.7%] absolute`} ref={ref} src={land} />
            <img
                className={`absolute right-[6rem] top-[47%] h-[48%] transition-all duration-400 ${
                    res ? 'opacity-0 ease-out' : ''
                }`}
                src={character}
            />
        </div>
    );
}
