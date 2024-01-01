import Background from '../assets/racecar.gif';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate();
    return (
        <div
            className="h-screen snap-start w-full bg-cover bg-no-repeat bg-[52%_0] lg:bg-center"
            style={{ backgroundImage: 'url(' + Background + ')' }}
        >
            <div className="text-white text-center flex-col justify-center items-center space-y-2 pt-[35vh]">
                <h1 className="text-8xl text-purple-200 cursor-default select-none hover:text-purple-300 transition-all duration-300 delay-100 font-bold animate-bounce font-mabry">
                    Road to Vivacity
                </h1>
            </div>

            <button
                onClick={() => navigate('/NormalRegistration')}
                className=" text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-6  [background:var(--bg)] [border-radius:var(--radius)] transition-all shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] hover:scale-105 duration-300  w-max  items-center justify-center  hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] "
            >
                <div className="absolute inset-0 overflow-visible [container-type:size]">
                    <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
                        <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                    </div>
                </div>
                <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                <span className="relative whitespace-pre text-center text-lg font-semibold leading-none tracking-tight text-white z-10 font-mabry">
                    Register Now
                </span>
            </button>
        </div>
    );
};

export default Hero;
