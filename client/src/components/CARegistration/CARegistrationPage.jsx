import { useEffect, useState } from 'react';
import VivaLogo from '../../assets/VivaL.png';
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
        <div className="flex flex-col lg:items-center lg:w-full w-4/5">
            <div className="lg:w-full  lg:px-7 ">
              
                <div className="lg:px-[200px] text-center my-6">
                    <h1 className="text-4xl lg:text-6xl text-white font-bold sm:mb-4">
                        Campus Ambassador
                    </h1>
                    <h1 className="sm:hidden block lg:text-4xl text-3xl text-center mb-3 text-gray-400 font-semibold lg:text-center">
                        Registration
                    </h1>
                </div>
                <div className='flex justify-between items-start mb-4 sm:mb-0'>
                    <div>
                        <img
                            onClick={HomeHandler}
                            className="cursor-pointer sm:w-[100px] w-[70px]"
                            src={VivaLogo}
                            alt="Vivacity"
                        ></img>
                    </div>
                    <div>
                     <h1 className="hidden sm:block lg:text-4xl text-3xl text-center  text-gray-400 font-semibold lg:text-center">
                        Registration
                    </h1>
                    </div>
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
        </div>
    );
};

export default CaRegistrationPage;
