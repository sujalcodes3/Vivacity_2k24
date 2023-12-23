import { useEffect, useState } from 'react';
import VivaLogo from '../../assets/VivaL.webp';
import { useLocation, useNavigate } from 'react-router-dom';

const CaRegistrationPage = () => {
    const [Name, setName] = useState('');
    const navigate = useNavigate();

    const HomeHandler = () => {
        navigate('/');
    };

    const location = useLocation();

    const GoToFormHandler = () => {
        if (location.pathname.includes('caregistration')) {
            setName('Login');
            navigate('/calogin');
        } else {
            setName('Register');
            navigate('/caregistration');
        }
    };
    useEffect(() => {
        if (location.pathname.includes('caregistration')) {
            setName('Login');
        } else {
            setName('Register');
        }
    }, [location.pathname]);

    return (
        <div className="lg:w-full flex md:h-32 md:mt-4 flex-col md:flex-row lg:px-7 items-center justify-around">
            <div
                className={`h-full mt-4 md:mt-0  flex items-center justify-center`}
            >
                <img
                    onClick={HomeHandler}
                    className="cursor-pointer sm:w-[100px] w-[70px]"
                    src={VivaLogo}
                    alt="Vivacity"
                ></img>
            </div>
            <div className="lg:px-[200px] flex flex-col items-center text-center my-6 md:w-4/5 h-max">
                <h1 className="text-3xl lg:text-5xl text-center text-white w-4/5 font-bold sm:mb-4">
                    Campus Ambassador
                </h1>
                <h1 className=" lg:text-3xl text-2xl text-center mb-3 text-gray-400 font-semibold lg:text-center">
                    Registration
                </h1>
            </div>
            <div className="flex justify-between items-start mb-4 sm:mb-0">
                <div className="lg:px-6 my-4">
                    <button
                        onClick={GoToFormHandler}
                        className="flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-6  [background:var(--bg)] [border-radius:var(--radius)] transition-all shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] hover:scale-105 duration-300  w-max  items-center justify-center  hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]"
                    >
                        <div className="absolute inset-0 overflow-visible [container-type:size]">
                            <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
                                <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
                            </div>
                        </div>
                        <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"></div>
                        <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10 font-mabry">
                            {Name}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CaRegistrationPage;
