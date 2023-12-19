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
        <div className="flex flex-col items-center">
            <div className="flex flex-col justify-end lg:flex-row  items-center">
                <div className="flex-row">
                    <div className='w-1/3 mx-auto'>
                        <img
                            onClick={HomeHandler}
                            className=" lg:block hidden cursor-pointer"
                            src={VivaLogo}
                            alt="Vivacity"
                        ></img>
                    </div>   
                </div>
                <div className="text-center lg:mx-64 ">
                    <div className="flex lg:flex-col pt-2 text-center  align-middle items-center">
                        
                        <h1
                            className="lg:text-3xl text-3xl   text-white font-semibold text-center  lg:text-center"
                        >
                            Registration
                        </h1>
                    </div>
                    <h1
                        className="text-4xl lg:text-4xl text-white font-semibold mb-4"
                    >
                        Campus Ambassador
                    </h1>
                </div>
                <div className="my-2 py-4 lg:m-0">
                <button
                onClick={GoToFormHandler}
                className="flex text-white dark:text-black group relative cursor-pointer overflow-hidden whitespace-nowrap h-11 px-6  [background:var(--bg)] [border-radius:var(--radius)] transition-all shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset] hover:scale-105 duration-300  w-max  items-center justify-center  hover:shadow-[0_0_0_3px_rgba(255,255,255,0.3)_inset]">
                    <div className="absolute inset-0 overflow-visible [container-type:size]">
                    <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
                        <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]">
                        </div>
                        </div>
                    </div>
                    <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]">
                    </div>
                    <span className="relative whitespace-pre text-center text-base font-semibold leading-none tracking-tight text-white z-10 font-mabry">{Name}</span>
                </button>
                </div>
            </div>
        </div>
    );
};

export default CaRegistrationPage;
