import land from '../assets/newHomePageImages/4_bottom.png';
import { useParallax } from 'react-scroll-parallax';
import firstLeft from '../assets/newHomePageImages/1_left.png';
import secondLeft from '../assets/newHomePageImages/2_left.png';
import firstRight from '../assets/newHomePageImages/3_right.png';
import character from '../assets/newHomePageImages/HomePageCharacters.svg';
import { useScrollTop } from '../hooks/useScroll';

export default function ImageLayers() {
    const { ref } = useParallax({ speed: 30 });

    const res = useScrollTop();

    return (
        <div className={`w-screen flex items-center justify-center`}>
            <img className={`top-[5%]  absolute`} src={firstLeft} />
            <img className={`top-1/4  absolute`} src={secondLeft} />
            <img className={`top-1/4 absolute`} src={firstRight} />
            <img className={`top-[41.7%] absolute`} ref={ref} src={land} />
            <img
                className={`absolute right-36 top-[47%] h-[48%] transition-all duration-400 ${
                    res ? 'opacity-0 ease-out' : ''
                }`}
                src={character}
            />
        </div>
    );
}
