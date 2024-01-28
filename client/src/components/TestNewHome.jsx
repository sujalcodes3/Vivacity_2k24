import { useParallax } from 'react-scroll-parallax';

import { useScrollTop } from '../hooks/useScroll';

export default function ImageLayers() {
    const { ref } = useParallax({ speed: 30 });

    const res = useScrollTop(70);

    return (
        <div className={`w-screen flex items-center justify-center`}>
            <img className={`top-[5%]  absolute`} src='https://d3lhw1p67h4h5r.cloudfront.net/1_left.webp' />
            <img className={`top-1/4  absolute`} src='https://d3lhw1p67h4h5r.cloudfront.net/2_left.webp' />
            <img className={`top-1/4 absolute`} src='https://d3lhw1p67h4h5r.cloudfront.net/3_right.webp' />
            <div className='absolute w-full top-[5%] flex justify-around '>
                <img src="https://d3lhw1p67h4h5r.cloudfront.net/cloud2.gif" alt="moving clouds" className=' w-1/2 relative'/>
                <img src="https://d3lhw1p67h4h5r.cloudfront.net/cloud1.gif" alt="moving clouds" className=' w-1/2 relative' />
            </div>
            <img className={`top-[31.7%] absolute w-screen`} ref={ref} src='https://d3lhw1p67h4h5r.cloudfront.net/4_bottom.webp' />
            <div></div>
            <div className={`absolute right-20 top-[35%] z-50 transition-all duration-400 ${
                res ? "opacity-0 ease-out" : ""
            }`}>
                    <img src='https://d3lhw1p67h4h5r.cloudfront.net/welcome-speech.gif' alt="dialog" className="lg:w-[300px] w-[150px] relative "/>
                    <img src= "https://d3lhw1p67h4h5r.cloudfront.net/charL.gif" alt="character" className="lg:w-[194px] w-[100px]"/>
            </div>
        </div>
    );
}
